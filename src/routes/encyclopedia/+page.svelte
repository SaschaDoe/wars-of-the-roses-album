<script lang="ts">
	import { getAllEntries, getEntriesByType, getEncyclopediaEntry, type EncyclopediaEntry } from '$lib/data/encyclopedia';
	import { language, currentTranslations } from '$lib/i18n';

	const allEntries = getAllEntries();
	const people = getEntriesByType('person');
	const places = getEntriesByType('place');
	const events = getEntriesByType('event');
	const concepts = getEntriesByType('concept').filter(c => c.id !== 'wars-of-the-roses');
	const warsOverview = getEncyclopediaEntry('wars-of-the-roses');

	function getTitle(entry: EncyclopediaEntry) {
		return $language === 'de' && entry.titleDe ? entry.titleDe : entry.title;
	}

	function getShortDescription(entry: EncyclopediaEntry) {
		return $language === 'de' && entry.shortDescriptionDe ? entry.shortDescriptionDe : entry.shortDescription;
	}

	function getFullDescription(entry: EncyclopediaEntry) {
		return $language === 'de' && entry.fullDescriptionDe ? entry.fullDescriptionDe : entry.fullDescription;
	}

	function addLinksToText(text: string): string {
		const linkMap: [RegExp, string][] = [
			[/House of Lancaster/g, '<a href="/encyclopedia/house-of-lancaster">House of Lancaster</a>'],
			[/House of York/g, '<a href="/encyclopedia/house-of-york">House of York</a>'],
			[/Richard, Duke of York/g, '<a href="/encyclopedia/richard-duke-of-york">Richard, Duke of York</a>'],
			[/King Henry VI/g, '<a href="/encyclopedia/henry-vi">King Henry VI</a>'],
			[/Henry VI/g, '<a href="/encyclopedia/henry-vi">Henry VI</a>'],
			[/Warwick the Kingmaker's/g, '<a href="/encyclopedia/warwick-the-kingmaker">Warwick the Kingmaker\'s</a>'],
			[/Edward IV/g, '<a href="/encyclopedia/edward-iv">Edward IV</a>'],
			[/Henry Tudor's/g, '<a href="/encyclopedia/henry-vii">Henry Tudor\'s</a>'],
			[/Henry Tudor/g, '<a href="/encyclopedia/henry-vii">Henry Tudor</a>'],
			[/First Battle of St Albans/g, '<a href="/encyclopedia/st-albans">First Battle of St Albans</a>'],
			[/St Albans \(1455, 1461\)/g, '<a href="/encyclopedia/st-albans">St Albans</a> (1455, 1461)'],
			[/Wakefield \(1460\)/g, '<a href="/encyclopedia/battle-of-wakefield">Wakefield</a> (1460)'],
			[/Towton \(1461\)/g, '<a href="/encyclopedia/battle-of-towton">Towton</a> (1461)'],
			[/Towton(?![^<]*>)/g, '<a href="/encyclopedia/battle-of-towton">Towton</a>'],
			[/Barnet \(1471\)/g, '<a href="/encyclopedia/battle-of-barnet">Barnet</a> (1471)'],
			[/Bosworth Field \(1485\)/g, '<a href="/encyclopedia/battle-of-bosworth">Bosworth Field</a> (1485)'],
			[/Bosworth Field(?![^<]*>)/g, '<a href="/encyclopedia/battle-of-bosworth">Bosworth Field</a>'],
			[/the Tudors/g, 'the <a href="/encyclopedia/tudor-rose">Tudors</a>'],
		];

		let result = text;
		for (const [pattern, replacement] of linkMap) {
			result = result.replace(pattern, replacement);
		}
		return result;
	}
</script>

<svelte:head>
	<title>{$currentTranslations.encyclopedia.pageTitle}</title>
	<meta name="description" content={$currentTranslations.encyclopedia.subtitle} />
</svelte:head>

