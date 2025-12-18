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
	let toggledImages = $state<Record<number, boolean>>({});

	// Fullscreen lightbox state
	let lightboxImage = $state<string | null>(null);
	let lightboxCaption = $state<string>('');

	function openLightbox(url: string, caption: string) {
		lightboxImage = url;
		lightboxCaption = caption;
		document.body.style.overflow = 'hidden';
	}

	function closeLightbox() {
		lightboxImage = null;
		lightboxCaption = '';
		document.body.style.overflow = '';
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape' && lightboxImage) {
			closeLightbox();
		}
	}

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

<svelte:window onkeydown={handleKeydown} />

<!-- Fullscreen Lightbox -->
{#if lightboxImage}
	<div
		class="lightbox-overlay"
		onclick={closeLightbox}
		role="dialog"
		aria-modal="true"
		aria-label="Image lightbox"
	>
		<button class="lightbox-close" onclick={closeLightbox} aria-label="Close lightbox">×</button>
		<div class="lightbox-content" onclick={(e) => e.stopPropagation()}>
			<img src={lightboxImage} alt={lightboxCaption} class="lightbox-image" />
			{#if lightboxCaption}
				<p class="lightbox-caption">{lightboxCaption}</p>
			{/if}
		</div>
	</div>
{/if}

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
						<img
							src={song.historicalContext.imageUrl}
							alt={getHistoricalTitle()}
							class="history-thumbnail clickable"
							onclick={() => openLightbox(song.historicalContext.imageUrl!, getHistoricalTitle())}
							role="button"
							tabindex="0"
							onkeydown={(e) => e.key === 'Enter' && openLightbox(song.historicalContext.imageUrl!, getHistoricalTitle())}
						/>
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
						{#each song.historicalContext.images as image, index}
							{#if image.alternateUrl}
								<div class="secret-card" class:revealed={toggledImages[index]}>
									<div
										class="secret-card-image"
										onclick={() => toggledImages[index] = !toggledImages[index]}
										role="button"
										tabindex="0"
										onkeydown={(e) => e.key === 'Enter' && (toggledImages[index] = !toggledImages[index])}
									>
										<img
											src={toggledImages[index] ? image.alternateUrl : image.url}
											alt={$language === 'de' ? image.captionDe : image.caption}
										/>
										<div class="secret-card-corner">
											<span>{toggledImages[index] ? '↩' : '?'}</span>
										</div>
									</div>
									<div class="secret-card-content">
										<div class="secret-card-label">
											{toggledImages[index]
												? ($language === 'de' ? 'Enthüllt' : 'Revealed')
												: ($language === 'de' ? 'Propaganda?' : 'Propaganda?')}
										</div>
										<div class="secret-card-title">
											{toggledImages[index]
												? ($language === 'de' ? 'Die Wölfin enthüllt' : 'The She-Wolf revealed')
												: ($language === 'de' ? 'Margaretes großes Geheimnis' : "Margaret's dark secret")}
										</div>
										<div class="secret-card-description">
											{toggledImages[index]
												? ($language === 'de' ? image.alternateCaptionDe : image.alternateCaption)
												: ($language === 'de' ? image.captionDe : image.caption)}
										</div>
										<button
											class="secret-card-button"
											onclick={() => toggledImages[index] = !toggledImages[index]}
										>
											{toggledImages[index]
												? ($language === 'de' ? 'Zurück zum Original' : 'Back to original')
												: ($language === 'de' ? 'Die Wahrheit erfahren' : 'Find out the truth')}
										</button>
									</div>
								</div>
							{:else}
								<figure class="gallery-item">
									<img
										src={image.url}
										alt={$language === 'de' ? image.captionDe : image.caption}
										class="clickable"
										onclick={() => openLightbox(image.url, $language === 'de' ? image.captionDe : image.caption)}
										role="button"
										tabindex="0"
										onkeydown={(e) => e.key === 'Enter' && openLightbox(image.url, $language === 'de' ? image.captionDe : image.caption)}
									/>
									<figcaption>{$language === 'de' ? image.captionDe : image.caption}</figcaption>
								</figure>
							{/if}
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

	<!-- Side navigation for desktop -->
	{#if prevSong}
		<a href="/albums/{album.slug}/songs/{prevSong.id}" class="side-nav side-nav-prev" title={prevSong.title}>
			<span class="side-nav-arrow">‹</span>
			<span class="side-nav-label">{prevSong.trackNumber}</span>
		</a>
	{/if}
	{#if nextSong}
		<a href="/albums/{album.slug}/songs/{nextSong.id}" class="side-nav side-nav-next" title={nextSong.title}>
			<span class="side-nav-arrow">›</span>
			<span class="side-nav-label">{nextSong.trackNumber}</span>
		</a>
	{/if}

	<!-- Bottom navigation for mobile -->
	<div class="song-navigation-mobile">
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
		transition: transform 0.3s ease, box-shadow 0.3s ease;
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
		height: auto;
		max-height: 500px;
		object-fit: contain;
		display: block;
		background: rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}

	/* Clickable images */
	.clickable {
		cursor: pointer;
	}

	.clickable:hover {
		transform: scale(1.02);
	}

	.history-thumbnail.clickable:hover {
		box-shadow: 0 8px 30px rgba(212, 175, 55, 0.4);
	}

	/* Secret Card Styles */
	.secret-card {
		display: flex;
		gap: 2rem;
		background: linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(20, 20, 20, 0.95));
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.secret-card-image {
		position: relative;
		flex: 0 0 280px;
		cursor: pointer;
		overflow: hidden;
	}

	.secret-card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s ease;
	}

	.secret-card-image:hover img {
		transform: scale(1.05);
	}

	.secret-card-corner {
		position: absolute;
		top: 0;
		right: 0;
		width: 50px;
		height: 50px;
		background: var(--color-accent);
		display: flex;
		align-items: center;
		justify-content: center;
		clip-path: polygon(100% 0, 0 0, 100% 100%);
		transition: background 0.3s ease;
	}

	.secret-card-corner span {
		position: absolute;
		top: 8px;
		right: 8px;
		font-size: 1.2rem;
		color: white;
		font-weight: bold;
	}

	.secret-card:not(.revealed) .secret-card-corner {
		background: var(--color-accent);
	}

	.secret-card.revealed .secret-card-corner {
		background: #2d5a27;
	}

	.secret-card-content {
		flex: 1;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.secret-card-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--color-accent);
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	.secret-card.revealed .secret-card-label {
		color: #4a9c4a;
	}

	.secret-card-title {
		font-family: var(--font-heading);
		font-size: 1.5rem;
		color: var(--color-text);
		margin-bottom: 0.75rem;
	}

	.secret-card-description {
		font-size: 0.95rem;
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.secret-card-button {
		align-self: flex-start;
		padding: 0.75rem 1.5rem;
		background: transparent;
		border: 2px solid var(--color-accent);
		color: var(--color-text);
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.secret-card-button:hover {
		background: var(--color-accent);
		color: white;
	}

	.secret-card.revealed .secret-card-button {
		border-color: rgba(255, 255, 255, 0.3);
	}

	.secret-card.revealed .secret-card-button:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.5);
	}

	@media (max-width: 768px) {
		.secret-card {
			flex-direction: column;
		}

		.secret-card-image {
			flex: none;
			height: 250px;
		}

		.secret-card-content {
			padding: 1.25rem;
		}
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

	/* Side navigation - desktop only */
	.side-nav {
		display: none;
		position: fixed;
		top: 50%;
		transform: translateY(-50%);
		z-index: 100;
		padding: 1.25rem 0.75rem;
		background: rgba(30, 30, 30, 0.85);
		backdrop-filter: blur(8px);
		border: 1px solid rgba(139, 0, 0, 0.3);
		color: var(--color-text);
		text-decoration: none;
		transition: all 0.3s ease;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.side-nav-prev {
		left: 0;
		border-radius: 0 8px 8px 0;
		border-left: none;
	}

	.side-nav-next {
		right: 0;
		border-radius: 8px 0 0 8px;
		border-right: none;
	}

	.side-nav:hover {
		background: rgba(139, 0, 0, 0.6);
		color: white;
		border-color: rgba(139, 0, 0, 0.5);
		padding: 1.25rem 1rem;
	}

	.side-nav-arrow {
		font-size: 1.8rem;
		line-height: 1;
		opacity: 0.8;
		transition: all 0.3s ease;
	}

	.side-nav:hover .side-nav-arrow {
		opacity: 1;
	}

	.side-nav-label {
		font-size: 0.75rem;
		opacity: 0.6;
		font-weight: 600;
	}

	.side-nav:hover .side-nav-label {
		opacity: 1;
	}

	/* Mobile bottom navigation */
	.song-navigation-mobile {
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

	/* Show side nav on larger screens */
	@media (min-width: 1200px) {
		.side-nav {
			display: flex;
		}

		.song-navigation-mobile {
			display: none;
		}
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

		.song-navigation-mobile {
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
			max-height: 300px;
		}
	}

	/* Lightbox styles */
	.lightbox-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.95);
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		animation: fadeIn 0.2s ease;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}

	.lightbox-close {
		position: absolute;
		top: 1rem;
		right: 1.5rem;
		background: none;
		border: none;
		color: white;
		font-size: 3rem;
		cursor: pointer;
		opacity: 0.7;
		transition: opacity 0.2s ease, transform 0.2s ease;
		line-height: 1;
		padding: 0.5rem;
		z-index: 10000;
	}

	.lightbox-close:hover {
		opacity: 1;
		transform: scale(1.1);
	}

	.lightbox-content {
		max-width: 95vw;
		max-height: 95vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.lightbox-image {
		max-width: 100%;
		max-height: 85vh;
		object-fit: contain;
		border-radius: 4px;
		box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
	}

	.lightbox-caption {
		margin-top: 1rem;
		color: rgba(255, 255, 255, 0.8);
		font-size: 1rem;
		text-align: center;
		max-width: 800px;
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.lightbox-overlay {
			padding: 1rem;
		}

		.lightbox-close {
			top: 0.5rem;
			right: 0.5rem;
			font-size: 2.5rem;
		}

		.lightbox-image {
			max-height: 75vh;
		}

		.lightbox-caption {
			font-size: 0.9rem;
			padding: 0 1rem;
		}
	}
</style>
