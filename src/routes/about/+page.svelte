<script lang="ts">
	import { language, currentTranslations } from '$lib/i18n';
	import { albums } from '$lib/data/albums';

	const aboutText = {
		en: {
			missionTitle: 'My Mission',
			missionDesc1: '<strong>Uncivil War</strong> is a one-person project born from a simple belief: history\'s greatest stories deserve to be told with the power and intensity they demand. I don\'t just write songs about the past - I resurrect it, breathe life into forgotten warriors, and let their stories thunder through the ages.',
			missionDesc2: 'All music is created using AI music generation, primarily <a href="https://suno.com" target="_blank" rel="noopener noreferrer" class="external-link">Suno.com</a>. The combination of AI-generated metal with orchestral grandeur allows for an unprecedented fusion of historical storytelling and sonic intensity. Every lyric is meticulously researched, every song tells a true story, and every note aims to transport you to another time - to the clash of steel, the roar of cannons, and the cries of battle.',
			discographyTitle: 'Discography',
			discographyDesc: 'Each album is a complete journey through a pivotal era of history, crafted as a cohesive narrative experience:',
			bandDesc1: '<strong>Uncivil War</strong> is more than a music project - I am a historian with AI tools, a storyteller exploring what modern technology can create, and a time traveler with a microphone. I believe that the warriors, kings, and ordinary people who shaped our world deserve to have their stories told with fire and thunder.',
			bandDesc2: 'From the muddy fields of Crécy to the blood-soaked plains of Towton, from the visionary flames of Jeanne d\'Arc to the scheming courts of medieval England - I bring these moments to vivid, visceral life.',
			liveTitle: 'Live Experience - A Vision',
			liveDesc1: 'This is what it <em>could</em> look like if Uncivil War were a real touring band. Imagine: <strong>Wacken Open Air</strong> - the world\'s largest heavy metal festival - with <strong>real medieval cannons</strong> on stage.',
			liveDesc2: 'In just one year, AI music generation evolved to the point where creating "live" versions of songs became possible - complete with crowd noise, stage banter, and the raw energy of a festival performance. "Kaboom 2.0 (Live Wacken 2025)" imagines 85,000 metalheads experiencing history as the ground shakes and smoke billows across the stage. Perhaps one day, this vision will become reality.',
			quote: '"I don\'t just sing about history - I resurrect it, give it a voice, and let it scream through the ages."',
			websiteTitle: 'This Website',
			websiteDesc: 'More than just a music site, this is your gateway to medieval history:',
			feature1Desc: 'Stream and download all the albums',
			feature2Desc: 'Full lyrics for every song',
			feature3Desc: 'In-depth historical context for each track',
			feature4Desc: 'Explore battle sites on interactive maps',
			feature5Title: 'Encyclopedia',
			feature5Desc: 'Learn about the people, places, and events',
			feature6Title: 'Timeline',
			feature6Desc: 'Follow the chronological journey through history'
		},
		de: {
			missionTitle: 'Meine Mission',
			missionDesc1: '<strong>Uncivil War</strong> ist ein Ein-Personen-Projekt, entstanden aus einer einfachen Überzeugung: Die größten Geschichten der Geschichte verdienen es, mit der Kraft und Intensität erzählt zu werden, die sie verlangen. Ich schreibe nicht nur Lieder über die Vergangenheit - ich erwecke sie wieder zum Leben, hauche vergessenen Kriegern Leben ein und lasse ihre Geschichten durch die Zeitalter donnern.',
			missionDesc2: 'Alle Musik wird mit KI-Musikgenerierung erstellt, hauptsächlich <a href="https://suno.com" target="_blank" rel="noopener noreferrer" class="external-link">Suno.com</a>. Die Kombination aus KI-generiertem Metal mit orchestraler Größe ermöglicht eine beispiellose Fusion aus historischem Storytelling und klanglicher Intensität. Jeder Text ist sorgfältig recherchiert, jedes Lied erzählt eine wahre Geschichte, und jede Note zielt darauf ab, Sie in eine andere Zeit zu versetzen - zum Klirren von Stahl, zum Donnern der Kanonen und zu den Schreien der Schlacht.',
			discographyTitle: 'Diskografie',
			discographyDesc: 'Jedes Album ist eine komplette Reise durch eine entscheidende Ära der Geschichte, gestaltet als zusammenhängendes Erzählerlebnis:',
			bandDesc1: '<strong>Uncivil War</strong> ist mehr als ein Musikprojekt - ich bin ein Historiker mit KI-Werkzeugen, ein Geschichtenerzähler, der erkundet, was moderne Technologie erschaffen kann, und ein Zeitreisender mit einem Mikrofon. Ich glaube, dass die Krieger, Könige und einfachen Menschen, die unsere Welt geformt haben, es verdienen, dass ihre Geschichten mit Feuer und Donner erzählt werden.',
			bandDesc2: 'Von den schlammigen Feldern von Crécy bis zu den blutgetränkten Ebenen von Towton, von den visionären Flammen der Jeanne d\'Arc bis zu den intriganten Höfen des mittelalterlichen Englands - ich erwecke diese Momente zum lebendigen, packenden Leben.',
			liveTitle: 'Live-Erlebnis - Eine Vision',
			liveDesc1: 'So <em>könnte</em> es aussehen, wenn Uncivil War eine echte tourende Band wäre. Stellen Sie sich vor: <strong>Wacken Open Air</strong> - das größte Heavy-Metal-Festival der Welt - mit <strong>echten mittelalterlichen Kanonen</strong> auf der Bühne.',
			liveDesc2: 'In nur einem Jahr hat sich die KI-Musikgenerierung so weit entwickelt, dass "Live"-Versionen von Songs möglich wurden - komplett mit Publikumsgeräuschen, Bühnengeplänkel und der rohen Energie einer Festival-Performance. "Kaboom 2.0 (Live Wacken 2025)" stellt sich vor, wie 85.000 Metalheads Geschichte erleben, während der Boden bebt und Rauch über die Bühne wallt. Vielleicht wird diese Vision eines Tages Wirklichkeit.',
			quote: '„Ich singe nicht nur über Geschichte - ich erwecke sie wieder zum Leben, gebe ihr eine Stimme und lasse sie durch die Zeitalter schreien."',
			websiteTitle: 'Diese Website',
			websiteDesc: 'Mehr als nur eine Musikseite - dies ist Ihr Tor zur mittelalterlichen Geschichte:',
			feature1Desc: 'Streamen und laden Sie alle unsere Alben herunter',
			feature2Desc: 'Vollständige Texte für jedes Lied',
			feature3Desc: 'Tiefgehender historischer Kontext für jeden Track',
			feature4Desc: 'Erkunden Sie Schlachtfelder auf interaktiven Karten',
			feature5Title: 'Enzyklopädie',
			feature5Desc: 'Lernen Sie über die Menschen, Orte und Ereignisse',
			feature6Title: 'Zeitleiste',
			feature6Desc: 'Folgen Sie der chronologischen Reise durch die Geschichte'
		}
	};

	function getAlbumTitle(album: typeof albums[0]) {
		return $language === 'de' ? album.titleDe : album.title;
	}

	function getAlbumDescription(album: typeof albums[0]) {
		return $language === 'de' ? album.descriptionDe : album.description;
	}
