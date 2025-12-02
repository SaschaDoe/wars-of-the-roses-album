<script lang="ts">
	import { getEncyclopediaEntry, type EncyclopediaEntry } from '$lib/data/encyclopedia';
	import MapComponent from '$lib/components/MapComponent.svelte';
	import TimelineComponent from '$lib/components/TimelineComponent.svelte';
	import { timelineEvents } from '$lib/data/timeline';
	import { language, currentTranslations } from '$lib/i18n';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const entry = $derived(data.entry);

	const relatedEntries = $derived(
		entry.relatedEntries?.map(id => getEncyclopediaEntry(id)).filter(Boolean) || []
	);

	const relatedTimelineEvents = $derived(
		timelineEvents.filter(event => {
			const peopleIds = event.people?.map(p => p.id) || [];
			const placeIds = event.places?.map(p => p.id) || [];
			return peopleIds.includes(entry.id) || placeIds.includes(entry.id);
		})
	);

	function getTitle(e: EncyclopediaEntry) {
		return $language === 'de' && e.titleDe ? e.titleDe : e.title;
	}

	function getShortDescription(e: EncyclopediaEntry) {
		return $language === 'de' && e.shortDescriptionDe ? e.shortDescriptionDe : e.shortDescription;
	}

	function getFullDescription(e: EncyclopediaEntry) {
		return $language === 'de' && e.fullDescriptionDe ? e.fullDescriptionDe : e.fullDescription;
	}

	const typeLabels = {
		en: { person: 'Person', place: 'Place', concept: 'Concept', event: 'Event' },
		de: { person: 'Person', place: 'Ort', concept: 'Konzept', event: 'Ereignis' }
	};

	function getTypeLabel(type: string) {
		return typeLabels[$language][type as keyof typeof typeLabels.en] || type;
	}
</script>

<svelte:head>
	<title>{getTitle(entry)} - {$currentTranslations.encyclopedia.pageTitle}</title>
	<meta name="description" content={getShortDescription(entry)} />
</svelte:head>

