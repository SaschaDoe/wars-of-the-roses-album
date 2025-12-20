<script lang="ts">
	import { songs, type Song } from '$lib/data/songs';
	import { onMount } from 'svelte';
	import { language, currentTranslations } from '$lib/i18n';
	import { audioPlayer } from '$lib/stores/audioPlayer';

	let visible = $state(false);

	onMount(() => {
		setTimeout(() => {
			visible = true;
		}, 100);
	});

	function handlePlayClick(event: MouseEvent, song: Song) {
		event.preventDefault();
		event.stopPropagation();

		if ($audioPlayer.currentSong?.id === song.id) {
			audioPlayer.toggle();
		} else {
			audioPlayer.playSong(song);
		}
	}

	function isPlaying(song: Song): boolean {
		return $audioPlayer.currentSong?.id === song.id && $audioPlayer.isPlaying;
	}
</script>

<svelte:head>
	<title>{$currentTranslations.songs.pageTitle}</title>
</svelte:head>

<div class="songs-page" class:visible>
	<div class="page-header">
		<h1 class="page-title">{$currentTranslations.songs.title}</h1>
		<p class="page-subtitle">{$currentTranslations.songs.subtitle}</p>
	</div>

	<div class="album-info">
		<div class="album-cover-small">
			<img src="/images/album-cover.jpg" alt={$currentTranslations.songs.title} />
		</div>
		<div class="album-details">
			<h2>Uncivil War</h2>
			<p class="release-info">2025 • {songs.length} {$currentTranslations.songs.tracks}</p>
			<p class="album-description">
				{$currentTranslations.songs.albumDescription}
			</p>
		</div>
	</div>

	<div class="tracklist">
		{#each songs as song, index}
			<div class="track-item" style="animation-delay: {index * 0.1}s" class:is-playing={isPlaying(song)}>
				<button
					class="track-play-btn"
					onclick={(e) => handlePlayClick(e, song)}
					aria-label={isPlaying(song) ? 'Pause' : 'Play'}
				>
					{#if isPlaying(song)}
						<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
							<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
						</svg>
					{:else}
						<span class="track-number-text">{song.trackNumber}</span>
						<svg class="play-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
							<path d="M8 5v14l11-7z"/>
						</svg>
					{/if}
				</button>
				<a href="/songs/{song.id}" class="track-info">
					<h3 class="track-title">{song.title}</h3>
					<p class="track-context">{song.historicalContext.year} • {song.historicalContext.location.name}</p>
				</a>
				<div class="track-duration">{song.duration}</div>
				<a href="/songs/{song.id}" class="track-link-icon" aria-label="View song details">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
						<path d="M9 18l6-6-6-6"/>
					</svg>
				</a>
			</div>
		{/each}
	</div>

	<div class="download-section">
		<h3>{$currentTranslations.songs.downloadAlbum}</h3>
		<p>{$currentTranslations.songs.downloadDescription}</p>
		<a
			href="https://pub-b01755924f3846e0904075a05c92bf74.r2.dev/WarsOfTheRoses/Wars%20of%20the%20Roses.zip"
			download
			class="download-album-button"
		>
			{$currentTranslations.songs.downloadButton}
		</a>
	</div>

	<div class="album-credits">
		<h3>{$currentTranslations.songs.aboutAlbum}</h3>
		<p>
			{$currentTranslations.songs.aboutDescription}
		</p>
	</div>
</div>

<style>
	.songs-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease-out;
	}

	.songs-page.visible {
		opacity: 1;
		transform: translateY(0);
	}

	@media (max-width: 768px) {
		.songs-page {
			padding: 1rem;
		}
	}

	.page-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.page-title {
		font-size: 4rem;
		margin-bottom: 0.5rem;
		background: linear-gradient(135deg, var(--color-gold), var(--color-accent-light));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.page-subtitle {
		font-size: 1.5rem;
		color: var(--color-text-secondary);
		font-style: italic;
	}

	.album-info {
		display: grid;
		grid-template-columns: 200px 1fr;
		gap: 2rem;
		margin-bottom: 3rem;
		padding: 2rem;
		background: rgba(26, 26, 26, 0.5);
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 8px;
	}

	.album-cover-small {
		width: 200px;
		height: 200px;
		border-radius: 8px;
		overflow: hidden;
		border: 2px solid var(--color-gold);
		box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3);
	}

	.album-cover-small img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.album-details h2 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.release-info {
		color: var(--color-text-secondary);
		margin-bottom: 1rem;
		font-size: 1.1rem;
	}

	.album-description {
		line-height: 1.8;
		color: var(--color-text-secondary);
	}

	.tracklist {
		margin-bottom: 3rem;
	}

	.track-item {
		display: grid;
		grid-template-columns: 60px 1fr auto 40px;
		gap: 1.5rem;
		align-items: center;
		padding: 1.5rem;
		margin-bottom: 0.5rem;
		background: rgba(26, 26, 26, 0.3);
		border: 1px solid transparent;
		border-radius: 8px;
		transition: all 0.3s ease;
		opacity: 0;
		animation: fadeInSlide 0.6s ease-out forwards;
	}

	@keyframes fadeInSlide {
		from {
			opacity: 0;
			transform: translateX(-30px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.track-item:hover {
		background: rgba(26, 26, 26, 0.8);
		border-color: var(--color-gold);
		box-shadow: 0 5px 20px rgba(212, 175, 55, 0.2);
	}

	.track-item.is-playing {
		background: rgba(139, 0, 0, 0.2);
		border-color: var(--color-accent);
	}

	.track-play-btn {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: none;
		background: transparent;
		color: var(--color-gold);
		font-size: 1.3rem;
		font-weight: bold;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.2s ease;
		position: relative;
	}

	.track-play-btn:hover {
		background: var(--color-gold);
		color: var(--color-bg);
	}

	.track-play-btn .play-icon {
		display: none;
		position: absolute;
	}

	.track-play-btn:hover .track-number-text {
		display: none;
	}

	.track-play-btn:hover .play-icon {
		display: block;
	}

	.track-item.is-playing .track-play-btn {
		background: var(--color-accent);
		color: var(--color-text);
	}

	.track-info {
		min-width: 0;
		text-decoration: none;
		display: block;
	}

	.track-title {
		font-size: 1.5rem;
		margin-bottom: 0.25rem;
		color: var(--color-text);
		transition: color 0.2s ease;
	}

	.track-info:hover .track-title {
		color: var(--color-gold);
	}

	.track-context {
		font-size: 0.9rem;
		color: var(--color-text-secondary);
		font-style: italic;
	}

	.track-duration {
		font-size: 1.1rem;
		color: var(--color-text-secondary);
		font-family: 'Courier New', monospace;
	}

	.track-link-icon {
		color: var(--color-text-secondary);
		opacity: 0;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.track-item:hover .track-link-icon {
		opacity: 1;
		color: var(--color-gold);
	}

	.download-section {
		text-align: center;
		padding: 2rem;
		margin-bottom: 2rem;
		background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(139, 0, 0, 0.1));
		border: 2px solid var(--color-gold);
		border-radius: 8px;
	}

	.download-section h3 {
		font-size: 1.8rem;
		margin-bottom: 0.5rem;
		color: var(--color-gold);
	}

	.download-section p {
		color: var(--color-text-secondary);
		margin-bottom: 1.5rem;
	}

	.download-album-button {
		display: inline-block;
		padding: 1rem 2rem;
		background: linear-gradient(135deg, var(--color-gold), var(--color-accent));
		color: var(--color-bg);
		font-size: 1.2rem;
		font-weight: bold;
		border-radius: 4px;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.download-album-button:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
	}

	.album-credits {
		padding: 2rem;
		background: rgba(139, 0, 0, 0.1);
		border-left: 3px solid var(--color-accent);
		border-radius: 4px;
	}

	.album-credits h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.album-credits p {
		line-height: 1.8;
		color: var(--color-text-secondary);
	}

	@media (max-width: 768px) {
		.page-title {
			font-size: 2.5rem;
		}

		.album-info {
			grid-template-columns: 1fr;
			text-align: center;
		}

		.album-cover-small {
			margin: 0 auto;
		}

		.track-item {
			grid-template-columns: 50px 1fr;
			gap: 1rem;
			padding: 1rem;
		}

		.track-duration,
		.track-link-icon {
			display: none;
		}

		.track-play-btn {
			width: 40px;
			height: 40px;
		}

		.track-title {
			font-size: 1.2rem;
		}
	}
</style>