<div class="encyclopedia-container">
	<header class="encyclopedia-header">
		<h1>{$currentTranslations.encyclopedia.title}</h1>
		<p class="subtitle">{$currentTranslations.encyclopedia.subtitle}</p>
	</header>

	<section class="timeline-featured" id="timeline">
		<div class="timeline-hero">
			<h2>{$currentTranslations.encyclopedia.timelineSection}</h2>
			<p class="timeline-description">
				{$currentTranslations.encyclopedia.timelineDescription}
			</p>
			<a href="/encyclopedia/timeline" class="timeline-cta">
				{$currentTranslations.encyclopedia.viewTimeline}
			</a>
		</div>
	</section>

	{#if warsOverview}
		<section class="overview-section" id="overview">
			<div class="overview-content">
				<h2>{getTitle(warsOverview)}</h2>
				<p class="overview-dates">{warsOverview.dates}</p>
				<p class="overview-subtitle">{getShortDescription(warsOverview)}</p>
				{#each getFullDescription(warsOverview).split('\n\n') as paragraph}
					<p class="overview-text">{@html addLinksToText(paragraph)}</p>
				{/each}
				{#if warsOverview.imageUrl}
					<div class="overview-map">
						<img src={warsOverview.imageUrl} alt="Map of the Wars of the Roses" loading="lazy" decoding="async" />
					</div>
				{/if}
			</div>
		</section>
	{/if}

	<section class="category-section" id="people">
		<h2>{$currentTranslations.encyclopedia.people}</h2>
		<div class="entry-grid">
			{#each people as entry}
				<a href="/encyclopedia/{entry.id}" class="entry-card" class:has-image={entry.imageUrl}>
					{#if entry.imageUrl}
						<div class="card-image">
							<img src={entry.imageUrl} alt={getTitle(entry)} loading="lazy" decoding="async" />
						</div>
					{/if}
					<div class="card-content">
						<h3>{getTitle(entry)}</h3>
						{#if entry.dates}
							<span class="dates">{entry.dates}</span>
						{/if}
						<p>{getShortDescription(entry)}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section class="category-section" id="events">
		<div class="section-header">
			<h2>{$currentTranslations.encyclopedia.events}</h2>
			<a href="/encyclopedia/timeline" class="section-timeline-link">{$currentTranslations.encyclopedia.viewOnTimeline}</a>
		</div>
		<div class="entry-grid">
			{#each events as entry}
				<a href="/encyclopedia/{entry.id}" class="entry-card" class:has-image={entry.imageUrl}>
					{#if entry.imageUrl}
						<div class="card-image">
							<img src={entry.imageUrl} alt={getTitle(entry)} loading="lazy" decoding="async" />
						</div>
					{/if}
					<div class="card-content">
						<h3>{getTitle(entry)}</h3>
						{#if entry.dates}
							<span class="dates">{entry.dates}</span>
						{/if}
						<p>{getShortDescription(entry)}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section class="category-section" id="places">
		<h2>{$currentTranslations.encyclopedia.places}</h2>
		<div class="entry-grid">
			{#each places as entry}
				<a href="/encyclopedia/{entry.id}" class="entry-card" class:has-image={entry.imageUrl}>
					{#if entry.imageUrl}
						<div class="card-image">
							<img src={entry.imageUrl} alt={getTitle(entry)} loading="lazy" decoding="async" />
						</div>
					{/if}
					<div class="card-content">
						<h3>{getTitle(entry)}</h3>
						<p>{getShortDescription(entry)}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section class="category-section" id="concepts">
		<h2>{$currentTranslations.encyclopedia.concepts}</h2>
		<div class="entry-grid">
			{#each concepts as entry}
				<a href="/encyclopedia/{entry.id}" class="entry-card" class:has-image={entry.imageUrl}>
					{#if entry.imageUrl}
						<div class="card-image">
							<img src={entry.imageUrl} alt={getTitle(entry)} loading="lazy" decoding="async" />
						</div>
					{/if}
					<div class="card-content">
						<h3>{getTitle(entry)}</h3>
						<p>{getShortDescription(entry)}</p>
					</div>
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

	.overview-section {
		margin-bottom: 4rem;
		scroll-margin-top: 2rem;
	}

	.overview-content {
		background: linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(212, 175, 55, 0.05));
		border: 1px solid rgba(212, 175, 55, 0.3);
		border-radius: 12px;
		padding: 2.5rem;
	}

	.overview-content h2 {
		font-size: 2.2rem;
		color: var(--color-gold);
		margin-bottom: 0.5rem;
		border-left: 4px solid var(--color-accent);
		padding-left: 1rem;
	}

	.overview-dates {
		font-size: 1.3rem;
		color: var(--color-accent);
		font-weight: 600;
		margin-bottom: 1rem;
		padding-left: 1.25rem;
	}

	.overview-subtitle {
		font-size: 1.2rem;
		font-style: italic;
		color: var(--color-text-secondary);
		margin-bottom: 1.5rem;
		padding-left: 1.25rem;
	}

	.overview-text {
		font-size: 1.1rem;
		line-height: 1.8;
		color: var(--color-text);
		margin-bottom: 1rem;
	}

	.overview-text :global(a) {
		color: var(--color-gold);
		text-decoration: none;
		border-bottom: 1px solid rgba(212, 175, 55, 0.4);
		transition: all 0.2s ease;
	}

	.overview-text :global(a:hover) {
		color: var(--color-accent-light);
		border-bottom-color: var(--color-accent-light);
	}

	.overview-map {
		margin-top: 2rem;
		text-align: center;
	}

	.overview-map img {
		max-width: 600px;
		width: 100%;
		height: auto;
		border-radius: 8px;
		border: 3px solid var(--color-gold);
		box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
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

	.entry-card.has-image {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.card-image {
		flex-shrink: 0;
		width: 80px;
		height: 80px;
		overflow: hidden;
		border-radius: 6px;
		border: 2px solid var(--color-gold);
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card-content {
		flex: 1;
		min-width: 0;
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
		.encyclopedia-container {
			padding: 1rem;
		}

		.encyclopedia-header h1 {
			font-size: 2rem;
		}

		.overview-content {
			padding: 1.5rem;
		}

		.overview-content h2 {
			font-size: 1.8rem;
		}

		.overview-dates {
			font-size: 1.1rem;
		}

		.overview-subtitle {
			font-size: 1.05rem;
		}

		.overview-text {
			font-size: 1rem;
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

	@media (max-width: 480px) {
		.entry-card.has-image {
			flex-direction: column;
		}

		.card-image {
			width: 100%;
			height: 160px;
		}
	}
</style>
