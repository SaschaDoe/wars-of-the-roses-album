export interface EncyclopediaEntry {
	id: string;
	title: string;
	type: 'person' | 'place' | 'concept' | 'event';
	shortDescription: string;
	fullDescription: string;
	dates?: string;
	location?: {
		name: string;
		coordinates: {
			lat: number;
			lng: number;
		};
	};
	relatedEntries?: string[];
	imageUrl?: string;
}

export const encyclopediaEntries: Record<string, EncyclopediaEntry> = {
	'henry-vi': {
		id: 'henry-vi',
		title: 'King Henry VI',
		type: 'person',
		dates: '1421-1471',
		shortDescription: 'Lancastrian king whose mental illness sparked the Wars of the Roses',
		fullDescription: `Henry VI became King of England at nine months old in 1422 and inherited the French throne shortly after. Despite this promising start, he proved to be England's most unsuccessful medieval monarch. Gentle, pious, and scholarly by nature, Henry was utterly unsuited for the brutal politics of his age. He suffered from severe mental illness (possibly catatonic schizophrenia), experiencing his first breakdown in 1453. During these episodes, he was completely unresponsive for months at a time. His incapacity created a power vacuum that his strong-willed wife Margaret of Anjou filled, leading noble factions to compete for control. Henry's weakness lost England all its French territories except Calais, bankrupted the crown, and ultimately triggered the civil war. After the Yorkist victory, he was imprisoned in the Tower of London, briefly restored to the throne in 1470, then murdered in 1471, likely on Edward IV's orders.`,
		relatedEntries: ['margaret-of-anjou', 'edward-iv', 'richard-duke-of-york', 'tower-of-london']
	},
	'richard-duke-of-york': {
		id: 'richard-duke-of-york',
		title: 'Richard, Duke of York',
		type: 'person',
		dates: '1411-1460',
		shortDescription: 'Yorkist claimant to the throne, father of Edward IV and Richard III',
		fullDescription: `Richard Plantagenet, 3rd Duke of York, had a better claim to the English throne than King Henry VI through his descent from Edward III. Wealthy, capable, and ambitious, York served as Lieutenant of Ireland and Protector of England during Henry's mental breakdowns. However, Queen Margaret and the Duke of Somerset repeatedly blocked his rightful place in government. York's frustration led him to take up arms in 1455, beginning the Wars of the Roses. After victory at Northampton in 1460, he openly claimed the throne, but was forced to accept a compromise: Henry would remain king, but York would inherit after him. This disinherited Prince Edward, enraging Queen Margaret. York was killed at the Battle of Wakefield in December 1460, and his head was displayed on the gates of York wearing a paper crown in mockery. His death transformed the conflict—his son Edward avenged him by seizing the throne as Edward IV.`,
		relatedEntries: ['edward-iv', 'richard-iii', 'margaret-of-anjou', 'battle-of-wakefield']
	},
	'margaret-of-anjou': {
		id: 'margaret-of-anjou',
		title: 'Queen Margaret of Anjou',
		type: 'person',
		dates: '1430-1482',
		shortDescription: 'The "She-Wolf of France," fierce Lancastrian leader',
		fullDescription: `Margaret of Anjou, daughter of René of Anjou, married Henry VI in 1445 at age 15. She arrived in England as part of a peace treaty that cost England the territory of Maine. As Henry's mental health deteriorated, Margaret transformed from French princess to England's de facto ruler. She personally led armies, formed alliances, and fought with relentless determination to protect her son Edward's inheritance. The Yorkists called her the "She-Wolf of France"—a gendered insult for a woman who dared exercise military and political power. Margaret won victories at Wakefield and St Albans, but hesitation before London cost her the crown. After devastating defeats at Towton and Tewkesbury (where her son was killed), she was captured and imprisoned. Edward IV eventually ransomed her back to France, where she died in poverty in 1482. History remembers her as one of medieval England's most formidable women.`,
		relatedEntries: ['henry-vi', 'edward-of-westminster', 'richard-duke-of-york', 'battle-of-tewkesbury']
	},
	'warwick-the-kingmaker': {
		id: 'warwick-the-kingmaker',
		title: 'Richard Neville, Earl of Warwick ("The Kingmaker")',
		type: 'person',
		dates: '1428-1471',
		shortDescription: 'The most powerful English noble, who made and broke kings',
		fullDescription: `Richard Neville inherited the title Earl of Warwick through marriage, becoming the wealthiest and most powerful nobleman in England. A brilliant military commander and master politician, he earned the nickname "Kingmaker" for his role in deposing Henry VI and crowning Edward IV. Warwick commanded forces at nearly every major battle of the wars, winning St Albans, Northampton, and Towton. But Edward IV's secret marriage to Elizabeth Woodville and the king's growing independence infuriated Warwick. In an unprecedented betrayal, Warwick allied with his former enemy Queen Margaret, deposed Edward, and briefly restored Henry VI in 1470. When Edward returned, Warwick was killed at the Battle of Barnet in 1471, killed trying to reach his horse. His death ended the age of over-mighty nobles who could challenge royal power. Shakespeare later immortalized him as the archetypal power broker.`,
		relatedEntries: ['edward-iv', 'margaret-of-anjou', 'battle-of-barnet', 'george-duke-of-clarence']
	},
	'edward-iv': {
		id: 'edward-iv',
		title: 'King Edward IV',
		type: 'person',
		dates: '1442-1483',
		shortDescription: 'Tall, handsome Yorkist warrior-king who won the throne at 18',
		fullDescription: `Edward of York became Earl of March at 18 when his father was killed at Wakefield. After witnessing the parhelion at Mortimer's Cross, he crushed the Lancastrians at Towton and was crowned Edward IV in 1461. At 6'4", he was one of England's tallest kings, and contemporary accounts praise his good looks and charm. A capable military commander, Edward won his throne through battlefield prowess. However, his secret marriage to Elizabeth Woodville in 1464 alienated Warwick and split the Yorkist faction. Briefly deposed in 1470 when Warwick and Margaret allied, Edward returned to win decisive victories at Barnet and Tewkesbury. His second reign (1471-1483) brought peace and prosperity. But Edward's indulgent lifestyle—heavy drinking and overeating—ruined his health. He died unexpectedly in 1483 at 40, leaving the throne to his 12-year-old son Edward V, setting the stage for Richard III's usurpation.`,
		relatedEntries: ['elizabeth-woodville', 'warwick-the-kingmaker', 'richard-iii', 'battle-of-towton']
	},
	'richard-iii': {
		id: 'richard-iii',
		title: 'King Richard III',
		type: 'person',
		dates: '1452-1485',
		shortDescription: 'The last Plantagenet king, immortalized as Shakespeare\'s villain',
		fullDescription: `Richard, youngest son of Richard Duke of York and brother to Edward IV, served loyally during Edward's reign, governing northern England effectively. When Edward died in 1483, Richard was named Protector for 12-year-old Edward V. Within months, Richard declared Edward's children illegitimate, imprisoned them in the Tower of London, and took the throne himself. The "Princes in the Tower" disappeared, and Richard was widely suspected of murdering them, though no proof exists. His 26-month reign saw rebellions and plots. At the Battle of Bosworth Field in 1485, Richard was killed fighting Henry Tudor, reportedly crying "A horse! A horse! My kingdom for a horse!" Richard's reputation as a villain stems largely from Tudor propaganda and Shakespeare's play, which depicted him as a hunchbacked murderer. Modern historians debate whether he was truly monstrous or merely a pragmatic ruler in brutal times. His body, lost for centuries, was rediscovered under a Leicester car park in 2012.`,
		relatedEntries: ['edward-iv', 'princes-in-the-tower', 'henry-vii', 'battle-of-bosworth']
	},
	'henry-vii': {
		id: 'henry-vii',
		title: 'King Henry VII (Henry Tudor)',
		type: 'person',
		dates: '1457-1509',
		shortDescription: 'First Tudor king who ended the Wars of the Roses',
		fullDescription: `Henry Tudor had a distant claim to the throne through his mother Margaret Beaufort's Lancastrian lineage. He spent most of his youth in exile in Brittany and France, an unlikely candidate for kingship. But after Richard III's unpopular usurpation, Henry became the focus of Lancastrian hopes. He invaded England in 1485 with French backing, and defeated Richard at Bosworth Field when some of Richard's allies switched sides mid-battle. Henry's claim was weak, so he strengthened it by marrying Elizabeth of York, uniting the two houses. He proved to be a shrewd, cautious ruler who rebuilt royal finances, crushed noble power, and established the Tudor dynasty. Though not a warrior like Edward IV, Henry was an excellent administrator who gave England the stability it desperately needed. His son Henry VIII and granddaughter Elizabeth I would make the Tudors the most famous English royal dynasty.`,
		relatedEntries: ['elizabeth-of-york', 'richard-iii', 'battle-of-bosworth', 'tudor-rose']
	},
	'elizabeth-of-york': {
		id: 'elizabeth-of-york',
		title: 'Elizabeth of York',
		type: 'person',
		dates: '1466-1503',
		shortDescription: 'Yorkist princess who became first Tudor queen',
		fullDescription: `Elizabeth was the eldest daughter of Edward IV and Elizabeth Woodville. Born into the Yorkist royal family, her life was marked by upheaval: her father's deposition, restoration, and death; her brothers' disappearance in the Tower; her uncle Richard III's usurpation. Some historians suggest Richard III considered marrying Elizabeth himself after his wife died. Instead, Henry Tudor's victory at Bosworth made Elizabeth his prize. Their marriage on January 18, 1486, symbolically united Lancaster and York, creating the Tudor Rose emblem. Elizabeth was reportedly beautiful, gentle, and beloved by the people. She gave Henry seven children, including the future Henry VIII. Though politically important, she wielded little actual power compared to her fierce mother-in-law Margaret Beaufort. Elizabeth died in 1503 giving birth to her eighth child, predeceasing Henry VII by six years.`,
		relatedEntries: ['edward-iv', 'henry-vii', 'elizabeth-woodville', 'tudor-rose']
	},
	'elizabeth-woodville': {
		id: 'elizabeth-woodville',
		title: 'Elizabeth Woodville',
		type: 'person',
		dates: '1437-1492',
		shortDescription: 'Commoner widow who became Edward IV\'s controversial queen',
		fullDescription: `Elizabeth Woodville was a Lancastrian knight's widow with two sons when Edward IV fell in love with her. Their secret marriage in 1464 shocked England—kings didn't marry commoners, especially Lancastrian ones. Edward's elevation of the Woodville family to power infuriated Warwick and the old nobility. Accusations of witchcraft swirled around Elizabeth and her mother Jacquetta, who claimed descent from the water fairy Melusine. Despite the controversy, Elizabeth bore Edward ten children. When Edward died in 1483, Richard III declared her marriage invalid and her children bastards, seizing the throne. Her sons disappeared in the Tower. Elizabeth eventually supported Henry Tudor and saw her daughter become queen, but Richard III had confiscated her lands and she died in relative poverty in 1492.`,
		relatedEntries: ['edward-iv', 'warwick-the-kingmaker', 'richard-iii', 'princes-in-the-tower']
	},
	'st-albans': {
		id: 'st-albans',
		title: 'St Albans',
		type: 'place',
		shortDescription: 'Market town in Hertfordshire, site of two major battles',
		fullDescription: `St Albans, a prosperous market town north of London, witnessed two battles in the Wars of the Roses. The First Battle of St Albans (May 22, 1455) began the wars when Richard Duke of York's forces attacked King Henry VI's retinue in the town streets. Warwick led troops through gardens and narrow lanes to attack from unexpected angles. The battle lasted barely an hour but killed the Duke of Somerset and wounded the king. The Second Battle of St Albans (February 17, 1461) saw Queen Margaret defeat Warwick and rescue her husband King Henry. However, her army's pillaging made Londoners fear her, contributing to her decision not to march on the capital—a strategic error that cost her the throne.`,
		location: {
			name: 'St Albans, Hertfordshire',
			coordinates: { lat: 51.7519, lng: -0.3369 }
		},
		relatedEntries: ['warwick-the-kingmaker', 'richard-duke-of-york', 'margaret-of-anjou']
	},
	'battle-of-wakefield': {
		id: 'battle-of-wakefield',
		title: 'Battle of Wakefield',
		type: 'event',
		dates: 'December 30, 1460',
		shortDescription: 'Lancastrian victory where Richard Duke of York was killed',
		fullDescription: `On December 30, 1460, Richard Duke of York left the safety of Sandal Castle and was lured into battle by Lancastrian forces. Whether through overconfidence or deception, York found himself outnumbered and surrounded. He was killed in the fighting, along with his second son Edmund, Earl of Rutland. The Lancastrians cut off York's head and displayed it on the gates of York city, crowned with a paper crown in mockery of his royal ambitions. This act of cruelty became one of the war's most infamous moments. York's death appeared to end the Yorkist cause, but instead it galvanized his son Edward to pursue the throne with renewed determination, leading to Edward's victories at Mortimer's Cross and Towton.`,
		location: {
			name: 'Wakefield, Yorkshire',
			coordinates: { lat: 53.6830, lng: -1.4990 }
		},
		relatedEntries: ['richard-duke-of-york', 'edward-iv', 'margaret-of-anjou']
	},
	'battle-of-towton': {
		id: 'battle-of-towton',
		title: 'Battle of Towton',
		type: 'event',
		dates: 'March 29, 1461 (Palm Sunday)',
		shortDescription: 'The largest and bloodiest battle ever fought on English soil',
		fullDescription: `Fought in a blinding snowstorm on Palm Sunday 1461, Towton was medieval warfare at its most brutal. Between 50,000-80,000 men clashed for ten hours in the snow. A south wind gave the Yorkists a crucial advantage—their arrows flew farther while Lancastrian arrows fell short. The battle raged all day until the Duke of Norfolk's fresh troops broke the Lancastrian flank. The slaughter was immense: approximately 28,000 men died, roughly 1% of England's entire population. The Cock Beck stream became so clogged with bodies that survivors crossed on bridges made of corpses. Edward IV's decisive victory forced Henry VI to flee to Scotland and secured the Yorkist hold on the throne. Towton remains the bloodiest day in English history, a trauma that scarred the nation's psyche.`,
		location: {
			name: 'Towton, North Yorkshire',
			coordinates: { lat: 53.8333, lng: -1.2833 }
		},
		relatedEntries: ['edward-iv', 'henry-vi', 'margaret-of-anjou', 'warwick-the-kingmaker']
	},
	'battle-of-barnet': {
		id: 'battle-of-barnet',
		title: 'Battle of Barnet',
		type: 'event',
		dates: 'April 14, 1471 (Easter Sunday)',
		shortDescription: 'Edward IV\'s victory where Warwick the Kingmaker was killed',
		fullDescription: `On Easter Sunday 1471, Edward IV fought his former mentor Warwick the Kingmaker in thick fog at Barnet. Warwick had allied with Margaret of Anjou to restore Henry VI, forcing Edward to flee to Burgundy. But Edward returned with an army, confronting Warwick in conditions where visibility was nearly zero. Warwick's French cannons fired blindly into the mist, hitting nothing. Worse, when the Earl of Oxford's troops returned from pursuit, Warwick's forces mistook Oxford's star-and-streams banner for Edward's sun in the fog and fired on their own allies. The friendly fire incident broke Warwick's lines. Warwick, in full armor, tried to reach his horse to escape but was caught and killed. His death ended the age of over-mighty nobles who could challenge kings. Margaret of Anjou arrived in England the same day, learning of the disaster too late.`,
		location: {
			name: 'Barnet, Hertfordshire',
			coordinates: { lat: 51.6514, lng: -0.2013 }
		},
		relatedEntries: ['warwick-the-kingmaker', 'edward-iv', 'margaret-of-anjou', 'battle-of-tewkesbury']
	},
	'battle-of-bosworth': {
		id: 'battle-of-bosworth',
		title: 'Battle of Bosworth Field',
		type: 'event',
		dates: 'August 22, 1485',
		shortDescription: 'Henry Tudor\'s victory that ended the Wars of the Roses',
		fullDescription: `The Battle of Bosworth Field ended the Wars of the Roses and the Plantagenet dynasty. Richard III faced Henry Tudor's invasion force with a larger army, but his position was undermined by doubtful allies. During the battle, Lord Stanley and his brother (who commanded substantial forces) refused to commit to either side. When Richard spotted Henry's small bodyguard, he led a desperate cavalry charge to kill his rival personally. Richard fought bravely, reportedly killing Henry's standard-bearer, but Stanley's forces intervened on Henry's side. Richard was cut down, allegedly crying "Treason!" His crown was found on the battlefield and placed on Henry's head. Richard was the last English king to die in battle. His body was buried unceremoniously in Leicester and lost until archaeologists discovered it under a car park in 2012.`,
		location: {
			name: 'Bosworth Field, Leicestershire',
			coordinates: { lat: 52.6289, lng: -1.4094 }
		},
		relatedEntries: ['richard-iii', 'henry-vii', 'elizabeth-of-york', 'tudor-rose']
	},
	'house-of-lancaster': {
		id: 'house-of-lancaster',
		title: 'House of Lancaster',
		type: 'concept',
		shortDescription: 'The red rose faction descended from John of Gaunt',
		fullDescription: `The House of Lancaster was a cadet branch of the Plantagenet dynasty, descended from John of Gaunt, Duke of Lancaster, fourth son of Edward III. The Lancastrian kings—Henry IV, Henry V, and Henry VI—ruled England from 1399 to 1461. Their symbol was the red rose. Henry V's conquests in France made the dynasty glorious, but Henry VI's weakness brought it to ruin. The Lancastrian claim rested on direct male descent from Henry IV, but the line was fragile—by 1471, only Henry VI and his son Edward remained. After the deaths of both at Tewkesbury and in the Tower, the Lancastrian cause passed to Henry Tudor, whose claim came through his mother's family (the Beauforts) and was quite weak. Nevertheless, Henry VII's victory at Bosworth technically made him a Lancastrian king, though he quickly married into York to legitimize his rule.`,
		relatedEntries: ['house-of-york', 'henry-vi', 'henry-vii', 'tudor-rose']
	},
	'house-of-york': {
		id: 'house-of-york',
		title: 'House of York',
		type: 'concept',
		shortDescription: 'The white rose faction with strong claim through female descent',
		fullDescription: `The House of York descended from Edmund of Langley, Duke of York, fifth son of Edward III. But their claim to the throne came through Richard Duke of York's mother, Anne Mortimer, who descended from Edward III's second son. This gave York a better claim than Henry VI (who descended from the fourth son) if female descent counted—a controversial question. The Yorkist symbol was the white rose. Richard Duke of York began the wars to claim his rightful place, but it was his son Edward who took the throne as Edward IV in 1461. The Yorkist dynasty included Edward IV, his brief boy-king son Edward V, and Richard III. After Richard's death at Bosworth, the Yorkist cause largely ended, though Yorkist pretenders like Lambert Simnel and Perkin Warbeck troubled Henry VII's early reign. The white rose of York merged with Lancaster's red in the Tudor Rose.`,
		relatedEntries: ['house-of-lancaster', 'richard-duke-of-york', 'edward-iv', 'richard-iii']
	},
	'tudor-rose': {
		id: 'tudor-rose',
		title: 'The Tudor Rose',
		type: 'concept',
		shortDescription: 'Symbol combining Lancaster\'s red and York\'s white roses',
		fullDescription: `The Tudor Rose symbolized the union of Lancaster and York through Henry VII's marriage to Elizabeth of York in 1486. The emblem depicted a white rose (York) inside a red rose (Lancaster), sometimes shown as quartered white and red. This heraldic device became the defining symbol of the Tudor dynasty, representing the end of civil war and the beginning of a unified England. The actual Wars of the Roses weren't called that during the conflict—the term came from the Tudor period, popularized by Shakespeare. The rose badges themselves were rarely used as battlefield symbols, but became powerful propaganda tools afterward. The Tudor Rose appeared on buildings, coins, and artwork throughout the Tudor period, a constant reminder that the dynasty had brought peace by ending the wars between the roses.`,
		relatedEntries: ['henry-vii', 'elizabeth-of-york', 'house-of-lancaster', 'house-of-york']
	},
	'tower-of-london': {
		id: 'tower-of-london',
		title: 'Tower of London',
		type: 'place',
		shortDescription: 'Royal fortress, palace, and prison',
		fullDescription: `The Tower of London served as both royal residence and England's most notorious prison during the Wars of the Roses. Henry VI was imprisoned there after his deposition, briefly released when Warwick restored him, then murdered there in 1471 (allegedly by Richard Duke of Gloucester). The "Princes in the Tower"—Edward V and his brother Richard—were lodged there by their uncle Richard III and disappeared in 1483, likely murdered. Two child skeletons were discovered in the Tower in 1674 and presumed to be the princes. The Tower witnessed numerous executions during the wars, including several of Warwick's relatives. Its association with dark deeds made it a powerful symbol in Tudor propaganda.`,
		location: {
			name: 'Tower of London',
			coordinates: { lat: 51.5081, lng: -0.0759 }
		},
		relatedEntries: ['henry-vi', 'princes-in-the-tower', 'richard-iii', 'edward-iv']
	},
	'princes-in-the-tower': {
		id: 'princes-in-the-tower',
		title: 'The Princes in the Tower',
		type: 'event',
		dates: '1483',
		shortDescription: 'Edward V and his brother, who disappeared and were presumably murdered',
		fullDescription: `When Edward IV died in 1483, his 12-year-old son became Edward V. The boy-king and his younger brother Richard, Duke of York (age 9), were lodged in the Tower of London by their uncle Richard Duke of Gloucester (the Lord Protector). Within months, Gloucester declared the boys illegitimate on dubious grounds and took the throne as Richard III. The princes were seen less and less frequently and eventually disappeared entirely. They were almost certainly murdered, though the killer's identity remains uncertain. Tudor propaganda blamed Richard III, but some historians suggest others might have ordered the deed. In 1674, workmen found two child skeletons under a staircase in the Tower. They were assumed to be the princes and reburied in Westminster Abbey. The mystery of the Princes in the Tower remains one of history's most famous cold cases.`,
		relatedEntries: ['edward-iv', 'richard-iii', 'elizabeth-woodville', 'tower-of-london']
	},
	'george-duke-of-clarence': {
		id: 'george-duke-of-clarence',
		title: 'George, Duke of Clarence',
		type: 'person',
		dates: '1449-1478',
		shortDescription: 'Edward IV\'s treacherous brother, allegedly drowned in wine',
		fullDescription: `George, Duke of Clarence, was the middle brother between Edward IV and Richard III. Ambitious and easily swayed, George proved spectacularly disloyal. When Warwick the Kingmaker turned against Edward, George joined the rebellion and married Warwick's daughter Isabel. He even briefly supported restoring Henry VI. But when Warwick's cause faltered, George switched sides again, betraying his father-in-law at the Battle of Barnet. Edward forgave him, but George continued scheming. After Isabel's death, he accused one of her servants of poisoning her and had the woman executed without trial. When George began questioning the legitimacy of Edward's marriage and children, he went too far. Edward had him tried for treason and executed in 1478. Legend claims George chose to be drowned in a barrel of Malmsey wine—a death as theatrical as his life. Shakespeare immortalized him as the dream-haunted victim in Richard III.`,
		relatedEntries: ['edward-iv', 'richard-iii', 'warwick-the-kingmaker', 'battle-of-barnet']
	},
	'edward-of-westminster': {
		id: 'edward-of-westminster',
		title: 'Edward of Westminster, Prince of Wales',
		type: 'person',
		dates: '1453-1471',
		shortDescription: 'Henry VI\'s son, the last Lancastrian prince',
		fullDescription: `Edward of Westminster was the only son of Henry VI and Margaret of Anjou, born during his father's first mental breakdown in 1453. His birth should have secured the Lancastrian succession, but instead intensified the conflict—Richard Duke of York had been named heir, and Edward's arrival displaced him. Margaret fought ferociously to protect her son's inheritance, earning her "She-Wolf" reputation. Edward grew up in exile after the Yorkist victory at Towton, living in France under his mother's guidance. In 1470, he married Anne Neville (Warwick's daughter) to seal the Warwick-Lancaster alliance. When this alliance collapsed at Barnet and Tewkesbury, Edward's fate was sealed. He was killed at the Battle of Tewkesbury in 1471, either in battle or executed shortly after—sources disagree. His death ended the direct Lancastrian line and Margaret's hopes forever.`,
		relatedEntries: ['henry-vi', 'margaret-of-anjou', 'battle-of-tewkesbury', 'warwick-the-kingmaker']
	},
	'george-neville-archbishop': {
		id: 'george-neville-archbishop',
		title: 'George Neville, Archbishop of York',
		type: 'person',
		dates: '1432-1476',
		shortDescription: 'Warwick\'s brother who used religion to legitimize Edward IV',
		fullDescription: `George Neville was the younger brother of Warwick the Kingmaker and served as Archbishop of York from 1465. He played a crucial role in legitimizing Edward IV's claim to the throne. At St Paul's Cathedral, George preached sermons declaring that Henry VI had broken sacred oaths, thus forfeiting divine favor. He presided over Edward's coronation, using the full weight of religious ceremony to transform a usurper into God's anointed king. George hosted the most lavish feast in medieval English history at his enthronement as Archbishop. However, when Warwick turned against Edward, George followed his brother into rebellion. After Warwick's death at Barnet, George was arrested and stripped of his archbishopric. He died in 1476, impoverished and forgotten—a reminder that even princes of the Church could fall when they backed the wrong king.`,
		relatedEntries: ['warwick-the-kingmaker', 'edward-iv', 'henry-vi']
	},
	'jasper-tudor': {
		id: 'jasper-tudor',
		title: 'Jasper Tudor, Earl of Pembroke',
		type: 'person',
		dates: '1431-1495',
		shortDescription: 'Henry VII\'s uncle and lifelong protector',
		fullDescription: `Jasper Tudor was the half-brother of Henry VI (through their mother Catherine of Valois) and uncle to the future Henry VII. A steadfast Lancastrian, Jasper fought at nearly every major battle of the wars. After the Lancastrian defeats, he dedicated his life to protecting his nephew Henry Tudor. When Edward IV's forces threatened, Jasper fled with young Henry to Brittany, where they spent 14 years in exile. Jasper never wavered in his belief that Henry could claim the throne. He helped organize the 1485 invasion, fought at Bosworth Field, and lived to see his nephew crowned. Henry VII rewarded his uncle's loyalty by making him Duke of Bedford. Jasper died in 1495, having accomplished his life's mission: putting a Tudor on the English throne.`,
		relatedEntries: ['henry-vii', 'owen-tudor', 'henry-vi', 'battle-of-bosworth']
	},
	'owen-tudor': {
		id: 'owen-tudor',
		title: 'Owen Tudor',
		type: 'person',
		dates: 'c.1400-1461',
		shortDescription: 'Welsh courtier who secretly married a queen and founded a dynasty',
		fullDescription: `Owen Tudor was a Welsh courtier who achieved the impossible: he secretly married Catherine of Valois, the widow of Henry V and mother of Henry VI. This scandalous union produced Edmund and Jasper Tudor. Though Owen was no nobleman, his grandsons would include a king. Owen fought for Lancaster throughout the wars. At the Battle of Mortimer's Cross in 1461, he was captured by Edward IV's forces. Reportedly, Owen didn't believe he would be executed until the very moment the axe fell, supposedly saying "that head shall lie on the stock that was wont to lie on Queen Catherine's lap." His head was placed on the market cross, where a local woman combed his hair and lit candles around it. Owen's unlikely marriage created the Tudor bloodline that would eventually rule England.`,
		relatedEntries: ['jasper-tudor', 'henry-vii', 'battle-of-mortimers-cross']
	},
	'jacquetta-of-luxembourg': {
		id: 'jacquetta-of-luxembourg',
		title: 'Jacquetta of Luxembourg',
		type: 'person',
		dates: '1415-1472',
		shortDescription: 'Elizabeth Woodville\'s mother, accused of witchcraft',
		fullDescription: `Jacquetta of Luxembourg was one of the most remarkable women of the Wars of the Roses. First married to the Duke of Bedford (Henry V's brother), she scandalized the court by secretly marrying his squire, Richard Woodville, for love. Their daughter Elizabeth would become queen. Jacquetta claimed descent from Melusine, a water fairy from medieval legend, and this association haunted her family. When Edward IV secretly married Elizabeth, Warwick accused Jacquetta of using witchcraft to ensnare the king. She was formally charged with making lead images to bewitch Edward. Jacquetta successfully defended herself, but the accusations persisted. Her family's rapid rise from minor gentry to royal in-laws made them targets of resentment. Jacquetta died in 1472, but the witchcraft rumors followed the Woodvilles for generations.`,
		relatedEntries: ['elizabeth-woodville', 'edward-iv', 'warwick-the-kingmaker']
	},
	'battle-of-tewkesbury': {
		id: 'battle-of-tewkesbury',
		title: 'Battle of Tewkesbury',
		type: 'event',
		dates: 'May 4, 1471',
		shortDescription: 'The battle that destroyed the Lancastrian cause',
		fullDescription: `Three weeks after killing Warwick at Barnet, Edward IV faced Queen Margaret's army at Tewkesbury. Margaret had finally returned from France with her son Prince Edward, hoping to rally Lancastrian supporters in the west. But Edward IV moved with devastating speed, forcing battle before Margaret could gather more troops. The Lancastrian position was strong, but the Duke of Somerset's impetuous charge exposed his flank. Edward's forces routed the Lancastrians completely. Prince Edward of Westminster was killed—either in battle or executed shortly after, ending the direct Lancastrian line. Many Lancastrian nobles who fled into Tewkesbury Abbey were dragged out and executed. Margaret was captured and eventually ransomed to France. Tewkesbury ended the wars' second phase; only the threat of Henry Tudor remained.`,
		location: {
			name: 'Tewkesbury, Gloucestershire',
			coordinates: { lat: 51.9927, lng: -2.1603 }
		},
		relatedEntries: ['edward-iv', 'margaret-of-anjou', 'edward-of-westminster', 'battle-of-barnet']
	},
	'battle-of-mortimers-cross': {
		id: 'battle-of-mortimers-cross',
		title: "Battle of Mortimer's Cross",
		type: 'event',
		dates: 'February 2, 1461',
		shortDescription: 'Edward IV\'s first victory, marked by three suns in the sky',
		fullDescription: `Just weeks after his father's death at Wakefield, the young Edward of York won his first battle at Mortimer's Cross in Herefordshire. Before the battle, his frightened troops witnessed a parhelion—a rare atmospheric phenomenon where three suns appeared in the sky. Edward brilliantly declared this the Holy Trinity blessing their cause and adopted the "Sun in Splendour" as his badge. His army, inspired by the omen, crushed the Lancastrian force led by Jasper Tudor. Among those captured and executed was Owen Tudor, Jasper's father and grandfather of the future Henry VII. Owen reportedly didn't believe he would die until the axe was raised. The victory established Edward as a military commander in his own right and set him on the path to kingship.`,
		location: {
			name: "Mortimer's Cross, Herefordshire",
			coordinates: { lat: 52.2667, lng: -2.9167 }
		},
		relatedEntries: ['edward-iv', 'jasper-tudor', 'owen-tudor', 'richard-duke-of-york']
	}
};

