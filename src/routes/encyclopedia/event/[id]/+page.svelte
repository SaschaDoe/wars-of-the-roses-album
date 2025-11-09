<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const event = $derived(data.event);
</script>

<svelte:head>
	<title>{event.title} - Timeline - Wars of the Roses</title>
	<meta name="description" content={event.description} />
</svelte:head>

<div class="entry-container">
	<nav class="breadcrumb">
		<a href="/">Home</a> →
		<a href="/encyclopedia">Encyclopedia</a> →
		<a href="/encyclopedia/timeline">Timeline</a> →
		<span>{event.title}</span>
	</nav>

	<article class="entry">
		<header class="entry-header">
			<div class="entry-type">Timeline Event</div>
			<h1>{event.title}</h1>
			<div class="dates">{event.year}{event.month ? ` • ${event.month}` : ''}</div>
			<p class="short-description">{event.description}</p>
		</header>

		<div class="entry-content">
			{#if event.people && event.people.length > 0}
				<section class="related-section">
					<h2>Key Figures</h2>
					<div class="related-grid">
						{#each event.people as person}
							<a href="/encyclopedia/{person.id}" class="related-card">
								<h3>{person.name}</h3>
								<span class="related-type">Person</span>
							</a>
						{/each}
					</div>
				</section>
			{/if}

			{#if event.places && event.places.length > 0}
				<section class="related-section">
					<h2>Locations</h2>
					<div class="related-grid">
						{#each event.places as place}
							<a href="/encyclopedia/{place.id}" class="related-card">
								<h3>{place.name}</h3>
								<span class="related-type">Place</span>
							</a>
						{/each}
					</div>
				</section>
			{/if}

			<div class="back-to-timeline">
				<a href="/encyclopedia/timeline" class="btn-back">← View Full Timeline</a>
			</div>
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
		color: var(--color-text);
		font-style: italic;
		margin: 0;
		line-height: 1.6;
	}

	.entry-content {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.related-section h2 {
		font-size: 1.8rem;
		color: var(--color-gold);
		margin-bottom: 1rem;
		border-left: 4px solid var(--color-accent);
		padding-left: 1rem;
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
	}

	.back-to-timeline {
		text-align: center;
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid rgba(212, 175, 55, 0.2);
	}

	.btn-back {
		display: inline-block;
		padding: 1rem 2rem;
		background: transparent;
		color: var(--color-gold);
		border: 2px solid var(--color-gold);
		border-radius: 4px;
		font-size: 1.1rem;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.btn-back:hover {
		background: var(--color-gold);
		color: var(--color-bg);
		transform: translateY(-2px);
		box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
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
