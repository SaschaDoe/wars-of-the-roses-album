export interface TimelineEvent {
	year: string;
	month?: string;
	title: string;
	description: string;
	people?: { name: string; id: string }[];
	places?: { name: string; id: string }[];
	relatedEvents?: { name: string; id: string }[];
}

export const timelineEvents: TimelineEvent[] = [
	{
		year: '1455',
		month: 'May 22',
		title: 'First Battle of St. Albans',
		description: 'The Wars begin when the Duke of York and his ally Warwick ambush the royal forces. King Henry VI is wounded and captured, marking the first blood of the conflict.',
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
		description: 'Warwick defeats the Lancastrian forces and captures King Henry VI again. Queen Margaret flees north with Prince Edward.',
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
		description: 'Richard Duke of York is killed in battle. His head, wearing a paper crown, is displayed on the gates of York. His son Edward inherits the Yorkist claim.',
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
		description: 'The bloodiest battle ever fought on English soil. In a blinding snowstorm, over 28,000 men die. Edward IV crushes the Lancastrians and secures the throne.',
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
		description: 'Edward IV secretly marries Elizabeth Woodville, a commoner widow. This enrages Warwick, who was negotiating a French marriage alliance, and plants the seeds of future betrayal.',
		people: [
			{ name: 'Edward IV', id: 'edward-iv' },
			{ name: 'Richard Neville (Warwick)', id: 'warwick' }
		],
		places: []
	},
	{
		year: '1469',
		title: "Warwick's Rebellion",
		description: 'Warwick the Kingmaker rebels against Edward IV, defeats his forces, and captures the king. But without noble support, Warwick is forced to release Edward.',
		people: [
			{ name: 'Richard Neville (Warwick)', id: 'warwick' },
			{ name: 'Edward IV', id: 'edward-iv' }
		],
		places: []
	},
	{
		year: '1470',
		title: 'The Readeption of Henry VI',
		description: 'Warwick switches sides, allies with his former enemy Margaret of Anjou, and restores Henry VI to the throne. Edward IV flees to Burgundy.',
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
		description: 'Edward IV returns and defeats Warwick in thick fog. The Kingmaker dies in battle, ending his decades of king-making and king-breaking.',
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
		description: 'Edward IV destroys the Lancastrian forces. Prince Edward, son of Henry VI and Margaret, is killed. Margaret is captured, and the Lancastrian line is broken.',
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
		description: "Henry VI dies in the Tower of London, almost certainly murdered on Edward IV's orders. The House of Lancaster's claim dies with him.",
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
		description: 'Edward IV dies unexpectedly, leaving his 12-year-old son Edward V as king. His brother Richard, Duke of Gloucester, becomes Lord Protector.',
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
		description: 'Richard III declares his nephews illegitimate and takes the throne. The young Edward V and his brother disappear into the Tower of London, never to be seen again.',
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
		description: 'Henry Tudor defeats and kills Richard III. Richard dies fighting, the last English king to die in battle. Henry VII takes the crown and founds the Tudor dynasty.',
		people: [
			{ name: 'Richard III', id: 'richard-iii' }
		],
		places: []
	},
	{
		year: '1486',
		title: 'The Tudor Rose',
		description: 'Henry VII marries Elizabeth of York, uniting the two houses. The Tudor Rose, combining red and white roses, symbolizes the end of the conflict.',
		people: [],
		places: []
	},
	{
		year: '1487',
		month: 'June 16',
		title: 'Battle of Stoke Field',
		description: 'The final battle of the Wars. Henry VII defeats a Yorkist rebellion led by Lambert Simnel, pretender to the throne. The Wars of the Roses truly end.',
		people: [],
		places: []
	}
];
