<script lang="ts">
	import { timelineEvents } from '$lib/data/timeline';
	import TimelineComponent from '$lib/components/TimelineComponent.svelte';
</script>

<svelte:head>
	<title>Timeline - Wars of the Roses Encyclopedia</title>
	<meta name="description" content="Complete interactive timeline of the Wars of the Roses (1455-1487)" />
</svelte:head>

<div class="timeline-page">
	<header class="page-header">
		<nav class="breadcrumb">
			<a href="/">Home</a> →
			<a href="/encyclopedia">Encyclopedia</a> →
			<span>Timeline</span>
		</nav>
		<h1>Timeline of the Wars</h1>
		<p class="subtitle">A chronological journey through the Wars of the Roses (1455-1487)</p>
	</header>

	<TimelineComponent events={timelineEvents} showAll={true} />
</div>

<style>
	.timeline-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.page-header {
		text-align: center;
		margin-bottom: 4rem;
		padding-bottom: 2rem;
		border-bottom: 2px solid var(--color-gold);
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

	.page-header h1 {
		font-size: 4rem;
		margin-bottom: 1rem;
		color: var(--color-gold);
	}

	.subtitle {
		font-size: 1.4rem;
		color: var(--color-text-secondary);
		font-style: italic;
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1.1rem;
		}
	}
</style>
