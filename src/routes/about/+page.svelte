<script lang="ts">
	import { language, currentTranslations } from '$lib/i18n';

	const aboutText = {
		en: {
			albumDesc1: '<strong>Wars of the Roses</strong> is an epic concept album that chronicles one of England\'s most brutal and complex civil wars. Through powerful music and meticulously researched lyrics, we bring to life the three-decade conflict between the Houses of Lancaster and York.',
			albumDesc2: 'Each song is a chapter in this medieval saga, exploring not just the battles, but the human stories behind them - the ambition, betrayal, loyalty, and tragedy that defined this era.',
			bandDesc1: '<strong>Uncivil War</strong> is dedicated to bringing historical narratives to life through heavy, atmospheric music. We believe that history\'s greatest stories deserve to be told with the power and intensity they demand.',
			bandDesc2: 'Our music combines the brutality of modern metal with orchestral elements and historical authenticity. Every lyric is researched, every song tells a true story, and every note aims to transport you to another time.',
			liveDesc1: 'In 2025, Uncivil War made history at <strong>Wacken Open Air</strong> - the world\'s largest heavy metal festival. Our performance featured something no other band has ever brought to a metal stage: <strong>real medieval cannons</strong>.',
			liveDesc2: 'When we performed "Kaboom 2.0", the audience witnessed actual 15th-century replica cannons firing across the stage, recreating the chaos of the Battle of Barnet. The ground shook, the smoke billowed, and 85,000 metalheads experienced the Wars of the Roses like never before.',
			quote: '"We don\'t just sing about history - we resurrect it, give it a voice, and let it scream through the ages."',
			feature1Desc: '22 epic tracks of historical metal',
			feature2Desc: 'Every song includes full lyrics with historical references',
			feature3Desc: 'Detailed descriptions of the events, people, and places',
			feature4Desc: 'Explore the actual locations where history unfolded'
		},
		de: {
			albumDesc1: '<strong>Rosenkriege</strong> ist ein episches Konzeptalbum, das einen der brutalsten und komplexesten Bürgerkriege Englands dokumentiert. Durch kraftvolle Musik und sorgfältig recherchierte Texte erwecken wir den drei Jahrzehnte andauernden Konflikt zwischen den Häusern Lancaster und York zum Leben.',
			albumDesc2: 'Jedes Lied ist ein Kapitel in dieser mittelalterlichen Saga und erforscht nicht nur die Schlachten, sondern auch die menschlichen Geschichten dahinter - den Ehrgeiz, den Verrat, die Loyalität und die Tragödie, die diese Ära prägten.',
			bandDesc1: '<strong>Uncivil War</strong> widmet sich der Aufgabe, historische Erzählungen durch schwere, atmosphärische Musik zum Leben zu erwecken. Wir glauben, dass die größten Geschichten der Geschichte es verdienen, mit der Kraft und Intensität erzählt zu werden, die sie verlangen.',
			bandDesc2: 'Unsere Musik verbindet die Brutalität des modernen Metals mit orchestralen Elementen und historischer Authentizität. Jeder Text ist recherchiert, jedes Lied erzählt eine wahre Geschichte, und jede Note zielt darauf ab, Sie in eine andere Zeit zu versetzen.',
			liveDesc1: '2025 schrieb Uncivil War Geschichte beim <strong>Wacken Open Air</strong> - dem größten Heavy-Metal-Festival der Welt. Unsere Performance bot etwas, das noch keine andere Band auf eine Metal-Bühne gebracht hat: <strong>echte mittelalterliche Kanonen</strong>.',
			liveDesc2: 'Als wir "Kaboom 2.0" spielten, erlebte das Publikum echte Nachbildungen von Kanonen aus dem 15. Jahrhundert, die über die Bühne feuerten und das Chaos der Schlacht von Barnet nachstellten. Der Boden bebte, der Rauch wallte, und 85.000 Metalheads erlebten die Rosenkriege wie nie zuvor.',
			quote: '„Wir singen nicht nur über Geschichte - wir erwecken sie wieder zum Leben, geben ihr eine Stimme und lassen sie durch die Zeitalter schreien."',
			feature1Desc: '22 epische Titel historischen Metals',
			feature2Desc: 'Jedes Lied enthält vollständige Texte mit historischen Bezügen',
			feature3Desc: 'Detaillierte Beschreibungen der Ereignisse, Personen und Orte',
			feature4Desc: 'Erkunden Sie die tatsächlichen Orte, an denen Geschichte geschrieben wurde'
		}
	};
