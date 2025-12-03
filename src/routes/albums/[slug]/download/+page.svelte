<script lang="ts">
	import { language, currentTranslations } from '$lib/i18n';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();

	const album = $derived(data.album);
	const songs = $derived(data.songs);
	const albumTitle = $derived($language === 'de' ? album.titleDe : album.title);
</script>

<svelte:head>
	<title>{$currentTranslations.download.title} - {albumTitle}</title>
	<meta name="description" content={$currentTranslations.download.subtitle} />
</svelte:head>

<div class="download-page">
	<h1 class="page-title">{$currentTranslations.download.title}</h1>
	<p class="page-subtitle">{$currentTranslations.download.subtitle}</p>

	<section class="full-album-section">
		<div class="album-artwork">
			<img src={album.coverImage} alt={albumTitle} class="cover-image" />
		</div>
		<div class="album-info">
			<h2>{$currentTranslations.download.fullAlbum}</h2>
			<p>{$currentTranslations.download.fullAlbumDescription}</p>
			<ul class="album-features">
				<li>{songs.length} {$language === 'de' ? 'hochwertige MP3-Titel' : 'high-quality MP3 tracks'}</li>
				<li>{$language === 'de' ? 'Vollständige' : 'Complete'} {albumTitle} {$language === 'de' ? 'Geschichte' : 'story'}</li>
			</ul>
			{#if album.downloadUrl}
				<a href={album.downloadUrl} download class="download-button primary">
					{$currentTranslations.download.downloadButton}
				</a>
			{:else}
				<p class="no-download">{$language === 'de' ? 'Album-Download kommt bald' : 'Album download coming soon'}</p>
			{/if}
		</div>
	</section>

	<section class="individual-tracks">
		<h2>{$currentTranslations.download.individualTracks}</h2>
		<p class="section-description">{$currentTranslations.download.individualDescription}</p>

		<div class="tracks-grid">
			{#each songs as song}
				<div class="track-card">
					<div class="track-number">{song.trackNumber}</div>
					<div class="track-info">
						<h3 class="track-title">{song.title}</h3>
						<span class="track-duration">{song.duration}</span>
					</div>
					<div class="track-actions">
						<a href="/albums/{album.slug}/songs/{song.id}" class="action-button view">{$currentTranslations.download.view}</a>
						{#if song.audioUrl}
							<a href={song.audioUrl} download class="action-button download">{$currentTranslations.download.downloadTrack}</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</section>
</div>

<style>
	.download-page {
		max-width: 1200px;
		margin: 0 auto;
	}

	.page-title {
		font-size: 3rem;
		text-align: center;
		margin-bottom: 0.5rem;
		background: linear-gradient(135deg, var(--color-gold), var(--color-accent-light));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.page-subtitle {
		text-align: center;
		color: var(--color-text-secondary);
		font-size: 1.2rem;
		margin-bottom: 3rem;
	}

	.full-album-section {
		display: grid;
		grid-template-columns: 300px 1fr;
		gap: 3rem;
		padding: 2rem;
		background: linear-gradient(135deg, rgba(139, 0, 0, 0.2), rgba(212, 175, 55, 0.1));
		border: 2px solid var(--color-gold);
		border-radius: 12px;
		margin-bottom: 4rem;
	}

	.album-artwork {
		aspect-ratio: 1;
	}

	.cover-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
		border: 2px solid var(--color-gold);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
	}

	.album-info h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
		color: var(--color-gold);
	}

	.album-info p {
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.album-features {
		list-style: none;
		margin-bottom: 2rem;
	}

	.album-features li {
		padding: 0.5rem 0;
		padding-left: 1.5rem;
		position: relative;
		color: var(--color-text);
	}

	.album-features li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--color-gold);
	}

	.download-button {
		display: inline-block;
		padding: 1rem 2rem;
		border-radius: 6px;
		font-weight: bold;
		font-size: 1.1rem;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.download-button.primary {
		background: linear-gradient(135deg, var(--color-gold), var(--color-accent));
		color: var(--color-bg);
	}

	.download-button.primary:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(212, 175, 55, 0.4);
	}

	.no-download {
		color: var(--color-text-secondary);
		font-style: italic;
	}

	.individual-tracks {
		margin-top: 3rem;
	}

	.individual-tracks h2 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
		color: var(--color-gold);
	}

	.section-description {
		color: var(--color-text-secondary);
		margin-bottom: 2rem;
	}

	.tracks-grid {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.track-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem 1.5rem;
		background: rgba(139, 0, 0, 0.1);
		border: 1px solid rgba(212, 175, 55, 0.3);
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.track-card:hover {
		background: rgba(139, 0, 0, 0.2);
		border-color: var(--color-gold);
	}

	.track-number {
		width: 40px;
		height: 40px;
		background: var(--color-accent);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		color: var(--color-gold);
		flex-shrink: 0;
	}

	.track-info {
		flex: 1;
	}

	.track-title {
		font-size: 1rem;
		margin: 0 0 0.25rem 0;
		color: var(--color-text);
	}

	.track-duration {
		font-size: 0.85rem;
		color: var(--color-text-secondary);
	}

	.track-actions {
		display: flex;
		gap: 0.5rem;
	}

	.action-button {
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-size: 0.85rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.action-button.view {
		background: transparent;
		border: 1px solid var(--color-gold);
		color: var(--color-gold);
	}

	.action-button.view:hover {
		background: rgba(212, 175, 55, 0.1);
	}

	.action-button.download {
		background: var(--color-accent);
		color: var(--color-text);
	}

	.action-button.download:hover {
		background: var(--color-accent-light);
	}

	@media (max-width: 768px) {
		.download-page {
			padding: 1rem;
		}

		.page-title {
			font-size: 2rem;
		}

		.full-album-section {
			grid-template-columns: 1fr;
			gap: 2rem;
			padding: 1rem;
		}

		.album-artwork {
			max-width: 250px;
			margin: 0 auto;
		}

		.track-card {
			flex-wrap: wrap;
		}

		.track-actions {
			width: 100%;
			margin-top: 0.5rem;
			justify-content: flex-end;
		}
	}
</style>
