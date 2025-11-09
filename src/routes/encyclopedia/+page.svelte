<script lang="ts">
	import { getAllEntries, getEntriesByType, type EncyclopediaEntry } from '$lib/data/encyclopedia';

	const allEntries = getAllEntries();
	const people = getEntriesByType('person');
	const places = getEntriesByType('place');
	const events = getEntriesByType('event');
	const concepts = getEntriesByType('concept');
</script>

<svelte:head>
	<title>Encyclopedia - Wars of the Roses</title>
	<meta name="description" content="Explore the people, places, and events of the Wars of the Roses" />
</svelte:head>

<div class="encyclopedia-container">
	<header class="encyclopedia-header">
		<h1>Encyclopedia of the Wars</h1>
		<p class="subtitle">People, places, and events that shaped England's bloodiest conflict</p>
	</header>

	<section class="timeline-featured" id="timeline">
		<div class="timeline-hero">
			<h2>Interactive Timeline</h2>
			<p class="timeline-description">
				Explore the complete chronological journey through the Wars of the Roses (1455-1487).
				Follow the key events, battles, and turning points that shaped this pivotal period in English history.
			</p>
			<a href="/encyclopedia/timeline" class="timeline-cta">
				View Full Timeline →
			</a>
		</div>
	</section>

	<section class="category-section" id="people">
		<h2>People</h2>
		<div class="entry-grid">
			{#each people as entry}
				<a href="/encyclopedia/{entry.id}" class="entry-card">
					<h3>{entry.title}</h3>
					{#if entry.dates}
						<span class="dates">{entry.dates}</span>
					{/if}
					<p>{entry.shortDescription}</p>
				</a>
			{/each}
		</div>
	</section>

	<section class="category-section" id="events">
		<div class="section-header">
			<h2>Battles & Events</h2>
			<a href="/encyclopedia/timeline" class="section-timeline-link">View on Timeline →</a>
		</div>
		<div class="entry-grid">
			{#each events as entry}
				<a href="/encyclopedia/{entry.id}" class="entry-card">
					<h3>{entry.title}</h3>
					{#if entry.dates}
						<span class="dates">{entry.dates}</span>
					{/if}
					<p>{entry.shortDescription}</p>
				</a>
			{/each}
		</div>
	</section>

	<section class="category-section" id="places">
		<h2>Places</h2>
		<div class="entry-grid">
			{#each places as entry}
				<a href="/encyclopedia/{entry.id}" class="entry-card">
					<h3>{entry.title}</h3>
					<p>{entry.shortDescription}</p>
				</a>
			{/each}
		</div>
	</section>

	<section class="category-section" id="concepts">
		<h2>Concepts</h2>
		<div class="entry-grid">
			{#each concepts as entry}
				<a href="/encyclopedia/{entry.id}" class="entry-card">
					<h3>{entry.title}</h3>
					<p>{entry.shortDescription}</p>
				</a>
			{/each}
		</div>
	</section>
</div>

<style>
	.encyclopedia-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 2rem;
	}

	.encyclopedia-header {
		text-align: center;
		margin-bottom: 3rem;
		padding: 2rem 0;
		border-bottom: 2px solid var(--color-gold);
	}

	.encyclopedia-header h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
		color: var(--color-gold);
	}

	.subtitle {
		font-size: 1.2rem;
		color: var(--color-text-secondary);
		font-style: italic;
	}

	.timeline-featured {
		margin-bottom: 4rem;
		scroll-margin-top: 2rem;
	}

	.timeline-hero {
		background: linear-gradient(135deg, rgba(139, 0, 0, 0.2), rgba(212, 175, 55, 0.1));
		border: 2px solid var(--color-gold);
		border-radius: 12px;
		padding: 3rem;
		text-align: center;
	}

	.timeline-hero h2 {
		font-size: 2.5rem;
		color: var(--color-gold);
		margin-bottom: 1rem;
	}

	.timeline-description {
		font-size: 1.2rem;
		line-height: 1.8;
		color: var(--color-text);
		max-width: 800px;
		margin: 0 auto 2rem;
	}

	.timeline-cta {
		display: inline-block;
		padding: 1rem 2.5rem;
		background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
		color: var(--color-text);
		font-size: 1.2rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		border-radius: 8px;
		text-decoration: none;
		transition: all 0.3s ease;
		box-shadow: 0 5px 20px rgba(139, 0, 0, 0.4);
	}

	.timeline-cta:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(139, 0, 0, 0.6);
	}

	.category-section {
		margin-bottom: 4rem;
		scroll-margin-top: 2rem;
	}

	.section-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1.5rem;
	}

	.category-section h2 {
		font-size: 2rem;
		color: var(--color-gold);
		border-left: 4px solid var(--color-accent);
		padding-left: 1rem;
		margin: 0;
	}

	.section-timeline-link {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-gold);
		text-decoration: none;
		padding: 0.5rem 1rem;
		border: 2px solid var(--color-gold);
		border-radius: 4px;
		transition: all 0.3s ease;
	}

	.section-timeline-link:hover {
		background: var(--color-gold);
		color: var(--color-bg);
		transform: translateY(-2px);
	}

	.entry-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.entry-card {
		background: rgba(26, 26, 26, 0.5);
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 8px;
		padding: 1.5rem;
		transition: all 0.3s ease;
		text-decoration: none;
		color: var(--color-text);
	}

	.entry-card:hover {
		transform: translateY(-5px);
		border-color: var(--color-gold);
		box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
	}

	.entry-card h3 {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
		color: var(--color-gold);
	}

	.dates {
		display: block;
		font-size: 0.9rem;
		color: var(--color-accent);
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	.entry-card p {
		color: var(--color-text-secondary);
		line-height: 1.6;
		margin: 0;
	}

	@media (max-width: 768px) {
		.encyclopedia-header h1 {
			font-size: 2rem;
		}

		.timeline-hero {
			padding: 2rem 1.5rem;
		}

		.timeline-hero h2 {
			font-size: 1.8rem;
		}

		.timeline-description {
			font-size: 1.1rem;
		}

		.timeline-cta {
			padding: 0.75rem 2rem;
			font-size: 1.1rem;
		}

		.section-header {
			flex-direction: column;
			gap: 1rem;
			align-items: flex-start;
		}

		.section-timeline-link {
			width: 100%;
			text-align: center;
		}

		.entry-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
