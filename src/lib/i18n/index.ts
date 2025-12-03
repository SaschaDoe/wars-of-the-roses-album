import { writable, derived, get } from 'svelte/store';

export type Language = 'en' | 'de';

// Create a writable store for the current language
function createLanguageStore() {
	// Try to get saved language from localStorage, default to 'en'
	const stored = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
	const initial: Language = (stored === 'de' ? 'de' : 'en');

	const { subscribe, set, update } = writable<Language>(initial);

	return {
		subscribe,
		set: (lang: Language) => {
			if (typeof window !== 'undefined') {
				localStorage.setItem('language', lang);
			}
			set(lang);
		},
		toggle: () => {
			update(lang => {
				const newLang = lang === 'en' ? 'de' : 'en';
				if (typeof window !== 'undefined') {
					localStorage.setItem('language', newLang);
				}
				return newLang;
			});
		}
	};
}

export const language = createLanguageStore();

// UI translations
export const translations = {
	en: {
		// Navigation
		nav: {
			home: 'Home',
			albums: 'Albums',
			songs: 'Songs',
			encyclopedia: 'Encyclopedia',
			download: 'Download',
			about: 'About',
			timeline: 'Timeline',
			people: 'People',
			events: 'Events',
			locations: 'Locations',
			concepts: 'Concepts'
		},
		// Footer
		footer: {
			copyright: '© 2025 Uncivil War. All rights reserved.'
		},
		// Band Home page (new root)
		bandHome: {
			title: 'Uncivil War - Where History Meets Heavy Metal',
			metaDescription: 'Uncivil War - Historical concept albums bringing medieval warfare to life through powerful metal music',
			heroTitle: 'Uncivil War',
			heroSubtitle: 'Where History Meets Heavy Metal',
			heroDescription: 'We bring the epic battles, legendary figures, and dramatic turning points of medieval history to life through powerful concept albums. Each song is a gateway to the past, combining historically accurate storytelling with thundering metal soundscapes.',
			albumsTitle: 'Our Albums',
			albumsSubtitle: 'Epic Musical Journeys Through History',
			listenNow: 'Listen Now',
			learnMore: 'Learn More',
			tracks: 'tracks',
			aboutTitle: 'About the Band',
			aboutText: 'Uncivil War creates historically-inspired metal concept albums that transport listeners to pivotal moments in medieval history. Our music combines meticulous historical research with powerful compositions, complete lyrics, and rich storytelling.',
			featureHistory: 'Historical Accuracy',
			featureHistoryDesc: 'Every song is backed by extensive research',
			featureMusic: 'Powerful Music',
			featureMusicDesc: 'Epic metal soundscapes that bring history alive',
			featureStory: 'Complete Stories',
			featureStoryDesc: 'Each album tells a cohesive narrative'
		},
		// Home page (kept for album pages)
		home: {
			title: 'Uncivil War - Wars of the Roses',
			metaDescription: 'Wars of the Roses - A musical journey through medieval history by Uncivil War',
			imageCaption: '"Plucking the Red and White Roses" by Henry Payne (1908) - depicting the legendary scene in Temple Garden where nobles chose sides',
			artistName: 'Uncivil War',
			albumTitle: 'Wars of the Roses',
			albumSubtitle: 'A Concept Album • 21 Songs',
			albumDescription: "Experience England's bloodiest civil war through music. This concept album tells the complete story of the Wars of the Roses (1455-1487) — the brutal 30-year conflict between the House of Lancaster and the House of York that tore medieval England apart and ended with the rise of the Tudor dynasty.",
			listenButton: 'Listen to the Songs',
			exploreButton: 'Explore the Encyclopedia'
		},
		// Songs page
		songs: {
			pageTitle: 'Songs - Wars of the Roses',
			title: 'Wars of the Roses',
			subtitle: 'Complete Tracklist',
			tracks: 'tracks',
			albumDescription: "An epic musical journey through England's most brutal civil war. Each song chronicles a pivotal moment in the thirty-year conflict between the Houses of Lancaster and York.",
			downloadAlbum: 'Download Album',
			downloadDescription: 'Get the full album to listen offline',
			downloadButton: 'Download Full Album (ZIP)',
			aboutAlbum: 'About This Album',
			aboutDescription: 'Wars of the Roses combines powerful metal soundscapes with historically accurate storytelling. Each track is accompanied by detailed historical context, interactive maps, and complete lyrics to immerse you in the medieval conflict that shaped England.'
		},
		// Song detail page
		song: {
			backToSongs: '← Back to all songs',
			track: 'Track',
			lyrics: 'Lyrics',
			historicalContext: 'Historical Context',
			keyFigures: 'Key Figures',
			previousSong: '← Previous Song',
			nextSong: 'Next Song →'
		},
		// Encyclopedia page
		encyclopedia: {
			pageTitle: 'Encyclopedia - Wars of the Roses',
			title: 'Encyclopedia of the Wars',
			subtitle: "People, places, and events that shaped England's bloodiest conflict",
			overview: 'Overview',
			readFullOverview: 'Read Full Overview →',
			mapCaption: 'Major battle sites across England',
			timelineSection: 'Interactive Timeline',
			timelineDescription: 'Follow the chronological journey through the Wars of the Roses, from the first battle at St Albans to the final Tudor victory.',
			viewTimeline: 'View Full Timeline →',
			people: 'People',
			events: 'Battles & Events',
			places: 'Places',
			concepts: 'Concepts',
			viewOnTimeline: 'View on Timeline →',
			relatedEntries: 'Related Entries',
			timelineEvents: 'Timeline Events',
			location: 'Location'
		},
		// Timeline page
		timeline: {
			pageTitle: 'Timeline - Wars of the Roses',
			title: 'Timeline of the Wars',
			subtitle: 'A chronological journey through the Wars of the Roses (1455-1487)',
			keyFigures: 'Key Figures:',
			locations: 'Locations:',
			viewFullTimeline: '← View Full Timeline',
			timelineEvent: 'Timeline Event'
		},
		// Download page
		download: {
			pageTitle: 'Download - Wars of the Roses',
			title: 'Download Album',
			subtitle: 'Get the full Wars of the Roses experience',
			fullAlbum: 'Full Album Download',
			fullAlbumDescription: 'Download the complete Wars of the Roses album as a ZIP file containing all tracks in high-quality MP3 format.',
			feature1: '22 high-quality MP3 tracks',
			feature2: 'Complete Wars of the Roses story',
			feature3: 'Bonus: Virgin Queen preview track',
			downloadButton: 'Download Full Album (ZIP)',
			individualTracks: 'Individual Tracks',
			individualDescription: 'Download songs individually',
			view: 'View',
			downloadTrack: 'Download'
		},
		// About page
		about: {
			pageTitle: 'About - Uncivil War',
			title: 'About Uncivil War',
			tagline: 'Where History Meets Heavy Metal',
			albumSection: 'The Album',
			albumText: 'Wars of the Roses is a concept album that tells the complete story of England\'s bloodiest civil war through 21 original songs. Each track chronicles a pivotal moment in the thirty-year conflict between the Houses of Lancaster and York.',
			warsSection: 'The Wars of the Roses (1455-1487)',
			warsText: 'The Wars of the Roses were a series of brutal civil wars fought between two branches of the royal House of Plantagenet: the House of Lancaster (symbolized by a red rose) and the House of York (symbolized by a white rose). The conflict began when Richard, Duke of York, challenged the weak rule of King Henry VI.',
			bandSection: 'About the Band',
			quote: '"We believe that history deserves to be remembered, and what better way than through the power of music?"',
			experienceSection: 'Experience the Album',
			fullAlbum: 'Full Album',
			fullAlbumDesc: '21 original tracks',
			completeLyrics: 'Complete Lyrics',
			completeLyricsDesc: 'Every word, every verse',
			historicalContext: 'Historical Context',
			historicalContextDesc: 'Deep dive into history',
			interactiveMaps: 'Interactive Maps',
			interactiveMapsDesc: 'Explore the locations',
			ctaTitle: 'Ready to Begin the Journey?',
			ctaButton: 'Explore the Songs'
		},
		// Common
		common: {
			loading: 'Loading...',
			error: 'Error',
			notFound: 'Not found'
		}
	},
	de: {
		// Navigation
		nav: {
			home: 'Start',
			albums: 'Alben',
			songs: 'Lieder',
			encyclopedia: 'Enzyklopädie',
			download: 'Download',
			about: 'Über uns',
			timeline: 'Zeitleiste',
			people: 'Personen',
			events: 'Ereignisse',
			locations: 'Orte',
			concepts: 'Konzepte'
		},
		// Footer
		footer: {
			copyright: '© 2025 Uncivil War. Alle Rechte vorbehalten.'
		},
		// Band Home page (new root)
		bandHome: {
			title: 'Uncivil War - Wo Geschichte auf Heavy Metal trifft',
			metaDescription: 'Uncivil War - Historische Konzeptalben, die mittelalterliche Kriegsführung durch kraftvolle Metal-Musik zum Leben erwecken',
			heroTitle: 'Uncivil War',
			heroSubtitle: 'Wo Geschichte auf Heavy Metal trifft',
			heroDescription: 'Wir erwecken die epischen Schlachten, legendären Persönlichkeiten und dramatischen Wendepunkte der mittelalterlichen Geschichte durch kraftvolle Konzeptalben zum Leben. Jedes Lied ist ein Tor zur Vergangenheit und verbindet historisch genaues Storytelling mit donnernden Metal-Klanglandschaften.',
			albumsTitle: 'Unsere Alben',
			albumsSubtitle: 'Epische musikalische Reisen durch die Geschichte',
			listenNow: 'Jetzt anhören',
			learnMore: 'Mehr erfahren',
			tracks: 'Titel',
			aboutTitle: 'Über die Band',
			aboutText: 'Uncivil War erschafft historisch inspirierte Metal-Konzeptalben, die Zuhörer zu entscheidenden Momenten der mittelalterlichen Geschichte transportieren. Unsere Musik kombiniert sorgfältige historische Recherche mit kraftvollen Kompositionen, vollständigen Texten und reichhaltigen Erzählungen.',
			featureHistory: 'Historische Genauigkeit',
			featureHistoryDesc: 'Jedes Lied basiert auf umfassender Recherche',
			featureMusic: 'Kraftvolle Musik',
			featureMusicDesc: 'Epische Metal-Klänge, die Geschichte lebendig machen',
			featureStory: 'Vollständige Geschichten',
			featureStoryDesc: 'Jedes Album erzählt eine zusammenhängende Erzählung'
		},
		// Home page
		home: {
			title: 'Uncivil War - Rosenkriege',
			metaDescription: 'Rosenkriege - Eine musikalische Reise durch die mittelalterliche Geschichte von Uncivil War',
			imageCaption: '„Das Pflücken der roten und weißen Rosen" von Henry Payne (1908) - zeigt die legendäre Szene im Temple Garden, wo Adlige ihre Seite wählten',
			artistName: 'Uncivil War',
			albumTitle: 'Rosenkriege',
			albumSubtitle: 'Ein Konzeptalbum • 21 Lieder',
			albumDescription: 'Erleben Sie Englands blutigsten Bürgerkrieg durch Musik. Dieses Konzeptalbum erzählt die vollständige Geschichte der Rosenkriege (1455-1487) — des brutalen 30-jährigen Konflikts zwischen dem Haus Lancaster und dem Haus York, der das mittelalterliche England zerriss und mit dem Aufstieg der Tudor-Dynastie endete.',
			listenButton: 'Zu den Liedern',
			exploreButton: 'Zur Enzyklopädie'
		},
		// Songs page
		songs: {
			pageTitle: 'Lieder - Rosenkriege',
			title: 'Rosenkriege',
			subtitle: 'Vollständige Titelliste',
			tracks: 'Titel',
			albumDescription: 'Eine epische musikalische Reise durch Englands brutalsten Bürgerkrieg. Jedes Lied dokumentiert einen entscheidenden Moment im dreißigjährigen Konflikt zwischen den Häusern Lancaster und York.',
			downloadAlbum: 'Album herunterladen',
			downloadDescription: 'Laden Sie das komplette Album zum Offline-Hören herunter',
			downloadButton: 'Komplettes Album herunterladen (ZIP)',
			aboutAlbum: 'Über dieses Album',
			aboutDescription: 'Rosenkriege vereint kraftvolle Metal-Klanglandschaften mit historisch akkurater Erzählung. Jeder Track wird von detailliertem historischen Kontext, interaktiven Karten und vollständigen Texten begleitet, um Sie in den mittelalterlichen Konflikt eintauchen zu lassen, der England prägte.'
		},
		// Song detail page
		song: {
			backToSongs: '← Zurück zu allen Liedern',
			track: 'Titel',
			lyrics: 'Liedtext',
			historicalContext: 'Historischer Kontext',
			keyFigures: 'Schlüsselfiguren',
			previousSong: '← Vorheriges Lied',
			nextSong: 'Nächstes Lied →'
		},
		// Encyclopedia page
		encyclopedia: {
			pageTitle: 'Enzyklopädie - Rosenkriege',
			title: 'Enzyklopädie der Kriege',
			subtitle: 'Personen, Orte und Ereignisse, die Englands blutigsten Konflikt prägten',
			overview: 'Überblick',
			readFullOverview: 'Vollständigen Überblick lesen →',
			mapCaption: 'Wichtige Schlachtfelder in England',
			timelineSection: 'Interaktive Zeitleiste',
			timelineDescription: 'Folgen Sie der chronologischen Reise durch die Rosenkriege, von der ersten Schlacht bei St. Albans bis zum endgültigen Sieg der Tudors.',
			viewTimeline: 'Zur vollständigen Zeitleiste →',
			people: 'Personen',
			events: 'Schlachten & Ereignisse',
			places: 'Orte',
			concepts: 'Konzepte',
			viewOnTimeline: 'In Zeitleiste anzeigen →',
			relatedEntries: 'Verwandte Einträge',
			timelineEvents: 'Zeitleisten-Ereignisse',
			location: 'Ort'
		},
		// Timeline page
		timeline: {
			pageTitle: 'Zeitleiste - Rosenkriege',
			title: 'Zeitleiste der Kriege',
			subtitle: 'Eine chronologische Reise durch die Rosenkriege (1455-1487)',
			keyFigures: 'Schlüsselfiguren:',
			locations: 'Orte:',
			viewFullTimeline: '← Zur vollständigen Zeitleiste',
			timelineEvent: 'Zeitleisten-Ereignis'
		},
		// Download page
		download: {
			pageTitle: 'Download - Rosenkriege',
			title: 'Album herunterladen',
			subtitle: 'Erleben Sie die vollständige Rosenkriege-Erfahrung',
			fullAlbum: 'Komplettes Album',
			fullAlbumDescription: 'Laden Sie das komplette Rosenkriege-Album als ZIP-Datei mit allen Titeln in hochwertiger MP3-Qualität herunter.',
			feature1: '22 hochwertige MP3-Titel',
			feature2: 'Vollständige Rosenkriege-Geschichte',
			feature3: 'Bonus: Virgin Queen Vorschau-Track',
			downloadButton: 'Komplettes Album herunterladen (ZIP)',
			individualTracks: 'Einzelne Titel',
			individualDescription: 'Laden Sie einzelne Lieder herunter',
			view: 'Ansehen',
			downloadTrack: 'Herunterladen'
		},
		// About page
		about: {
			pageTitle: 'Über uns - Uncivil War',
			title: 'Über Uncivil War',
			tagline: 'Wo Geschichte auf Heavy Metal trifft',
			albumSection: 'Das Album',
			albumText: 'Rosenkriege ist ein Konzeptalbum, das die vollständige Geschichte von Englands blutigstem Bürgerkrieg in 21 Originalliedern erzählt. Jeder Track dokumentiert einen entscheidenden Moment im dreißigjährigen Konflikt zwischen den Häusern Lancaster und York.',
			warsSection: 'Die Rosenkriege (1455-1487)',
			warsText: 'Die Rosenkriege waren eine Reihe brutaler Bürgerkriege zwischen zwei Zweigen des königlichen Hauses Plantagenet: dem Haus Lancaster (symbolisiert durch eine rote Rose) und dem Haus York (symbolisiert durch eine weiße Rose). Der Konflikt begann, als Richard, Herzog von York, die schwache Herrschaft von König Heinrich VI. in Frage stellte.',
			bandSection: 'Über die Band',
			quote: '„Wir glauben, dass Geschichte es verdient, in Erinnerung zu bleiben, und was gibt es Besseres als die Kraft der Musik?"',
			experienceSection: 'Erleben Sie das Album',
			fullAlbum: 'Komplettes Album',
			fullAlbumDesc: '21 Originaltitel',
			completeLyrics: 'Vollständige Texte',
			completeLyricsDesc: 'Jedes Wort, jede Strophe',
			historicalContext: 'Historischer Kontext',
			historicalContextDesc: 'Tief in die Geschichte',
			interactiveMaps: 'Interaktive Karten',
			interactiveMapsDesc: 'Erkunden Sie die Orte',
			ctaTitle: 'Bereit für die Reise?',
			ctaButton: 'Zu den Liedern'
		},
		// Common
		common: {
			loading: 'Laden...',
			error: 'Fehler',
			notFound: 'Nicht gefunden'
		}
	}
};

// Helper function to get translation
export function t(key: string, lang?: Language): string {
	const currentLang = lang || get(language);
	const keys = key.split('.');
	let result: any = translations[currentLang];

	for (const k of keys) {
		if (result && typeof result === 'object' && k in result) {
			result = result[k];
		} else {
			// Fallback to English if key not found
			result = translations.en;
			for (const k2 of keys) {
				if (result && typeof result === 'object' && k2 in result) {
					result = result[k2];
				} else {
					return key; // Return key if not found
				}
			}
			break;
		}
	}

	return typeof result === 'string' ? result : key;
}

// Create a derived store for current translations
export const currentTranslations = derived(language, ($language) => translations[$language]);
