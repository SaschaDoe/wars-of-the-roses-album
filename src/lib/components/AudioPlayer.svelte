<script lang="ts">
	import { audioPlayer, isPlayerVisible } from '$lib/stores/audioPlayer';
	import { language } from '$lib/i18n';

	let audioElement: HTMLAudioElement;
	let progressBar: HTMLDivElement;

	// Reactive audio source
	const audioSrc = $derived($audioPlayer.currentSong?.audioUrl || '');

	// Handle play/pause state
	$effect(() => {
		if (!audioElement) return;

		if ($audioPlayer.isPlaying && audioSrc) {
			audioElement.play().catch(() => {
				audioPlayer.pause();
			});
		} else {
			audioElement.pause();
		}
	});

	// Sync volume
	$effect(() => {
		if (!audioElement) return;
		audioElement.volume = $audioPlayer.volume;
	});

	function handleTimeUpdate() {
		audioPlayer.setCurrentTime(audioElement.currentTime);
	}

	function handleLoadedMetadata() {
		audioPlayer.setDuration(audioElement.duration);
		// Auto-play when metadata is loaded and we're supposed to be playing
		if ($audioPlayer.isPlaying) {
			audioElement.play().catch(() => audioPlayer.pause());
		}
	}

	function handleEnded() {
		audioPlayer.nextSong();
	}

	function handleCanPlay() {
		// Start playing when audio can play
		if ($audioPlayer.isPlaying) {
			audioElement.play().catch(() => audioPlayer.pause());
		}
	}

	function formatTime(seconds: number): string {
		if (isNaN(seconds)) return '0:00';
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	}

	function handleProgressClick(event: MouseEvent) {
		if (!progressBar || !audioElement) return;
		const rect = progressBar.getBoundingClientRect();
		const percent = (event.clientX - rect.left) / rect.width;
		const newTime = percent * $audioPlayer.duration;
		audioElement.currentTime = newTime;
		audioPlayer.setCurrentTime(newTime);
	}

	function handleClose() {
		audioPlayer.stop();
	}

	const progress = $derived($audioPlayer.duration > 0 ? ($audioPlayer.currentTime / $audioPlayer.duration) * 100 : 0);
</script>

<!-- Hidden audio element that persists -->
<audio
	bind:this={audioElement}
	src={audioSrc}
	ontimeupdate={handleTimeUpdate}
	onloadedmetadata={handleLoadedMetadata}
	onended={handleEnded}
	oncanplay={handleCanPlay}
	preload="auto"
></audio>

{#if $isPlayerVisible && $audioPlayer.currentSong}
	<div class="audio-player-bar">
		<div class="player-content">
			<div class="song-info">
				<a href="/songs/{$audioPlayer.currentSong.id}" class="song-title">
					{$audioPlayer.currentSong.title}
				</a>
				<span class="song-meta">
					{$language === 'de' ? 'Titel' : 'Track'} {$audioPlayer.currentSong.trackNumber}
				</span>
			</div>

			<div class="player-controls">
				<button
					class="control-btn"
					onclick={() => audioPlayer.prevSong()}
					disabled={$audioPlayer.currentSong.trackNumber <= 1}
					aria-label="Previous song"
				>
					<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
						<path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
					</svg>
				</button>

				<button
					class="control-btn play-btn"
					onclick={() => audioPlayer.toggle()}
					aria-label={$audioPlayer.isPlaying ? 'Pause' : 'Play'}
				>
					{#if $audioPlayer.isPlaying}
						<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
							<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
						</svg>
					{:else}
						<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
							<path d="M8 5v14l11-7z"/>
						</svg>
					{/if}
				</button>

				<button
					class="control-btn"
					onclick={() => audioPlayer.nextSong()}
					disabled={$audioPlayer.currentSong.trackNumber >= 22}
					aria-label="Next song"
				>
					<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
						<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
					</svg>
				</button>
			</div>

			<div class="progress-section">
				<span class="time">{formatTime($audioPlayer.currentTime)}</span>
				<div
					class="progress-bar"
					bind:this={progressBar}
					onclick={handleProgressClick}
					role="slider"
					aria-label="Song progress"
					aria-valuenow={progress}
					aria-valuemin={0}
					aria-valuemax={100}
					tabindex="0"
				>
					<div class="progress-fill" style="width: {progress}%"></div>
					<div class="progress-handle" style="left: {progress}%"></div>
				</div>
				<span class="time">{formatTime($audioPlayer.duration)}</span>
			</div>

			<button class="close-btn" onclick={handleClose} aria-label="Close player">
				<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
				</svg>
			</button>
		</div>
	</div>
{/if}

<style>
	.audio-player-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(10, 10, 10, 0.98);
		border-top: 2px solid var(--color-gold);
		padding: 0.75rem 1.5rem;
		z-index: 1000;
		backdrop-filter: blur(10px);
	}

	.player-content {
		max-width: 1400px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.song-info {
		min-width: 200px;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.song-title {
		font-weight: 600;
		color: var(--color-gold);
		text-decoration: none;
		font-size: 1rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.song-title:hover {
		text-decoration: underline;
	}

	.song-meta {
		font-size: 0.8rem;
		color: var(--color-text-secondary);
	}

	.player-controls {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.control-btn {
		background: none;
		border: none;
		color: var(--color-text);
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
	}

	.control-btn:hover:not(:disabled) {
		color: var(--color-gold);
		background: rgba(212, 175, 55, 0.1);
	}

	.control-btn:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.play-btn {
		background: var(--color-gold);
		color: var(--color-bg);
		width: 40px;
		height: 40px;
	}

	.play-btn:hover {
		background: var(--color-accent-light);
		color: var(--color-text);
	}

	.progress-section {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.time {
		font-size: 0.8rem;
		color: var(--color-text-secondary);
		min-width: 40px;
		font-variant-numeric: tabular-nums;
	}

	.time:last-child {
		text-align: right;
	}

	.progress-bar {
		flex: 1;
		height: 6px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 3px;
		cursor: pointer;
		position: relative;
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, var(--color-accent), var(--color-gold));
		border-radius: 3px;
		transition: width 0.1s linear;
	}

	.progress-handle {
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 14px;
		height: 14px;
		background: var(--color-gold);
		border-radius: 50%;
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	.progress-bar:hover .progress-handle {
		opacity: 1;
	}

	.close-btn {
		background: none;
		border: none;
		color: var(--color-text-secondary);
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
	}

	.close-btn:hover {
		color: var(--color-text);
		background: rgba(255, 255, 255, 0.1);
	}

	@media (max-width: 768px) {
		.audio-player-bar {
			padding: 0.5rem 1rem;
		}

		.player-content {
			gap: 1rem;
			flex-wrap: wrap;
		}

		.play-btn {
			width: 36px;
			height: 36px;
		}

		.song-info {
			min-width: auto;
			flex: 1;
			order: 1;
		}

		.player-controls {
			order: 2;
		}

		.progress-section {
			order: 3;
			width: 100%;
			flex-basis: 100%;
		}

		.close-btn {
			order: 2;
		}
	}

	@media (max-width: 480px) {
		.player-controls {
			gap: 0.25rem;
		}

		.time {
			min-width: 36px;
		}
	}
</style>
