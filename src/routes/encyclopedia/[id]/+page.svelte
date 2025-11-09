<script lang="ts">
	import { getEncyclopediaEntry } from '$lib/data/encyclopedia';
	import MapComponent from '$lib/components/MapComponent.svelte';
	import { timelineEvents } from '$lib/data/timeline';
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
</script>

<svelte:head>
	<title>{entry.title} - Encyclopedia - Wars of the Roses</title>
	<meta name="description" content={entry.shortDescription} />
</svelte:head>

<div class="entry-container">
	<nav class="breadcrumb">
		<a href="/">Home</a> →
		<a href="/encyclopedia">Encyclopedia</a> →
		<span>{entry.title}</span>
	</nav>

	<article class="entry">
		<header class="entry-header">
			<div class="entry-type">{entry.type}</div>
			<h1>{entry.title}</h1>
			{#if entry.dates}
				<div class="dates">{entry.dates}</div>
			{/if}
			<p class="short-description">{entry.shortDescription}</p>
		</header>

		<div class="entry-content">
			<section class="description">
				<p>{entry.fullDescription}</p>
			</section>

			{#if entry.location}
				<section class="location-section">
					<h2>Location</h2>
					<p class="location-name">{entry.location.name}</p>
					<div class="map-container">
						<MapComponent
							center={entry.location.coordinates}
							zoom={12}
							markers={[{
								position: entry.location.coordinates,
								title: entry.title
							}]}
						/>
					</div>
				</section>
			{/if}

			{#if relatedTimelineEvents.length > 0}
				<section class="timeline-section">
					<h2>Timeline Events</h2>
					<p class="section-description">This {entry.type.toLowerCase()} appears in the following timeline events:</p>
					<div class="timeline-events-list">
						{#each relatedTimelineEvents as event}
							<a href="/encyclopedia/timeline#{event.year}-{event.title.toLowerCase().replace(/\s+/g, '-')}" class="timeline-event-card">
								<div class="event-year">{event.year}{event.month ? ` • ${event.month}` : ''}</div>
								<h3>{event.title}</h3>
								<p>{event.description}</p>
							</a>
						{/each}
					</div>
					<a href="/encyclopedia/timeline" class="view-full-timeline">View Full Timeline →</a>
				</section>
			{/if}

			{#if relatedEntries.length > 0}
				<section class="related-section">
					<h2>Related Entries</h2>
					<div class="related-grid">
						{#each relatedEntries as related}
							{#if related}
								<a href="/encyclopedia/{related.id}" class="related-card">
									<h3>{related.title}</h3>
									<span class="related-type">{related.type}</span>
									<p>{related.shortDescription}</p>
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

	.location-name {
		font-size: 1.1rem;
		color: var(--color-text-secondary);
		margin-bottom: 1rem;
	}

	.map-container {
		height: 400px;
		border-radius: 8px;
		overflow: hidden;
		border: 2px solid rgba(212, 175, 55, 0.3);
	}

	.section-description {
		font-size: 1.1rem;
		color: var(--color-text-secondary);
		margin-bottom: 1.5rem;
	}

	.timeline-events-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.timeline-event-card {
		background: rgba(139, 0, 0, 0.1);
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-left: 4px solid var(--color-accent);
		border-radius: 8px;
		padding: 1.5rem;
		text-decoration: none;
		color: var(--color-text);
		transition: all 0.3s ease;
	}

	.timeline-event-card:hover {
		transform: translateX(10px);
		border-color: var(--color-gold);
		background: rgba(139, 0, 0, 0.2);
		box-shadow: 0 5px 20px rgba(212, 175, 55, 0.2);
	}

	.event-year {
		font-size: 0.95rem;
		color: var(--color-accent-light);
		font-weight: 600;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.timeline-event-card h3 {
		font-size: 1.3rem;
		color: var(--color-gold);
		margin-bottom: 0.75rem;
	}

	.timeline-event-card p {
		font-size: 1.05rem;
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin: 0;
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

		.map-container {
			height: 300px;
		}
	}
</style>