</script>

<svelte:head>
	<title>{$currentTranslations.about.pageTitle}</title>
</svelte:head>

<div class="about-page">
	<section class="hero-section">
		<h1>{$currentTranslations.about.title}</h1>
		<p class="tagline">{$currentTranslations.about.tagline}</p>
	</section>

	<section class="content-section">
		<div class="section-content">
			<h2>{$currentTranslations.about.albumSection}</h2>
			<p>
				{@html aboutText[$language].albumDesc1}
			</p>
			<p>
				{aboutText[$language].albumDesc2}
			</p>
		</div>
	</section>

	<section class="live-section">
		<h2>{$language === 'de' ? 'Live auf Wacken 2025' : 'Live at Wacken 2025'}</h2>
		<div class="live-content">
			<div class="live-image">
				<img src="/images/wacken-2025.jpg" alt="Uncivil War live at Wacken Open Air 2025" />
			</div>
			<div class="section-content">
				<p>
					{@html aboutText[$language].liveDesc1}
				</p>
				<p>
					{aboutText[$language].liveDesc2}
				</p>
			</div>
		</div>
	</section>

	<section class="band-section">
		<h2>{$currentTranslations.about.bandSection}</h2>
		<div class="section-content">
			<p>
				{@html aboutText[$language].bandDesc1}
			</p>
			<p>
				{aboutText[$language].bandDesc2}
			</p>
		</div>

		<div class="quote-block">
			<blockquote>
				{$currentTranslations.about.quote}
			</blockquote>
		</div>
	</section>

	<section class="features-section">
		<h2>{$currentTranslations.about.experienceSection}</h2>
		<div class="features-grid">
			<div class="feature-box">
				<div class="feature-icon">🎸</div>
				<h3>{$currentTranslations.about.fullAlbum}</h3>
				<p>{aboutText[$language].feature1Desc}</p>
			</div>
			<div class="feature-box">
				<div class="feature-icon">📜</div>
				<h3>{$currentTranslations.about.completeLyrics}</h3>
				<p>{aboutText[$language].feature2Desc}</p>
			</div>
			<div class="feature-box">
				<div class="feature-icon">📚</div>
				<h3>{$currentTranslations.about.historicalContext}</h3>
				<p>{aboutText[$language].feature3Desc}</p>
			</div>
			<div class="feature-box">
				<div class="feature-icon">🗺️</div>
				<h3>{$currentTranslations.about.interactiveMaps}</h3>
				<p>{aboutText[$language].feature4Desc}</p>
			</div>
		</div>
	</section>

	<section class="cta-section">
		<h2>{$currentTranslations.about.ctaTitle}</h2>
		<a href="/songs" class="cta-button">{$currentTranslations.about.ctaButton}</a>
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
	.live-section,
	.band-section,
	.features-section {
		margin-bottom: 5rem;
	}

	.content-section h2,
	.live-section h2,
	.band-section h2,
	.features-section h2 {
		font-size: 3rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	.live-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		align-items: center;
	}

	.live-image {
		border-radius: 12px;
		overflow: hidden;
		border: 3px solid var(--color-gold);
		box-shadow: 0 10px 40px rgba(139, 0, 0, 0.4);
	}

	.live-image img {
		width: 100%;
		height: auto;
		display: block;
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

	.live-section .section-content {
		max-width: none;
		margin: 0;
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

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.feature-box h3 {
		font-size: 1.5rem;
		margin-bottom: 0.5rem;
	}

	.feature-box p {
		color: var(--color-text-secondary);
	}

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
		.hero-section h1 {
			font-size: 3rem;
		}

		.tagline {
			font-size: 1.3rem;
		}

		.content-section h2,
		.live-section h2,
		.band-section h2,
		.features-section h2 {
			font-size: 2rem;
		}

		.live-content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
