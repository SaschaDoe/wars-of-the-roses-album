<script lang="ts">
	import { onMount } from 'svelte';
	import { language, currentTranslations } from '$lib/i18n';
	import { albums } from '$lib/data/albums';

	let loaded = $state(false);

	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>{$currentTranslations.bandHome.title}</title>
	<meta name="description" content={$currentTranslations.bandHome.metaDescription} />
</svelte:head>

<div class="band-home" class:loaded>
	<!-- Hero Section -->
	<section class="hero">
		<div class="hero-background">
			<div class="pattern-overlay"></div>
		</div>
		<div class="hero-content">
			<h1 class="hero-title">{$currentTranslations.bandHome.heroTitle}</h1>
			<p class="hero-subtitle">{$currentTranslations.bandHome.heroSubtitle}</p>
			<p class="hero-description">{$currentTranslations.bandHome.heroDescription}</p>
			<div class="hero-cta">
				<a href="#albums" class="btn btn-primary">{$currentTranslations.bandHome.albumsTitle}</a>
				<a href="/about" class="btn btn-secondary">{$currentTranslations.nav.about}</a>
			</div>
		</div>
	</section>

	<!-- Albums Section -->
	<section id="albums" class="albums-section">
		<div class="section-header">
			<h2>{$currentTranslations.bandHome.albumsTitle}</h2>
			<p class="section-subtitle">{$currentTranslations.bandHome.albumsSubtitle}</p>
		</div>

		<div class="albums-grid">
			{#each albums as album, index}
				<div class="album-card" style="animation-delay: {index * 0.2}s">
					<a href="/albums/{album.slug}" class="album-link">
						<div class="album-artwork">
							<img src={album.coverImage} alt={$language === 'de' ? album.titleDe : album.title} />
							<div class="album-overlay">
								<span class="play-icon">
									<svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
										<path d="M8 5v14l11-7z"/>
									</svg>
								</span>
							</div>
						</div>
						<div class="album-info">
							<h3 class="album-title">{$language === 'de' ? album.titleDe : album.title}</h3>
							<p class="album-subtitle">{$language === 'de' ? album.subtitleDe : album.subtitle}</p>
							<p class="album-meta">
								<span class="album-year">{album.year}</span>
								<span class="album-separator">•</span>
								<span class="album-tracks">{album.trackCount} {$currentTranslations.bandHome.tracks}</span>
								<span class="album-separator">•</span>
								<span class="album-period">{$language === 'de' ? album.historicalPeriodDe : album.historicalPeriod}</span>
							</p>
							<p class="album-description">
								{$language === 'de' ? album.descriptionDe : album.description}
							</p>
							<div class="album-actions">
								<span class="btn-listen">{$currentTranslations.bandHome.listenNow}</span>
							</div>
						</div>
					</a>
				</div>
			{/each}
		</div>
	</section>

	<!-- Features Section -->
	<section class="features-section">
		<div class="section-header">
			<h2>{$currentTranslations.bandHome.aboutTitle}</h2>
			<p class="section-subtitle">{$currentTranslations.bandHome.aboutText}</p>
		</div>

		<div class="features-grid">
			<div class="feature-card">
				<div class="feature-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
						<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
					</svg>
				</div>
				<h3>{$currentTranslations.bandHome.featureHistory}</h3>
				<p>{$currentTranslations.bandHome.featureHistoryDesc}</p>
			</div>

			<div class="feature-card">
				<div class="feature-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
						<path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
					</svg>
				</div>
				<h3>{$currentTranslations.bandHome.featureMusic}</h3>
				<p>{$currentTranslations.bandHome.featureMusicDesc}</p>
			</div>

			<div class="feature-card">
				<div class="feature-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
						<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/>
					</svg>
				</div>
				<h3>{$currentTranslations.bandHome.featureStory}</h3>
				<p>{$currentTranslations.bandHome.featureStoryDesc}</p>
			</div>
		</div>
	</section>
</div>

<style>
	.band-home {
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.8s ease-out;
	}

	.band-home.loaded {
		opacity: 1;
		transform: translateY(0);
	}

	/* Hero Section */
	.hero {
		position: relative;
		min-height: 70vh;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 4rem 2rem;
		overflow: hidden;
	}

	.hero-background {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}

	.pattern-overlay {
		width: 100%;
		height: 100%;
		background:
			radial-gradient(circle at 30% 40%, rgba(139, 0, 0, 0.15) 0%, transparent 50%),
			radial-gradient(circle at 70% 60%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 50% 50%, rgba(26, 68, 128, 0.1) 0%, transparent 60%);
		animation: pulse 10s ease-in-out infinite;
	}

	@keyframes pulse {
		0%, 100% { opacity: 0.6; }
		50% { opacity: 1; }
	}

	.hero-content {
		max-width: 900px;
		animation: fadeInUp 1s ease-out;
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.hero-title {
		font-size: 5rem;
		margin-bottom: 0.5rem;
		background: linear-gradient(135deg, var(--color-gold), var(--color-accent-light), var(--color-gold));
		background-size: 200% auto;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		animation: shimmer 3s linear infinite;
	}

	@keyframes shimmer {
		to { background-position: 200% center; }
	}

	.hero-subtitle {
		font-size: 1.8rem;
		color: var(--color-text-secondary);
		margin-bottom: 1.5rem;
		font-style: italic;
	}

	.hero-description {
		font-size: 1.3rem;
		line-height: 1.8;
		color: var(--color-text);
		margin-bottom: 2rem;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}

	.hero-cta {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		padding: 1rem 2.5rem;
		font-size: 1.1rem;
		font-weight: 600;
		border-radius: 4px;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.btn-primary {
		background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
		color: var(--color-text);
		border: 2px solid transparent;
	}

	.btn-primary:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(139, 0, 0, 0.5);
	}

	.btn-secondary {
		background: transparent;
		color: var(--color-gold);
		border: 2px solid var(--color-gold);
	}

	.btn-secondary:hover {
		background: var(--color-gold);
		color: var(--color-bg);
		transform: translateY(-3px);
	}

	/* Albums Section */
	.albums-section {
		padding: 4rem 2rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-header h2 {
		font-size: 3rem;
		margin-bottom: 0.5rem;
		background: linear-gradient(135deg, var(--color-gold), var(--color-accent-light));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.section-subtitle {
		font-size: 1.3rem;
		color: var(--color-text-secondary);
		max-width: 600px;
		margin: 0 auto;
	}

	.albums-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2rem;
	}

	.album-card {
		background: rgba(26, 26, 26, 0.5);
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 12px;
		overflow: hidden;
		transition: all 0.4s ease;
		opacity: 0;
		animation: fadeIn 0.8s ease-out forwards;
	}

	@keyframes fadeIn {
		to { opacity: 1; }
	}

	.album-card:hover {
		border-color: var(--color-gold);
		transform: translateY(-8px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(212, 175, 55, 0.1);
	}

	.album-link {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	.album-artwork {
		position: relative;
		aspect-ratio: 1;
		overflow: hidden;
	}

	.album-artwork img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s ease;
	}

	.album-card:hover .album-artwork img {
		transform: scale(1.05);
	}

	.album-overlay {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.6);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.album-card:hover .album-overlay {
		opacity: 1;
	}

	.play-icon {
		color: var(--color-gold);
		transform: scale(0.8);
		transition: transform 0.3s ease;
	}

	.album-card:hover .play-icon {
		transform: scale(1);
	}

	.album-info {
		padding: 1.5rem;
	}

	.album-title {
		font-size: 1.8rem;
		margin-bottom: 0.25rem;
		color: var(--color-text);
	}

	.album-subtitle {
		font-size: 1.1rem;
		color: var(--color-gold);
		margin-bottom: 0.5rem;
	}

	.album-meta {
		font-size: 0.95rem;
		color: var(--color-text-secondary);
		margin-bottom: 1rem;
	}

	.album-separator {
		margin: 0 0.5rem;
	}

	.album-description {
		font-size: 1rem;
		line-height: 1.7;
		color: var(--color-text-secondary);
		margin-bottom: 1.5rem;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.album-actions {
		display: flex;
		gap: 1rem;
	}

	.btn-listen {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		background: linear-gradient(135deg, var(--color-gold), var(--color-accent));
		color: var(--color-bg);
		font-size: 1rem;
		font-weight: 600;
		border-radius: 4px;
		transition: all 0.3s ease;
	}

	.album-card:hover .btn-listen {
		box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3);
	}

	/* Features Section */
	.features-section {
		padding: 4rem 2rem;
		background: rgba(139, 0, 0, 0.05);
		border-top: 1px solid rgba(212, 175, 55, 0.1);
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.feature-card {
		text-align: center;
		padding: 2rem;
		background: rgba(26, 26, 26, 0.3);
		border: 1px solid rgba(212, 175, 55, 0.1);
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.feature-card:hover {
		border-color: var(--color-gold);
		transform: translateY(-5px);
	}

	.feature-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background: linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(139, 0, 0, 0.2));
		color: var(--color-gold);
		margin-bottom: 1rem;
	}

	.feature-card h3 {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
		color: var(--color-gold);
	}

	.feature-card p {
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.hero-title {
			font-size: 3rem;
		}

		.hero-subtitle {
			font-size: 1.3rem;
		}

		.hero-description {
			font-size: 1.1rem;
		}

		.albums-grid {
			grid-template-columns: 1fr;
		}

		.section-header h2 {
			font-size: 2rem;
		}
	}
</style>
