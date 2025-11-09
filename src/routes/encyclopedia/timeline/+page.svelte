<script lang="ts">
	import { timelineEvents } from '$lib/data/timeline';
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

	<div class="timeline-container">
		{#each timelineEvents as event, index}
			<div class="timeline-event" style="animation-delay: {index * 0.1}s" id="{event.year}-{event.title.toLowerCase().replace(/\s+/g, '-')}">
				<div class="event-marker">
					<div class="year-badge">{event.year}</div>
					{#if event.month}
						<div class="month-badge">{event.month}</div>
					{/if}
				</div>

				<div class="event-content">
					<h2>{event.title}</h2>
					<p class="event-description">{event.description}</p>

					{#if event.people && event.people.length > 0}
						<div class="event-links">
							<h4>Key Figures:</h4>
							<div class="link-group">
								{#each event.people as person}
									<a href="/encyclopedia/{person.id}" class="encyclopedia-link person-link">
										👤 {person.name}
									</a>
								{/each}
							</div>
						</div>
					{/if}

					{#if event.places && event.places.length > 0}
						<div class="event-links">
							<h4>Locations:</h4>
							<div class="link-group">
								{#each event.places as place}
									<a href="/encyclopedia/{place.id}" class="encyclopedia-link place-link">
										📍 {place.name}
									</a>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
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

	.timeline-container {
		position: relative;
		padding-left: 2rem;
	}

	.timeline-container::before {
		content: '';
		position: absolute;
		left: 140px;
		top: 0;
		bottom: 0;
		width: 4px;
		background: linear-gradient(180deg, var(--color-accent), var(--color-gold));
	}

	.timeline-event {
		position: relative;
		display: flex;
		gap: 3rem;
		margin-bottom: 4rem;
		opacity: 0;
		animation: slideInTimeline 0.8s ease forwards;
		scroll-margin-top: 2rem;
	}

	@keyframes slideInTimeline {
		from {
			opacity: 0;
			transform: translateX(-30px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.event-marker {
		flex-shrink: 0;
		width: 140px;
		text-align: center;
		position: relative;
	}

	.year-badge {
		display: inline-block;
		background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
		color: var(--color-text);
		padding: 1rem 1.5rem;
		border-radius: 8px;
		font-size: 1.5rem;
		font-weight: 700;
		box-shadow: 0 5px 20px rgba(139, 0, 0, 0.5);
		margin-bottom: 0.5rem;
	}

	.month-badge {
		font-size: 0.9rem;
		color: var(--color-gold);
		font-weight: 600;
	}

	.event-content {
		flex: 1;
		background: rgba(26, 26, 26, 0.5);
		border: 1px solid rgba(212, 175, 55, 0.3);
		border-radius: 8px;
		padding: 2rem;
		border-left: 4px solid var(--color-accent);
		transition: all 0.3s ease;
	}

	.event-content:hover {
		background: rgba(26, 26, 26, 0.8);
		border-color: var(--color-gold);
		transform: translateX(10px);
		box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
	}

	.event-content h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
		color: var(--color-gold);
	}

	.event-description {
		font-size: 1.2rem;
		line-height: 1.8;
		color: var(--color-text);
		margin-bottom: 1.5rem;
	}

	.event-links {
		margin-top: 1.5rem;
	}

	.event-links h4 {
		font-size: 1rem;
		color: var(--color-text-secondary);
		margin-bottom: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.link-group {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.encyclopedia-link {
		display: inline-block;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-size: 1rem;
		font-weight: 500;
		text-decoration: none;
		transition: all 0.2s ease;
	}

	.person-link {
		background: rgba(139, 0, 0, 0.2);
		border: 1px solid rgba(139, 0, 0, 0.4);
		color: var(--color-text);
	}

	.person-link:hover {
		background: rgba(139, 0, 0, 0.4);
		border-color: var(--color-accent);
		transform: translateY(-2px);
	}

	.place-link {
		background: rgba(212, 175, 55, 0.1);
		border: 1px solid rgba(212, 175, 55, 0.3);
		color: var(--color-gold);
	}

	.place-link:hover {
		background: rgba(212, 175, 55, 0.2);
		border-color: var(--color-gold);
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1.1rem;
		}

		.timeline-container {
			padding-left: 0;
		}

		.timeline-container::before {
			left: 20px;
		}

		.timeline-event {
			flex-direction: column;
			gap: 1rem;
			padding-left: 3rem;
		}

		.event-marker {
			position: absolute;
			left: 0;
			top: 2rem;
			width: auto;
		}

		.year-badge {
			font-size: 1.2rem;
			padding: 0.75rem 1rem;
		}

		.event-content {
			padding: 1.5rem;
		}

		.event-content h2 {
			font-size: 1.5rem;
		}

		.event-description {
			font-size: 1.1rem;
		}
	}
</style>
