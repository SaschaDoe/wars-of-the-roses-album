<script lang="ts">
	import type { PageData } from './$types';
	import MapComponent from '$lib/components/MapComponent.svelte';
	import LinkifiedText from '$lib/components/LinkifiedText.svelte';
	import { language, currentTranslations } from '$lib/i18n';
	import { audioPlayer } from '$lib/stores/audioPlayer';

	let { data }: { data: PageData } = $props();
	let song = $derived(data.song);
	let prevSong = $derived(data.prevSong);
	let nextSong = $derived(data.nextSong);
	let album = $derived(data.album);

	const albumTitle = $derived($language === 'de' ? album.titleDe : album.title);

	let activeTab = $state<'lyrics' | 'history'>('lyrics');

	const isCurrentSong = $derived($audioPlayer.currentSong?.id === song.id);
	const isPlaying = $derived(isCurrentSong && $audioPlayer.isPlaying);

	function handlePlay() {
		if (isCurrentSong) {
			audioPlayer.toggle();
		} else {
			audioPlayer.playSong(song);
		}
	}

	function getHistoricalTitle() {
		return $language === 'de' && song.historicalContext.titleDe
			? song.historicalContext.titleDe
			: song.historicalContext.title;
	}

	function getHistoricalDescription() {
		return $language === 'de' && song.historicalContext.descriptionDe
			? song.historicalContext.descriptionDe
			: song.historicalContext.description;
	}
</script>

<svelte:head>
	<title>{song.title} - {albumTitle}</title>
</svelte:head>

