export interface Album {
	id: string;
	slug: string;
	title: string;
	titleDe: string;
	subtitle: string;
	subtitleDe: string;
	description: string;
	descriptionDe: string;
	year: string;
	trackCount: number;
	coverImage: string;
	theme: {
		accentColor: string;
		gradientFrom: string;
		gradientTo: string;
	};
	historicalPeriod: string;
	historicalPeriodDe: string;
	hasEncyclopedia: boolean;
	hasTimeline: boolean;
	downloadUrl?: string;
}

export const albums: Album[] = [
	{
		id: 'wars-of-the-roses',
		slug: 'wars-of-the-roses',
		title: 'Wars of the Roses',
		titleDe: 'Rosenkriege',
		subtitle: 'A Concept Album',
		subtitleDe: 'Ein Konzeptalbum',
		description: "Experience England's bloodiest civil war through music. This concept album tells the complete story of the Wars of the Roses (1455-1487) — the brutal 30-year conflict between the House of Lancaster and the House of York that tore medieval England apart and ended with the rise of the Tudor dynasty.",
		descriptionDe: "Erleben Sie Englands blutigsten Bürgerkrieg durch Musik. Dieses Konzeptalbum erzählt die vollständige Geschichte der Rosenkriege (1455-1487) — des brutalen 30-jährigen Konflikts zwischen dem Haus Lancaster und dem Haus York, der das mittelalterliche England zerriss und mit dem Aufstieg der Tudor-Dynastie endete.",
		year: '2025',
		trackCount: 23,
		coverImage: '/images/albums/wars-of-the-roses/cover.jpg',
		theme: {
			accentColor: '#8b0000',
			gradientFrom: 'rgba(139, 0, 0, 0.1)',
			gradientTo: 'rgba(212, 175, 55, 0.05)'
		},
		historicalPeriod: '1455-1487',
		historicalPeriodDe: '1455-1487',
		hasEncyclopedia: true,
		hasTimeline: true,
		downloadUrl: 'https://pub-b01755924f3846e0904075a05c92bf74.r2.dev/WarsOfTheRoses/Wars%20of%20the%20Roses.zip'
	},
	{
		id: 'a-hundred-years-of-glory',
		slug: 'a-hundred-years-of-glory',
		title: 'A Hundred Years of Glory',
		titleDe: 'Hundert Jahre Ruhm',
		subtitle: 'A Concept Album',
		subtitleDe: 'Ein Konzeptalbum',
		description: "Journey through the epic Hundred Years' War between England and France. From the legendary victories at Crécy and Agincourt to the inspiring story of Jeanne d'Arc, this album chronicles the rise and fall of empires, the clash of knights and longbowmen, and the technological revolution that changed warfare forever.",
		descriptionDe: "Eine Reise durch den epischen Hundertjährigen Krieg zwischen England und Frankreich. Von den legendären Siegen bei Crécy und Agincourt bis zur inspirierenden Geschichte von Jeanne d'Arc erzählt dieses Album vom Aufstieg und Fall von Imperien, dem Aufeinandertreffen von Rittern und Langbogenschützen und der technologischen Revolution, die die Kriegsführung für immer veränderte.",
		year: '2024',
		trackCount: 13,
		coverImage: '/images/albums/a-hundred-years-of-glory/cover.jpg',
		theme: {
			accentColor: '#1a4480',
			gradientFrom: 'rgba(26, 68, 128, 0.1)',
			gradientTo: 'rgba(212, 175, 55, 0.05)'
		},
		historicalPeriod: '1337-1453',
		historicalPeriodDe: '1337-1453',
		hasEncyclopedia: false,
		hasTimeline: false,
		downloadUrl: 'https://pub-b01755924f3846e0904075a05c92bf74.r2.dev/AHundredYearsOfGlory/A%20Hundred%20Years%20of%20Glory.zip'
	}
];

export function getAlbumBySlug(slug: string): Album | undefined {
	return albums.find(album => album.slug === slug);
}

export function getAlbumById(id: string): Album | undefined {
	return albums.find(album => album.id === id);
}
