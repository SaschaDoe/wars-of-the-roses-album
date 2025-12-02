export interface TimelineEvent {
	year: string;
	month?: string;
	title: string;
	titleDe: string;
	description: string;
	descriptionDe: string;
	people?: { name: string; id: string }[];
	places?: { name: string; id: string }[];
	relatedEvents?: { name: string; id: string }[];
}

export const timelineEvents: TimelineEvent[] = [
	{
		year: '1455',
		month: 'May 22',
		title: 'First Battle of St. Albans',
		titleDe: 'Erste Schlacht von St. Albans',
		description: 'The Wars begin when the Duke of York and his ally Warwick ambush the royal forces. King Henry VI is wounded and captured, marking the first blood of the conflict.',
		descriptionDe: 'Die Kriege beginnen, als der Herzog von York und sein Verbündeter Warwick die königlichen Truppen überfallen. König Heinrich VI. wird verwundet und gefangen genommen – das erste Blutvergießen des Konflikts.',
		people: [
			{ name: 'Henry VI', id: 'henry-vi' },
			{ name: 'Richard, Duke of York', id: 'richard-duke-of-york' },
			{ name: 'Richard Neville (Warwick)', id: 'warwick' }
		],
		places: [
			{ name: 'St. Albans', id: 'st-albans' }
		]
	},
	{
		year: '1460',
		month: 'July 10',
		title: 'Battle of Northampton',
		titleDe: 'Schlacht von Northampton',
		description: 'Warwick defeats the Lancastrian forces and captures King Henry VI again. Queen Margaret flees north with Prince Edward.',
		descriptionDe: 'Warwick besiegt die Lancaster-Truppen und nimmt König Heinrich VI. erneut gefangen. Königin Margaret flieht mit Prinz Edward nach Norden.',
		people: [
			{ name: 'Henry VI', id: 'henry-vi' },
			{ name: 'Margaret of Anjou', id: 'margaret-of-anjou' },
			{ name: 'Richard Neville (Warwick)', id: 'warwick' }
		],
		places: []
	},
	{
		year: '1460',
		month: 'December 30',
		title: 'Battle of Wakefield',
		titleDe: 'Schlacht von Wakefield',
		description: 'Richard Duke of York is killed in battle. His head, wearing a paper crown, is displayed on the gates of York. His son Edward inherits the Yorkist claim.',
		descriptionDe: 'Richard, Herzog von York, fällt in der Schlacht. Sein Kopf wird mit einer Papierkrone auf den Toren von York zur Schau gestellt. Sein Sohn Edward erbt den Anspruch der Yorkisten.',
		people: [
			{ name: 'Richard, Duke of York', id: 'richard-duke-of-york' },
			{ name: 'Margaret of Anjou', id: 'margaret-of-anjou' },
			{ name: 'Edward IV', id: 'edward-iv' }
		],
		places: []
	},
	{
		year: '1461',
		month: 'March 29',
		title: 'Battle of Towton',
		titleDe: 'Schlacht von Towton',
		description: 'The bloodiest battle ever fought on English soil. In a blinding snowstorm, over 28,000 men die. Edward IV crushes the Lancastrians and secures the throne.',
		descriptionDe: 'Die blutigste Schlacht, die je auf englischem Boden ausgetragen wurde. In einem blendenden Schneesturm sterben über 28.000 Männer. Eduard IV. vernichtet die Lancastrianer und sichert sich den Thron.',
		people: [
			{ name: 'Edward IV', id: 'edward-iv' },
			{ name: 'Margaret of Anjou', id: 'margaret-of-anjou' },
			{ name: 'Richard Neville (Warwick)', id: 'warwick' }
		],
		places: []
	},
	{
		year: '1464',
		title: "Edward IV's Secret Marriage",
		titleDe: 'Eduards IV. geheime Heirat',
		description: 'Edward IV secretly marries Elizabeth Woodville, a commoner widow. This enrages Warwick, who was negotiating a French marriage alliance, and plants the seeds of future betrayal.',
		descriptionDe: 'Eduard IV. heiratet heimlich Elizabeth Woodville, eine bürgerliche Witwe. Dies erzürnt Warwick, der gerade eine französische Heiratsallianz verhandelte, und legt den Grundstein für künftigen Verrat.',
		people: [
			{ name: 'Edward IV', id: 'edward-iv' },
			{ name: 'Richard Neville (Warwick)', id: 'warwick' }
		],
		places: []
	},
	{
		year: '1469',
		title: "Warwick's Rebellion",
		titleDe: 'Warwicks Rebellion',
		description: 'Warwick the Kingmaker rebels against Edward IV, defeats his forces, and captures the king. But without noble support, Warwick is forced to release Edward.',
		descriptionDe: 'Warwick der Königsmacher rebelliert gegen Eduard IV., besiegt seine Truppen und nimmt den König gefangen. Doch ohne Unterstützung des Adels ist Warwick gezwungen, Edward freizulassen.',
		people: [
			{ name: 'Richard Neville (Warwick)', id: 'warwick' },
			{ name: 'Edward IV', id: 'edward-iv' }
		],
		places: []
	},
	{
		year: '1470',
		title: 'The Readeption of Henry VI',
		titleDe: 'Die Wiedereinsetzung Heinrichs VI.',
		description: 'Warwick switches sides, allies with his former enemy Margaret of Anjou, and restores Henry VI to the throne. Edward IV flees to Burgundy.',
		descriptionDe: 'Warwick wechselt die Seiten, verbündet sich mit seiner ehemaligen Feindin Margaret von Anjou und setzt Heinrich VI. wieder auf den Thron. Eduard IV. flieht nach Burgund.',
		people: [
			{ name: 'Richard Neville (Warwick)', id: 'warwick' },
			{ name: 'Henry VI', id: 'henry-vi' },
			{ name: 'Margaret of Anjou', id: 'margaret-of-anjou' },
			{ name: 'Edward IV', id: 'edward-iv' }
		],
		places: []
	},
	{
		year: '1471',
		month: 'April 14',
		title: 'Battle of Barnet',
		titleDe: 'Schlacht von Barnet',
		description: 'Edward IV returns and defeats Warwick in thick fog. The Kingmaker dies in battle, ending his decades of king-making and king-breaking.',
		descriptionDe: 'Eduard IV. kehrt zurück und besiegt Warwick im dichten Nebel. Der Königsmacher fällt in der Schlacht und beendet damit seine jahrzehntelange Rolle als Königsmacher.',
		people: [
			{ name: 'Edward IV', id: 'edward-iv' },
			{ name: 'Richard Neville (Warwick)', id: 'warwick' }
		],
		places: []
	},
	{
		year: '1471',
		month: 'May 4',
		title: 'Battle of Tewkesbury',
		titleDe: 'Schlacht von Tewkesbury',
		description: 'Edward IV destroys the Lancastrian forces. Prince Edward, son of Henry VI and Margaret, is killed. Margaret is captured, and the Lancastrian line is broken.',
		descriptionDe: 'Eduard IV. vernichtet die Lancaster-Truppen. Prinz Edward, Sohn von Heinrich VI. und Margaret, wird getötet. Margaret wird gefangen genommen, und die Lancaster-Linie ist gebrochen.',
		people: [
			{ name: 'Edward IV', id: 'edward-iv' },
			{ name: 'Margaret of Anjou', id: 'margaret-of-anjou' }
		],
		places: []
	},
	{
		year: '1471',
		month: 'May 21',
		title: 'Death of Henry VI',
		titleDe: 'Tod Heinrichs VI.',
		description: "Henry VI dies in the Tower of London, almost certainly murdered on Edward IV's orders. The House of Lancaster's claim dies with him.",
		descriptionDe: 'Heinrich VI. stirbt im Tower von London, fast sicher auf Befehl Eduards IV. ermordet. Mit ihm stirbt der Anspruch des Hauses Lancaster.',
		people: [
			{ name: 'Henry VI', id: 'henry-vi' },
			{ name: 'Edward IV', id: 'edward-iv' }
		],
		places: [
			{ name: 'Tower of London', id: 'tower-of-london' }
		]
	},
	{
		year: '1483',
		month: 'April 9',
		title: 'Death of Edward IV',
		titleDe: 'Tod Eduards IV.',
		description: 'Edward IV dies unexpectedly, leaving his 12-year-old son Edward V as king. His brother Richard, Duke of Gloucester, becomes Lord Protector.',
		descriptionDe: 'Eduard IV. stirbt unerwartet und hinterlässt seinen 12-jährigen Sohn Edward V. als König. Sein Bruder Richard, Herzog von Gloucester, wird Lordprotektor.',
		people: [
			{ name: 'Edward IV', id: 'edward-iv' },
			{ name: 'Richard III', id: 'richard-iii' }
		],
		places: []
	},
	{
		year: '1483',
		month: 'June',
		title: 'The Princes in the Tower',
		titleDe: 'Die Prinzen im Tower',
		description: 'Richard III declares his nephews illegitimate and takes the throne. The young Edward V and his brother disappear into the Tower of London, never to be seen again.',
		descriptionDe: 'Richard III. erklärt seine Neffen für illegitim und übernimmt den Thron. Der junge Edward V. und sein Bruder verschwinden im Tower von London und werden nie wieder gesehen.',
		people: [
			{ name: 'Richard III', id: 'richard-iii' }
		],
		places: [
			{ name: 'Tower of London', id: 'tower-of-london' }
		]
	},
	{
		year: '1485',
		month: 'August 22',
		title: 'Battle of Bosworth Field',
		titleDe: 'Schlacht von Bosworth Field',
		description: 'Henry Tudor defeats and kills Richard III. Richard dies fighting, the last English king to die in battle. Henry VII takes the crown and founds the Tudor dynasty.',
		descriptionDe: 'Heinrich Tudor besiegt und tötet Richard III. Richard stirbt kämpfend als letzter englischer König, der in einer Schlacht fällt. Heinrich VII. übernimmt die Krone und gründet die Tudor-Dynastie.',
		people: [
			{ name: 'Richard III', id: 'richard-iii' }
		],
		places: []
	},
	{
		year: '1486',
		title: 'The Tudor Rose',
		titleDe: 'Die Tudor-Rose',
		description: 'Henry VII marries Elizabeth of York, uniting the two houses. The Tudor Rose, combining red and white roses, symbolizes the end of the conflict.',
		descriptionDe: 'Heinrich VII. heiratet Elizabeth von York und vereint die beiden Häuser. Die Tudor-Rose, die rote und weiße Rosen vereint, symbolisiert das Ende des Konflikts.',
		people: [],
		places: []
	},
	{
		year: '1487',
		month: 'June 16',
		title: 'Battle of Stoke Field',
		titleDe: 'Schlacht von Stoke Field',
		description: 'The final battle of the Wars. Henry VII defeats a Yorkist rebellion led by Lambert Simnel, pretender to the throne. The Wars of the Roses truly end.',
		descriptionDe: 'Die letzte Schlacht der Kriege. Heinrich VII. besiegt eine yorkistische Rebellion unter der Führung von Lambert Simnel, einem Thronprätendenten. Die Rosenkriege enden endgültig.',
		people: [],
		places: []
	}
];
