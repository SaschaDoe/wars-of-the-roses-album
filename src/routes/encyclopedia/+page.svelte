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

	<section class="category-section">
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

	<section class="category-section">
		<h2>Battles & Events</h2>
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

	<section class="category-section">
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

	<section class="category-section">
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
		margin-bottom: 4rem;
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

	.category-section {
		margin-bottom: 4rem;
	}

	.category-section h2 {
		font-size: 2rem;
		margin-bottom: 1.5rem;
		color: var(--color-gold);
		border-left: 4px solid var(--color-accent);
		padding-left: 1rem;
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

		.entry-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
