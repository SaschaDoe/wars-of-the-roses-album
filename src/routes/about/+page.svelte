<script lang="ts">
	import { language, currentTranslations } from '$lib/i18n';

	const aboutText = {
		en: {
			albumDesc1: '<strong>Wars of the Roses</strong> is an epic concept album that chronicles one of England\'s most brutal and complex civil wars. Through powerful music and meticulously researched lyrics, we bring to life the three-decade conflict between the Houses of Lancaster and York.',
			albumDesc2: 'Each song is a chapter in this medieval saga, exploring not just the battles, but the human stories behind them - the ambition, betrayal, loyalty, and tragedy that defined this era.',
			warsDesc1: 'For over three decades, England tore itself apart in a brutal civil war between two branches of the royal Plantagenet family. The House of Lancaster (symbolized by the red rose) and the House of York (white rose) fought for control of the English throne in a conflict that saw kings made and unmade, entire noble families destroyed, and the medieval order collapse.',
			warsDesc2: "This wasn't just a war of battles—it was a war of betrayals, shifting alliances, and political intrigue. Brothers fought brothers, fathers turned against sons, and powerful nobles like Warwick the Kingmaker manipulated monarchs like chess pieces. The conflict only ended when Henry Tudor defeated Richard III at Bosworth Field in 1485, founding the Tudor dynasty and uniting the two roses.",
			bandDesc1: '<strong>Uncivil War</strong> is dedicated to bringing historical narratives to life through heavy, atmospheric music. We believe that history\'s greatest stories deserve to be told with the power and intensity they demand.',
			bandDesc2: 'Our music combines the brutality of modern metal with orchestral elements and historical authenticity. Every lyric is researched, every song tells a true story, and every note aims to transport you to another time.',
			quote: '"We don\'t just sing about history - we resurrect it, give it a voice, and let it scream through the ages."',
			feature1Desc: '21 epic tracks of historical metal',
			feature2Desc: 'Every song includes full lyrics with historical references',
			feature3Desc: 'Detailed descriptions of the events, people, and places',
			feature4Desc: 'Explore the actual locations where history unfolded',
			exploreTimeline: 'Explore the Complete Timeline →'
		},
		de: {
			albumDesc1: '<strong>Rosenkriege</strong> ist ein episches Konzeptalbum, das einen der brutalsten und komplexesten Bürgerkriege Englands dokumentiert. Durch kraftvolle Musik und sorgfältig recherchierte Texte erwecken wir den drei Jahrzehnte andauernden Konflikt zwischen den Häusern Lancaster und York zum Leben.',
			albumDesc2: 'Jedes Lied ist ein Kapitel in dieser mittelalterlichen Saga und erforscht nicht nur die Schlachten, sondern auch die menschlichen Geschichten dahinter - den Ehrgeiz, den Verrat, die Loyalität und die Tragödie, die diese Ära prägten.',
			warsDesc1: 'Über drei Jahrzehnte lang zerriss sich England in einem brutalen Bürgerkrieg zwischen zwei Zweigen der königlichen Plantagenet-Familie. Das Haus Lancaster (symbolisiert durch die rote Rose) und das Haus York (weiße Rose) kämpften um die Kontrolle des englischen Throns in einem Konflikt, der Könige machte und stürzte, ganze Adelsfamilien zerstörte und die mittelalterliche Ordnung zum Einsturz brachte.',
			warsDesc2: 'Dies war nicht nur ein Krieg der Schlachten - es war ein Krieg der Verräte, wechselnden Allianzen und politischen Intrigen. Brüder kämpften gegen Brüder, Väter wandten sich gegen Söhne, und mächtige Adlige wie Warwick der Königsmacher manipulierten Monarchen wie Schachfiguren. Der Konflikt endete erst, als Heinrich Tudor Richard III. 1485 bei Bosworth Field besiegte, die Tudor-Dynastie gründete und die beiden Rosen vereinte.',
			bandDesc1: '<strong>Uncivil War</strong> widmet sich der Aufgabe, historische Erzählungen durch schwere, atmosphärische Musik zum Leben zu erwecken. Wir glauben, dass die größten Geschichten der Geschichte es verdienen, mit der Kraft und Intensität erzählt zu werden, die sie verlangen.',
			bandDesc2: 'Unsere Musik verbindet die Brutalität des modernen Metals mit orchestralen Elementen und historischer Authentizität. Jeder Text ist recherchiert, jedes Lied erzählt eine wahre Geschichte, und jede Note zielt darauf ab, Sie in eine andere Zeit zu versetzen.',
			quote: '„Wir singen nicht nur über Geschichte - wir erwecken sie wieder zum Leben, geben ihr eine Stimme und lassen sie durch die Zeitalter schreien."',
			feature1Desc: '21 epische Titel historischen Metals',
			feature2Desc: 'Jedes Lied enthält vollständige Texte mit historischen Bezügen',
			feature3Desc: 'Detaillierte Beschreibungen der Ereignisse, Personen und Orte',
			feature4Desc: 'Erkunden Sie die tatsächlichen Orte, an denen Geschichte geschrieben wurde',
			exploreTimeline: 'Zur vollständigen Zeitleiste →'
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

	<section class="history-section">
		<h2>{$currentTranslations.about.warsSection}</h2>
		<div class="section-content">
			<p>
				{aboutText[$language].warsDesc1}
			</p>
			<p>
				{aboutText[$language].warsDesc2}
			</p>
			<p class="timeline-link">
				<a href="/encyclopedia/timeline">{aboutText[$language].exploreTimeline}</a>
			</p>
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
	.history-section,
	.band-section,
	.features-section {
		margin-bottom: 5rem;
	}

	.content-section h2,
	.history-section h2,
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

	.timeline-link {
		text-align: center;
		margin-top: 2rem;
	}

	.timeline-link a {
		display: inline-block;
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--color-gold);
		padding: 1rem 2rem;
		border: 2px solid var(--color-gold);
		border-radius: 4px;
		transition: all 0.3s ease;
	}

	.timeline-link a:hover {
		background: var(--color-gold);
		color: var(--color-bg);
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
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
		.history-section h2,
		.band-section h2,
		.features-section h2 {
			font-size: 2rem;
		}

		.features-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