</script>

<svelte:head>
	<title>{$currentTranslations.about.pageTitle}</title>
</svelte:head>

<div class="about-page">
	<section class="hero-section">
		<h1>{$currentTranslations.about.title}</h1>
		<p class="tagline">{$currentTranslations.about.tagline}</p>
	</section>

	<!-- Mission Section -->
	<section class="content-section">
		<div class="section-content">
			<h2>{aboutText[$language].missionTitle}</h2>
			<p>{@html aboutText[$language].missionDesc1}</p>
			<p>{@html aboutText[$language].missionDesc2}</p>
		</div>
	</section>

	<!-- Discography Section -->
	<section class="discography-section">
		<h2>{aboutText[$language].discographyTitle}</h2>
		<p class="discography-intro">{aboutText[$language].discographyDesc}</p>
		<div class="albums-grid">
			{#each albums as album}
				<a href="/albums/{album.slug}" class="album-card">
					<div class="album-cover">
						<img src={album.coverImage} alt={getAlbumTitle(album)} />
					</div>
					<div class="album-info">
						<h3>{getAlbumTitle(album)}</h3>
						<p class="album-meta">{album.year} • {album.trackCount} {$language === 'de' ? 'Titel' : 'tracks'}</p>
						<p class="album-period">{$language === 'de' ? album.historicalPeriodDe : album.historicalPeriod}</p>
						<p class="album-desc">{getAlbumDescription(album)}</p>
					</div>
				</a>
			{/each}
		</div>
	</section>

	<!-- Band & Live Section -->
	<section class="band-section">
		<h2>{aboutText[$language].liveTitle}</h2>
		<div class="band-content">
			<div class="band-image">
				<img src="/images/wacken-2025.png" alt="Uncivil War live at Wacken Open Air 2025" />
			</div>
			<div class="band-text">
				<p>{@html aboutText[$language].bandDesc1}</p>
				<p>{aboutText[$language].bandDesc2}</p>
				<p>{@html aboutText[$language].liveDesc1}</p>
				<p>{aboutText[$language].liveDesc2}</p>
			</div>
		</div>

		<div class="quote-block">
			<blockquote>{aboutText[$language].quote}</blockquote>
		</div>
	</section>

	<!-- Website Features Section -->
	<section class="features-section">
		<h2>{aboutText[$language].websiteTitle}</h2>
		<p class="features-intro">{aboutText[$language].websiteDesc}</p>
		<div class="features-grid">
			<div class="feature-box">
				<div class="feature-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
						<path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
					</svg>
				</div>
				<h3>{$currentTranslations.about.fullAlbum}</h3>
				<p>{aboutText[$language].feature1Desc}</p>
			</div>
			<div class="feature-box">
				<div class="feature-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
						<polyline points="14 2 14 8 20 8"/>
						<line x1="16" y1="13" x2="8" y2="13"/>
						<line x1="16" y1="17" x2="8" y2="17"/>
					</svg>
				</div>
				<h3>{$currentTranslations.about.completeLyrics}</h3>
				<p>{aboutText[$language].feature2Desc}</p>
			</div>
			<div class="feature-box">
				<div class="feature-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
						<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
					</svg>
				</div>
				<h3>{$currentTranslations.about.historicalContext}</h3>
				<p>{aboutText[$language].feature3Desc}</p>
			</div>
			<div class="feature-box">
				<div class="feature-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
						<circle cx="12" cy="10" r="3"/>
						<path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>
					</svg>
				</div>
				<h3>{$currentTranslations.about.interactiveMaps}</h3>
				<p>{aboutText[$language].feature4Desc}</p>
			</div>
			<div class="feature-box">
				<div class="feature-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
						<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/>
					</svg>
				</div>
				<h3>{aboutText[$language].feature5Title}</h3>
				<p>{aboutText[$language].feature5Desc}</p>
			</div>
			<div class="feature-box">
				<div class="feature-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="32" height="32">
						<circle cx="12" cy="12" r="10"/>
						<polyline points="12 6 12 12 16 14"/>
					</svg>
				</div>
				<h3>{aboutText[$language].feature6Title}</h3>
				<p>{aboutText[$language].feature6Desc}</p>
			</div>
		</div>
	</section>

	<section class="cta-section">
		<h2>{$currentTranslations.about.ctaTitle}</h2>
		<a href="/#albums" class="cta-button">{$language === 'de' ? 'Alben entdecken' : 'Explore Albums'}</a>
	</section>
</div>

<style>
	.about-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.hero-section {
		text-align: center;
		padding: 4rem 0;
		margin-bottom: 4rem;
		border-bottom: 2px solid var(--color-accent);
	}

	.hero-section h1 {
		font-size: 5rem;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, var(--color-gold), var(--color-accent-light));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.tagline {
		font-size: 1.8rem;
		color: var(--color-text-secondary);
		font-style: italic;
	}

	.content-section,
	.discography-section,
	.band-section,
	.features-section {
		margin-bottom: 5rem;
	}

	.content-section h2,
	.discography-section h2,
	.band-section h2,
	.features-section h2 {
		font-size: 3rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	.section-content {
		max-width: 800px;
		margin: 0 auto;
	}

	.section-content p {
		font-size: 1.2rem;
		line-height: 1.8;
		margin-bottom: 1.5rem;
		color: var(--color-text-secondary);
	}

	:global(.external-link) {
		color: var(--color-gold);
		text-decoration: none;
		border-bottom: 1px solid var(--color-gold);
		transition: all 0.2s ease;
	}

	:global(.external-link:hover) {
		color: var(--color-accent-light);
		border-bottom-color: var(--color-accent-light);
	}

	/* Discography Section */
	.discography-intro,
	.features-intro {
		text-align: center;
		font-size: 1.2rem;
		color: var(--color-text-secondary);
		margin-bottom: 2rem;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}

	.albums-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
		gap: 2rem;
	}

	.album-card {
		display: flex;
		gap: 1.5rem;
		padding: 1.5rem;
		background: rgba(26, 26, 26, 0.5);
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 12px;
		text-decoration: none;
		color: inherit;
		transition: all 0.3s ease;
	}

	.album-card:hover {
		border-color: var(--color-gold);
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
	}

	.album-cover {
		width: 150px;
		height: 150px;
		flex-shrink: 0;
		border-radius: 8px;
		overflow: hidden;
		border: 2px solid var(--color-gold);
	}

	.album-cover img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.album-info h3 {
		font-size: 1.4rem;
		margin-bottom: 0.25rem;
		color: var(--color-gold);
	}

	.album-meta {
		font-size: 0.9rem;
		color: var(--color-text-secondary);
		margin-bottom: 0.25rem;
	}

	.album-period {
		font-size: 0.9rem;
		color: var(--color-accent-light);
		font-style: italic;
		margin-bottom: 0.75rem;
	}

	.album-desc {
		font-size: 0.95rem;
		color: var(--color-text-secondary);
		line-height: 1.5;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	/* Band Section */
	.band-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: start;
	}

	.band-image {
		border-radius: 12px;
		overflow: hidden;
		border: 3px solid var(--color-gold);
		box-shadow: 0 10px 40px rgba(139, 0, 0, 0.4);
	}

	.band-image img {
		width: 100%;
		height: auto;
		display: block;
	}

	.band-text p {
		font-size: 1.2rem;
		line-height: 1.8;
		margin-bottom: 1.5rem;
		color: var(--color-text-secondary);
	}

	.quote-block {
		margin-top: 3rem;
		padding: 2rem;
		background: rgba(139, 0, 0, 0.1);
		border-left: 4px solid var(--color-gold);
		border-radius: 8px;
	}

	.quote-block blockquote {
		font-size: 1.5rem;
		font-style: italic;
		line-height: 1.6;
		color: var(--color-text);
		text-align: center;
	}

	/* Features Section */
	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.feature-box {
		text-align: center;
		padding: 2rem;
		background: rgba(26, 26, 26, 0.5);
		border: 1px solid rgba(212, 175, 55, 0.2);
		border-radius: 8px;
		transition: all 0.3s ease;
	}

	.feature-box:hover {
		border-color: var(--color-gold);
		transform: translateY(-10px);
		box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
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

	.feature-box h3 {
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
		color: var(--color-gold);
	}

	.feature-box p {
		color: var(--color-text-secondary);
		line-height: 1.5;
	}

	/* CTA Section */
	.cta-section {
		text-align: center;
		padding: 4rem 2rem;
		background: linear-gradient(135deg, rgba(139, 0, 0, 0.1), rgba(212, 175, 55, 0.1));
		border-radius: 8px;
		margin-top: 4rem;
	}

	.cta-section h2 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	.cta-button {
		display: inline-block;
		padding: 1.5rem 3rem;
		background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
		color: var(--color-text);
		font-size: 1.3rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		border-radius: 4px;
		transition: all 0.3s ease;
	}

	.cta-button:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 40px rgba(139, 0, 0, 0.5);
	}

	@media (max-width: 768px) {
		.about-page {
			padding: 1rem;
		}

		.hero-section h1 {
			font-size: 3rem;
		}

		.tagline {
			font-size: 1.3rem;
		}

		.hero-section {
			padding: 2rem 0;
			margin-bottom: 2rem;
		}

		.content-section h2,
		.discography-section h2,
		.band-section h2,
		.features-section h2 {
			font-size: 2rem;
		}

		.albums-grid {
			grid-template-columns: 1fr;
		}

		.album-card {
			flex-direction: column;
			text-align: center;
		}

		.album-cover {
			width: 200px;
			height: 200px;
			margin: 0 auto;
		}

		.band-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}

		.feature-box {
			padding: 1.25rem;
		}

		.cta-section {
			padding: 2rem 1rem;
			margin-top: 2rem;
		}
	}
</style>