<div class="song-page">
	<a href="/albums/{album.slug}/songs" class="back-link">{$currentTranslations.song.backToSongs}</a>

	<div class="song-header">
		<div class="song-number">{$currentTranslations.song.track} {song.trackNumber} • {song.duration}</div>
		<h1 class="song-title">{song.title}</h1>
		<div class="song-meta">
			<span class="year">{song.historicalContext.year}</span>
			{#if song.historicalContext.location}
				<span class="separator">•</span>
				<span class="location">{song.historicalContext.location.name}</span>
			{/if}
		</div>
	</div>

	{#if song.audioUrl}
		<div class="audio-controls">
			<button class="play-button" class:playing={isPlaying} onclick={handlePlay}>
				{#if isPlaying}
					<svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
						<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
					</svg>
					<span>{$language === 'de' ? 'Pause' : 'Pause'}</span>
				{:else}
					<svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
						<path d="M8 5v14l11-7z"/>
					</svg>
					<span>{$language === 'de' ? 'Abspielen' : 'Play Song'}</span>
				{/if}
			</button>
			<a href={song.audioUrl} download class="download-button" title="Download Song">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
					<polyline points="7 10 12 15 17 10"/>
					<line x1="12" y1="15" x2="12" y2="3"/>
				</svg>
			</a>
		</div>
	{/if}

	<div class="tabs">
		<button
			class="tab-button"
			class:active={activeTab === 'lyrics'}
			onclick={() => activeTab = 'lyrics'}
		>
			{$currentTranslations.song.lyrics}
		</button>
		<button
			class="tab-button"
			class:active={activeTab === 'history'}
			onclick={() => activeTab = 'history'}
		>
			{$currentTranslations.song.historicalContext}
		</button>
	</div>

	<div class="tab-content">
		{#if activeTab === 'lyrics'}
			<div class="lyrics-section animate-fade-in">
				<div class="lyrics-container">
					{#each song.lyrics as line}
						{#if line.startsWith('[')}
							<p class="lyrics-section-title">{line}</p>
						{:else if line === ''}
							<br />
						{:else}
							<p class="lyrics-line">{line}</p>
						{/if}
					{/each}
				</div>
			</div>
		{:else}
			<div class="history-section animate-fade-in">
				<div class="history-header">
					{#if song.historicalContext.imageUrl}
						<img src={song.historicalContext.imageUrl} alt={getHistoricalTitle()} class="history-thumbnail" />
					{/if}
					<div class="history-header-text">
						<h2>{getHistoricalTitle()}</h2>
						<div class="history-content">
							{#each getHistoricalDescription().split('\n\n') as paragraph}
								<p><LinkifiedText text={paragraph} /></p>
							{/each}
						</div>
					</div>
				</div>

				{#if song.historicalContext.images && song.historicalContext.images.length > 0}
					<div class="history-gallery">
						{#each song.historicalContext.images as image}
							<figure class="gallery-item">
								<img src={image.url} alt={$language === 'de' ? image.captionDe : image.caption} />
								<figcaption>{$language === 'de' ? image.captionDe : image.caption}</figcaption>
							</figure>
						{/each}
					</div>
				{/if}

				<div class="key-figures">
					<h3>{$currentTranslations.song.keyFigures}</h3>
					<ul>
						{#each song.historicalContext.keyFigures as figure}
							<li>{figure}</li>
						{/each}
					</ul>
				</div>

				{#if song.historicalContext.location}
					<div class="map-section">
						<h3>{$currentTranslations.encyclopedia.location}</h3>
						<MapComponent location={song.historicalContext.location} />
					</div>
				{/if}
			</div>
		{/if}
	</div>

	<div class="song-navigation">
		{#if prevSong}
			<a href="/albums/{album.slug}/songs/{prevSong.id}" class="nav-button prev">
				{$currentTranslations.song.previousSong}
			</a>
		{/if}
		{#if nextSong}
			<a href="/albums/{album.slug}/songs/{nextSong.id}" class="nav-button next">
				{$currentTranslations.song.nextSong}
			</a>
		{/if}
	</div>
</div>

<style>
	.song-page {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 2rem;
		color: var(--color-text-secondary);
		font-size: 1rem;
		transition: color 0.3s ease;
	}

	.back-link:hover {
		color: var(--color-gold);
	}

	.song-header {
		text-align: center;
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 2px solid var(--color-accent);
	}

	.song-number {
		font-size: 0.9rem;
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.5rem;
	}

	.song-title {
		font-size: 4rem;
		margin-bottom: 1rem;
		color: var(--color-gold);
		text-shadow: 0 0 8px rgba(212, 175, 55, 0.3);
	}

	.song-meta {
		font-size: 1.1rem;
		color: var(--color-text-secondary);
	}

	.separator {
		margin: 0 1rem;
	}

	.audio-controls {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 3rem;
	}

	.play-button {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 2rem;
		background: linear-gradient(135deg, var(--color-gold), var(--color-accent));
		color: var(--color-bg);
		border: none;
		border-radius: 50px;
		font-size: 1.1rem;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.play-button:hover {
		transform: scale(1.05);
		box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
	}

	.play-button.playing {
		background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
	}

	.play-button svg {
		flex-shrink: 0;
	}

	.download-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 48px;
		height: 48px;
		background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
		color: var(--color-text);
		border-radius: 50%;
		text-decoration: none;
		transition: all 0.3s ease;
		flex-shrink: 0;
	}

	.download-button:hover {
		transform: scale(1.1);
		box-shadow: 0 5px 20px rgba(139, 0, 0, 0.4);
	}

	.tabs {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
		border-bottom: 2px solid rgba(212, 175, 55, 0.2);
	}

	.tab-button {
		padding: 1rem 2rem;
		background: none;
		border: none;
		color: var(--color-text-secondary);
		font-size: 1.2rem;
		font-family: var(--font-heading);
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		border-bottom: 3px solid transparent;
		margin-bottom: -2px;
	}

	.tab-button:hover {
		color: var(--color-text);
	}

	.tab-button.active {
		color: var(--color-gold);
		border-bottom-color: var(--color-gold);
	}

	.tab-content {
		min-height: 400px;
	}

	.lyrics-section {
		padding: 2rem;
		background: rgba(26, 26, 26, 0.3);
		border-radius: 8px;
		border-left: 4px solid var(--color-accent);
	}

	.lyrics-container {
		max-width: 700px;
		margin: 0 auto;
	}

	.lyrics-section-title {
		font-weight: bold;
		color: var(--color-gold);
		margin: 1.5rem 0 0.5rem;
		font-size: 1.1rem;
	}

	.lyrics-line {
		font-size: 1.2rem;
		line-height: 1.8;
		margin: 0.5rem 0;
		padding-left: 1rem;
	}

	.history-section {
		padding: 2rem;
	}

	.history-header {
		display: flex;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.history-thumbnail {
		width: 200px;
		height: auto;
		border-radius: 8px;
		border: 2px solid var(--color-gold);
		object-fit: cover;
		flex-shrink: 0;
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
	}

	.history-header-text {
		flex: 1;
	}

	.history-section h2 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		color: var(--color-gold);
	}

	.history-gallery {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.gallery-item {
		margin: 0;
		border-radius: 12px;
		overflow: hidden;
		border: 3px solid var(--color-gold);
		box-shadow: 0 10px 40px rgba(139, 0, 0, 0.4);
		background: rgba(26, 26, 26, 0.5);
	}

	.gallery-item img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		display: block;
	}

	.gallery-item figcaption {
		padding: 1rem;
		font-size: 0.95rem;
		color: var(--color-text-secondary);
		text-align: center;
		font-style: italic;
		border-top: 1px solid rgba(212, 175, 55, 0.3);
	}

	.history-content p {
		font-size: 1.2rem;
		line-height: 1.8;
		margin-bottom: 1.5rem;
		color: var(--color-text-secondary);
	}

	.key-figures {
		margin: 2rem 0;
		padding: 1.5rem;
		background: rgba(139, 0, 0, 0.1);
		border-radius: 8px;
		border-left: 4px solid var(--color-accent);
	}

	.key-figures h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.key-figures ul {
		list-style: none;
		padding: 0;
	}

	.key-figures li {
		font-size: 1.1rem;
		padding: 0.5rem 0;
		padding-left: 1.5rem;
		position: relative;
		color: var(--color-text-secondary);
	}

	.key-figures li::before {
		content: '⚔';
		position: absolute;
		left: 0;
		color: var(--color-accent);
	}

	.map-section {
		margin: 3rem 0;
	}

	.map-section h3 {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	.song-navigation {
		display: flex;
		justify-content: space-between;
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 2px solid rgba(212, 175, 55, 0.2);
	}

	.nav-button {
		padding: 1rem 2rem;
		background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
		color: var(--color-text);
		border-radius: 4px;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.nav-button:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(139, 0, 0, 0.5);
	}

	.nav-button.next {
		margin-left: auto;
	}

	@media (max-width: 768px) {
		.song-page {
			padding: 1rem;
		}

		.song-title {
			font-size: 2.5rem;
		}

		.song-meta {
			font-size: 0.9rem;
		}

		.separator {
			margin: 0 0.5rem;
		}

		.tabs {
			flex-direction: column;
			gap: 0;
		}

		.tab-button {
			padding: 0.75rem 1rem;
			text-align: left;
		}

		.lyrics-section,
		.history-section {
			padding: 1rem;
		}

		.history-header {
			flex-direction: column;
			gap: 1rem;
		}

		.history-thumbnail {
			width: 150px;
			align-self: center;
		}

		.history-section h2 {
			font-size: 1.8rem;
			text-align: center;
		}

		.audio-controls {
			gap: 0.5rem;
		}

		.play-button {
			padding: 0.75rem 1.25rem;
			font-size: 1rem;
		}

		.download-button {
			width: 44px;
			height: 44px;
		}

		.song-navigation {
			flex-direction: column;
			gap: 1rem;
		}

		.nav-button.next {
			margin-left: 0;
		}

		.history-gallery {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.gallery-item img {
			height: 200px;
		}
	}
</style>