// Terms to automatically link in historical context descriptions
export const linkableTerms: Record<string, string> = {
	'King Henry VI': 'henry-vi',
	'Henry VI': 'henry-vi',
	'Richard, Duke of York': 'richard-duke-of-york',
	'Duke of York': 'richard-duke-of-york',
	'Richard Duke of York': 'richard-duke-of-york',
	'Queen Margaret of Anjou': 'margaret-of-anjou',
	'Margaret of Anjou': 'margaret-of-anjou',
	'Queen Margaret': 'margaret-of-anjou',
	'Richard Neville, Earl of Warwick': 'warwick-the-kingmaker',
	'Earl of Warwick': 'warwick-the-kingmaker',
	'Warwick': 'warwick-the-kingmaker',
	'the Kingmaker': 'warwick-the-kingmaker',
	'Edward IV': 'edward-iv',
	'Richard III': 'richard-iii',
	'Henry VII': 'henry-vii',
	'Henry Tudor': 'henry-vii',
	'Elizabeth of York': 'elizabeth-of-york',
	'Elizabeth Woodville': 'elizabeth-woodville',
	'St Albans': 'st-albans',
	'Battle of Wakefield': 'battle-of-wakefield',
	'Wakefield': 'battle-of-wakefield',
	'Battle of Towton': 'battle-of-towton',
	'Towton': 'battle-of-towton',
	'Battle of Barnet': 'battle-of-barnet',
	'Barnet': 'battle-of-barnet',
	'Battle of Bosworth Field': 'battle-of-bosworth',
	'Bosworth Field': 'battle-of-bosworth',
	'Bosworth': 'battle-of-bosworth',
	'House of Lancaster': 'house-of-lancaster',
	'Lancaster': 'house-of-lancaster',
	'Lancastrian': 'house-of-lancaster',
	'House of York': 'house-of-york',
	'York': 'house-of-york',
	'Yorkist': 'house-of-york',
	'Tudor Rose': 'tudor-rose',
	'Tower of London': 'tower-of-london',
	'the Tower': 'tower-of-london',
	'Princes in the Tower': 'princes-in-the-tower',
	'George, Duke of Clarence': 'george-duke-of-clarence',
	'Duke of Clarence': 'george-duke-of-clarence',
	'Clarence': 'george-duke-of-clarence',
	'Edward of Westminster': 'edward-of-westminster',
	'Prince Edward of Westminster': 'edward-of-westminster',
	'George Neville': 'george-neville-archbishop',
	'Archbishop of York': 'george-neville-archbishop',
	'Jasper Tudor': 'jasper-tudor',
	'Earl of Pembroke': 'jasper-tudor',
	'Owen Tudor': 'owen-tudor',
	'Jacquetta of Luxembourg': 'jacquetta-of-luxembourg',
	'Jacquetta': 'jacquetta-of-luxembourg',
	'Battle of Tewkesbury': 'battle-of-tewkesbury',
	'Tewkesbury': 'battle-of-tewkesbury',
	"Battle of Mortimer's Cross": 'battle-of-mortimers-cross',
	"Mortimer's Cross": 'battle-of-mortimers-cross'
};

export function getEncyclopediaEntry(id: string): EncyclopediaEntry | undefined {
	return encyclopediaEntries[id];
}

export function getAllEntries(): EncyclopediaEntry[] {
	return Object.values(encyclopediaEntries);
}

export function getEntriesByType(type: EncyclopediaEntry['type']): EncyclopediaEntry[] {
	return Object.values(encyclopediaEntries).filter(entry => entry.type === type);
}