<div class="entry-container">
	<nav class="breadcrumb">
		<a href="/">{$currentTranslations.nav.home}</a> →
		<a href="/encyclopedia">{$currentTranslations.nav.encyclopedia}</a> →
		<span>{getTitle(entry)}</span>
	</nav>

	<article class="entry">
		<header class="entry-header">
			{#if entry.imageUrl}
				<div class="entry-image" class:wide-image={entry.imageUrl.includes('map')}>
					<img
						src={entry.imageUrl}
						alt={getTitle(entry)}
						loading="lazy"
						decoding="async"
					/>
				</div>
			{/if}
			<div class="entry-type">{getTypeLabel(entry.type)}</div>
			<h1>{getTitle(entry)}</h1>
			{#if entry.dates}
				<div class="dates">{entry.dates}</div>
			{/if}
			<p class="short-description">{getShortDescription(entry)}</p>
		</header>

		<div class="entry-content">
			<section class="description">
				<p>{getFullDescription(entry)}</p>
			</section>

			{#if entry.location}
				<section class="location-section">
					<h2>{$currentTranslations.encyclopedia.location}</h2>
					<MapComponent location={entry.location} />
				</section>
			{/if}

			{#if relatedTimelineEvents.length > 0}
				<section class="timeline-section">
					<h2>{$currentTranslations.encyclopedia.timelineEvents}</h2>
					<TimelineComponent events={relatedTimelineEvents} showAll={false} />
					<div class="view-full-timeline-container">
						<a href="/encyclopedia/timeline" class="view-full-timeline">{$currentTranslations.encyclopedia.viewTimeline}</a>
					</div>
				</section>
			{/if}

			{#if relatedEntries.length > 0}
				<section class="related-section">
					<h2>{$currentTranslations.encyclopedia.relatedEntries}</h2>
					<div class="related-grid">
						{#each relatedEntries as related}
							{#if related}
								<a href="/encyclopedia/{related.id}" class="related-card" class:has-image={related.imageUrl}>
									{#if related.imageUrl}
										<div class="related-image">
											<img src={related.imageUrl} alt={getTitle(related)} loading="lazy" decoding="async" />
										</div>
									{/if}
									<div class="related-content">
										<h3>{getTitle(related)}</h3>
										<span class="related-type">{getTypeLabel(related.type)}</span>
										<p>{getShortDescription(related)}</p>
									</div>
								</a>
							{/if}
						{/each}
					</div>
				</section>
			{/if}
		</div>
	</article>
</div>

<style>
	.entry-container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem;
	}

	.breadcrumb {
		font-size: 0.9rem;
		color: var(--color-text-secondary);
		margin-bottom: 2rem;
	}

	.breadcrumb a {
		color: var(--color-gold);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	.breadcrumb a:hover {
		color: var(--color-accent-light);
	}

	.entry {
		background: rgba(26, 26, 26, 0.5);
		border: 1px solid rgba(212, 175, 55, 0.3);
		border-radius: 8px;
		padding: 3rem;
	}

	.entry-header {
		text-align: center;
		padding-bottom: 2rem;
		border-bottom: 2px solid var(--color-gold);
		margin-bottom: 2rem;
	}

	.entry-image {
		max-width: 400px;
		margin: 0 auto 1.5rem;
	}

	.entry-image.wide-image {
		max-width: 700px;
	}

	.entry-image img {
		width: 100%;
		height: auto;
		border-radius: 8px;
		border: 3px solid var(--color-gold);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
	}

	.entry-type {
		display: inline-block;
		background: var(--color-accent);
		color: var(--color-text);
		padding: 0.3rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		text-transform: uppercase;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.entry-header h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
		color: var(--color-gold);
	}

	.dates {
		font-size: 1.2rem;
		color: var(--color-accent);
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.short-description {
		font-size: 1.2rem;
		color: var(--color-text-secondary);
		font-style: italic;
		margin: 0;
	}

	.entry-content {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.description p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--color-text);
	}

	.location-section h2,
	.timeline-section h2,
	.related-section h2 {
		font-size: 1.8rem;
		color: var(--color-gold);
		margin-bottom: 1rem;
		border-left: 4px solid var(--color-accent);
		padding-left: 1rem;
	}

	.section-description {
		font-size: 1.1rem;
		color: var(--color-text-secondary);
		margin-bottom: 1.5rem;
	}

	.view-full-timeline-container {
		margin-top: 2rem;
		text-align: center;
	}

	.view-full-timeline {
		display: inline-block;
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--color-gold);
		padding: 0.75rem 1.5rem;
		border: 2px solid var(--color-gold);
		border-radius: 4px;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.view-full-timeline:hover {
		background: var(--color-gold);
		color: var(--color-bg);
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
	}

	.related-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: 1rem;
	}

	.related-card {
		background: rgba(139, 0, 0, 0.1);
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 8px;
		padding: 1rem;
		text-decoration: none;
		color: var(--color-text);
		transition: all 0.3s ease;
	}

	.related-card.has-image {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.related-image {
		flex-shrink: 0;
		width: 70px;
		height: 70px;
		overflow: hidden;
		border-radius: 6px;
		border: 2px solid var(--color-gold);
	}

	.related-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.related-content {
		flex: 1;
		min-width: 0;
	}

	.related-card:hover {
		transform: translateY(-3px);
		border-color: var(--color-gold);
		box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
	}

	.related-card h3 {
		font-size: 1.1rem;
		color: var(--color-gold);
		margin-bottom: 0.3rem;
	}

	.related-type {
		display: inline-block;
		font-size: 0.8rem;
		color: var(--color-accent);
		text-transform: uppercase;
		margin-bottom: 0.5rem;
	}

	.related-card p {
		font-size: 0.9rem;
		color: var(--color-text-secondary);
		line-height: 1.5;
		margin: 0;
	}

	@media (max-width: 768px) {
		.entry-container {
			padding: 1rem;
		}

		.entry {
			padding: 1.5rem;
		}

		.entry-header h1 {
			font-size: 1.8rem;
		}

		.related-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
