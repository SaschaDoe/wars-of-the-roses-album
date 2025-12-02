<script lang="ts">
	import type { TimelineEvent } from '$lib/data/timeline';
	import { language, currentTranslations } from '$lib/i18n';

	let { events, showAll = false }: { events: TimelineEvent[]; showAll?: boolean } = $props();

	function getTitle(event: TimelineEvent) {
		return $language === 'de' && event.titleDe ? event.titleDe : event.title;
	}

	function getDescription(event: TimelineEvent) {
		return $language === 'de' && event.descriptionDe ? event.descriptionDe : event.description;
	}
</script>

<div class="timeline-component">
	{#each events as event, index}
		<a
			href="/encyclopedia/event/{event.year.toLowerCase()}-{event.title.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}"
			class="timeline-event-item"
			style="animation-delay: {index * 0.1}s"
		>
			<div class="event-marker">
				<div class="year-badge">{event.year}</div>
				{#if event.month}
					<div class="month-badge">{event.month}</div>
				{/if}
			</div>

			<div class="event-content">
				<h3>{getTitle(event)}</h3>
				<p class="event-description">{getDescription(event)}</p>

				{#if showAll}
					{#if event.people && event.people.length > 0}
						<div class="event-links">
							<h4>{$currentTranslations.timeline.keyFigures}</h4>
							<div class="link-group">
								{#each event.people as person}
									<span class="encyclopedia-link person-link" onclick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = `/encyclopedia/${person.id}`; }}>
										👤 {person.name}
									</span>
								{/each}
							</div>
						</div>
					{/if}

					{#if event.places && event.places.length > 0}
						<div class="event-links">
							<h4>{$currentTranslations.timeline.locations}</h4>
							<div class="link-group">
								{#each event.places as place}
									<span class="encyclopedia-link place-link" onclick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.href = `/encyclopedia/${place.id}`; }}>
										📍 {place.name}
									</span>
								{/each}
							</div>
						</div>
					{/if}
				{/if}
			</div>
		</a>
	{/each}
</div>

<style>
	.timeline-component {
		position: relative;
		padding-left: 2rem;
	}

	.timeline-component::before {
		content: '';
		position: absolute;
		left: 70px;
		top: 0;
		bottom: 0;
		width: 4px;
		background: linear-gradient(180deg, var(--color-accent), var(--color-gold));
	}

	.timeline-event-item {
		position: relative;
		display: flex;
		gap: 2rem;
		margin-bottom: 3rem;
		opacity: 0;
		animation: slideInTimeline 0.8s ease forwards;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
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
		padding: 0.75rem 1rem;
		border-radius: 8px;
		font-size: 1.2rem;
		font-weight: 700;
		box-shadow: 0 5px 20px rgba(139, 0, 0, 0.5);
		margin-bottom: 0.5rem;
	}

	.month-badge {
		font-size: 0.85rem;
		color: var(--color-gold);
		font-weight: 600;
	}

	.event-content {
		flex: 1;
		background: rgba(26, 26, 26, 0.5);
		border: 1px solid rgba(212, 175, 55, 0.3);
		border-radius: 8px;
		padding: 1.5rem;
		border-left: 4px solid var(--color-accent);
		transition: all 0.3s ease;
	}

	.timeline-event-item:hover .event-content {
		background: rgba(26, 26, 26, 0.8);
		border-color: var(--color-gold);
		transform: translateX(10px);
		box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
	}

	.event-content h3 {
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
		color: var(--color-gold);
	}

	.event-description {
		font-size: 1.1rem;
		line-height: 1.6;
		color: var(--color-text);
		margin-bottom: 1rem;
	}

	.event-links {
		margin-top: 1rem;
	}

	.event-links h4 {
		font-size: 0.9rem;
		color: var(--color-text-secondary);
		margin-bottom: 0.5rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.link-group {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.encyclopedia-link {
		display: inline-block;
		padding: 0.4rem 0.8rem;
		border-radius: 4px;
		font-size: 0.9rem;
		font-weight: 500;
		transition: all 0.2s ease;
		cursor: pointer;
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
		.timeline-component {
			padding-left: 0;
		}

		.timeline-component::before {
			left: 20px;
		}

		.timeline-event-item {
			flex-direction: column;
			gap: 1rem;
			padding-left: 3rem;
		}

		.event-marker {
			position: absolute;
			left: 0;
			top: 1.5rem;
			width: auto;
		}

		.year-badge {
			font-size: 1rem;
			padding: 0.5rem 0.75rem;
		}

		.event-content {
			padding: 1rem;
		}

		.event-content h3 {
			font-size: 1.2rem;
		}

		.event-description {
			font-size: 1rem;
		}
	}
</style>
