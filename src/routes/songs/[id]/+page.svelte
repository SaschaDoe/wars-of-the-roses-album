<script lang="ts">
	import type { PageData } from './$types';
	import MapComponent from '$lib/components/MapComponent.svelte';
	import LinkifiedText from '$lib/components/LinkifiedText.svelte';
	import { getSongByTrackNumber, songs } from '$lib/data/songs';
	import { language, currentTranslations } from '$lib/i18n';

	let { data }: { data: PageData } = $props();
	let song = $derived(data.song);

	let activeTab = $state<'lyrics' | 'history'>('lyrics');

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
	<title>{song.title} - {$language === 'de' ? 'Rosenkriege' : 'Wars of the Roses'}</title>
</svelte:head>

<div class="song-page">
	<a href="/songs" class="back-link">{$currentTranslations.song.backToSongs}</a>

	<div class="song-header">
		<div class="song-number">{$currentTranslations.song.track} {song.trackNumber} • {song.duration}</div>
		<h1 class="song-title">{song.title}</h1>
		<div class="song-meta">
			<span class="year">{song.historicalContext.year}</span>
			<span class="separator">•</span>
			<span class="location">{song.historicalContext.location.name}</span>
		</div>
	</div>

	{#if song.audioUrl}
		<div class="audio-player">
			<audio controls>
				<source src={song.audioUrl} type="audio/mpeg" />
				<track kind="captions" />
				Your browser does not support the audio element.
			</audio>
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
				<h2>{getHistoricalTitle()}</h2>

				{#if song.historicalContext.imageUrl}
					<div class="history-image">
						<img src={song.historicalContext.imageUrl} alt={getHistoricalTitle()} />
					</div>
				{/if}

				<div class="history-content">
					{#each getHistoricalDescription().split('\n\n') as paragraph}
						<p><LinkifiedText text={paragraph} /></p>
					{/each}
				</div>

				<div class="key-figures">
					<h3>{$currentTranslations.song.keyFigures}</h3>
					<ul>
						{#each song.historicalContext.keyFigures as figure}
							<li>{figure}</li>
						{/each}
					</ul>
				</div>

				<div class="map-section">
					<h3>{$currentTranslations.encyclopedia.location}</h3>
					<MapComponent location={song.historicalContext.location} />
				</div>
			</div>
		{/if}
	</div>

	<div class="song-navigation">
		{#if song.trackNumber > 1}
			<a href="/songs/{getSongByTrackNumber(song.trackNumber - 1)?.id}" class="nav-button prev">
				{$currentTranslations.song.previousSong}
			</a>
		{/if}
		{#if song.trackNumber < songs.length}
			<a href="/songs/{getSongByTrackNumber(song.trackNumber + 1)?.id}" class="nav-button next">
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

	.audio-player {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		margin-bottom: 3rem;
	}

	.audio-player audio {
		width: 100%;
		max-width: 600px;
		filter: sepia(100%) hue-rotate(-50deg) saturate(300%);
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

	.history-section h2 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: var(--color-gold);
	}

	.history-image {
		margin-bottom: 2rem;
		border-radius: 12px;
		overflow: hidden;
		border: 3px solid var(--color-gold);
		box-shadow: 0 10px 40px rgba(139, 0, 0, 0.4);
	}

	.history-image img {
		width: 100%;
		height: auto;
		display: block;
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

		.song-navigation {
			flex-direction: column;
			gap: 1rem;
		}

		.nav-button.next {
			margin-left: 0;
		}
	}
</style>
