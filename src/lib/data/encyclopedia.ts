export interface EncyclopediaEntry {
	id: string;
	title: string;
	titleDe: string;
	type: 'person' | 'place' | 'concept' | 'event';
	shortDescription: string;
	shortDescriptionDe: string;
	fullDescription: string;
	fullDescriptionDe: string;
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
	'richard-ii': {
		id: 'richard-ii',
		title: 'King Richard II',
		titleDe: 'König Richard II.',
		type: 'person',
		dates: '1367-1400',
		shortDescription: 'The deposed king whose fall set the stage for the Wars of the Roses',
		shortDescriptionDe: 'Der abgesetzte König, dessen Sturz die Bühne für die Rosenkriege bereitete',
		fullDescription: `Richard II, born in Bordeaux in 1367, became King of England at just ten years old after his father, Edward the Black Prince, died. His early reign was dominated by his uncles, particularly John of Gaunt, Duke of Lancaster. The young king showed remarkable courage during the Peasants' Revolt of 1381, personally confronting the rebels at Smithfield and famously declaring "I am your captain now!" However, Richard's dependence on unpopular favorites and his belief in absolute royal authority created bitter enemies among the nobility.

In 1387, a group of nobles called the Lords Appellant seized control of government and executed or exiled Richard's closest advisors. Richard appeared to reconcile with his enemies for eight years, but in 1397 he took brutal revenge—arresting, executing, or exiling the Appellants. His final years became increasingly tyrannical.

When John of Gaunt died in 1399, Richard made a fatal mistake: he confiscated the inheritance of Gaunt's exiled son, Henry Bolingbroke. While Richard was campaigning in Ireland, Bolingbroke invaded England to reclaim his lands—or so he claimed. At Flint Castle in Wales, Richard surrendered to his cousin. Within months, Richard was forced to abdicate, and Bolingbroke was crowned Henry IV.

Richard died in Pontefract Castle in early 1400, likely starved to death on Henry's orders. His deposition established a dangerous precedent that haunted the Lancastrian dynasty: if one anointed king could be overthrown, so could another. Shakespeare later dramatized Richard's fall in his play "Richard II," depicting him as a poetic but ineffective ruler whose deposition ultimately led to the Wars of the Roses.`,
		fullDescriptionDe: `Richard II., 1367 in Bordeaux geboren, wurde mit nur zehn Jahren König von England, nachdem sein Vater, Eduard der Schwarze Prinz, gestorben war. Seine frühe Regierungszeit wurde von seinen Onkeln dominiert, insbesondere von John of Gaunt, Herzog von Lancaster. Der junge König zeigte während des Bauernaufstands von 1381 bemerkenswerten Mut, als er sich persönlich den Rebellen in Smithfield stellte und berühmt erklärte: „Ich bin jetzt euer Anführer!" Richards Abhängigkeit von unbeliebten Günstlingen und sein Glaube an absolute königliche Autorität schufen jedoch erbitterte Feinde unter dem Adel.

1387 übernahm eine Gruppe von Adligen namens Lords Appellant die Kontrolle über die Regierung und richtete Richards engste Berater hin oder verbannte sie. Richard schien sich acht Jahre lang mit seinen Feinden zu versöhnen, aber 1397 übte er brutale Rache – er verhaftete, richtete hin oder verbannte die Appellanten. Seine letzten Jahre wurden zunehmend tyrannisch.

Als John of Gaunt 1399 starb, beging Richard einen fatalen Fehler: Er konfiszierte das Erbe von Gaunts verbanntem Sohn, Henry Bolingbroke. Während Richard in Irland Krieg führte, fiel Bolingbroke in England ein, um seine Ländereien zurückzufordern – so behauptete er zumindest. Auf Flint Castle in Wales ergab sich Richard seinem Cousin. Innerhalb weniger Monate wurde Richard zur Abdankung gezwungen, und Bolingbroke wurde als Heinrich IV. gekrönt.

Richard starb Anfang 1400 auf Pontefract Castle, wahrscheinlich auf Heinrichs Befehl verhungert. Seine Absetzung schuf einen gefährlichen Präzedenzfall, der die Lancaster-Dynastie verfolgte: Wenn ein gesalbter König gestürzt werden konnte, dann auch ein anderer. Shakespeare dramatisierte später Richards Fall in seinem Stück „Richard II." und stellte ihn als poetischen, aber ineffektiven Herrscher dar, dessen Absetzung letztlich zu den Rosenkriegen führte.`,
		relatedEntries: ['henry-iv', 'henry-vi', 'house-of-lancaster', 'wars-of-the-roses'],
		imageUrl: '/images/encyclopedia/richard-ii.jpg'
	},
	'henry-iv': {
		id: 'henry-iv',
		title: 'King Henry IV (Henry Bolingbroke)',
		titleDe: 'König Heinrich IV. (Henry Bolingbroke)',
		type: 'person',
		dates: '1367-1413',
		shortDescription: 'The usurper who founded the Lancastrian dynasty and cursed his line',
		shortDescriptionDe: 'Der Usurpator, der die Lancaster-Dynastie gründete und seine Linie verfluchte',
		fullDescription: `Henry Bolingbroke, born in 1367, was the son of John of Gaunt, Duke of Lancaster, the most powerful nobleman in England and uncle to King Richard II. Henry was one of the Lords Appellant who challenged Richard II in 1387, but was later exiled by the king in 1398. When his father John of Gaunt died in 1399, Richard II confiscated Henry's inheritance—a fateful decision that would cost him his crown.

Henry invaded England while Richard was in Ireland, initially claiming he only sought to reclaim his duchy of Lancaster. But as nobles flocked to his banner, his ambitions grew. At Flint Castle, Richard surrendered, and within months Henry had forced Richard to abdicate. On September 30, 1399, Henry was crowned Henry IV, the first Lancastrian king—but his claim to the throne was weaker than that of Edmund Mortimer, whose descent from Edward III came through an older son.

Henry's reign was plagued by rebellions, including those of Owen Glendower in Wales and the Percy family in the north. His health deteriorated, possibly from a skin disease that many believed was divine punishment for usurping the throne. He died in 1413, having spent much of his reign fighting to hold what he had taken.

Henry IV's usurpation cast a long shadow over English history. He had proven that kings could be deposed, a lesson his descendants would learn to their cost. His grandson Henry VI's mental illness and weak rule would invite Richard, Duke of York, to challenge the Lancastrian right to rule—and the Wars of the Roses would finally settle the question Henry IV had raised: could a usurper's line ever truly be legitimate?`,
		fullDescriptionDe: `Henry Bolingbroke, 1367 geboren, war der Sohn von John of Gaunt, Herzog von Lancaster, dem mächtigsten Adligen in England und Onkel von König Richard II. Henry war einer der Lords Appellant, die Richard II. 1387 herausforderten, wurde aber später 1398 vom König ins Exil geschickt. Als sein Vater John of Gaunt 1399 starb, konfiszierte Richard II. Henrys Erbe – eine schicksalhafte Entscheidung, die ihn seine Krone kosten sollte.

Henry fiel in England ein, während Richard in Irland war, und behauptete zunächst, er wolle nur sein Herzogtum Lancaster zurückfordern. Aber als Adlige zu seinem Banner strömten, wuchsen seine Ambitionen. Auf Flint Castle ergab sich Richard, und innerhalb weniger Monate hatte Henry Richard zur Abdankung gezwungen. Am 30. September 1399 wurde Henry als Heinrich IV. gekrönt, der erste Lancaster-König – aber sein Anspruch auf den Thron war schwächer als der von Edmund Mortimer, dessen Abstammung von Eduard III. durch einen älteren Sohn kam.

Heinrichs Regierungszeit war von Rebellionen geplagt, darunter die von Owen Glendower in Wales und der Percy-Familie im Norden. Seine Gesundheit verschlechterte sich, möglicherweise durch eine Hautkrankheit, die viele als göttliche Strafe für die Usurpation des Throns ansahen. Er starb 1413, nachdem er einen Großteil seiner Regierungszeit damit verbracht hatte, das zu verteidigen, was er genommen hatte.

Heinrich IV.s Usurpation warf einen langen Schatten über die englische Geschichte. Er hatte bewiesen, dass Könige abgesetzt werden konnten, eine Lektion, die seine Nachkommen zu ihrem Schaden lernen sollten. Die Geisteskrankheit und schwache Herrschaft seines Enkels Heinrich VI. würden Richard, Herzog von York, einladen, das Lancaster-Recht auf die Herrschaft in Frage zu stellen – und die Rosenkriege würden schließlich die Frage klären, die Heinrich IV. aufgeworfen hatte: Konnte die Linie eines Usurpators jemals wirklich legitim sein?`,
		relatedEntries: ['richard-ii', 'henry-vi', 'house-of-lancaster', 'richard-duke-of-york'],
		imageUrl: '/images/encyclopedia/richard-ii-surrender-flint.png'
	},
	'wars-of-the-roses': {
		id: 'wars-of-the-roses',
		title: 'The Wars of the Roses',
		titleDe: 'Die Rosenkriege',
		type: 'concept',
		dates: '1455-1487',
		shortDescription: 'The dynastic civil wars that tore England apart for over 30 years',
		shortDescriptionDe: 'Die dynastischen Bürgerkriege, die England über 30 Jahre lang zerrissen',
		fullDescription: `The Wars of the Roses were a series of brutal civil wars fought between the House of Lancaster (symbolized by a red rose) and the House of York (symbolized by a white rose) for control of the English throne. The conflict began in 1455 when Richard, Duke of York, challenged the weak rule of the Lancastrian King Henry VI and erupted at the First Battle of St Albans.

The wars can be divided into three phases: the initial conflict (1455-1464) ending with Yorkist victory at Towton; the second phase (1469-1471) sparked by Warwick the Kingmaker's betrayal of Edward IV; and the final phase (1483-1487) culminating in Henry Tudor's victory at Bosworth Field. The conflict saw approximately 105,000 Englishmen killed in battle—a staggering toll for a nation of only 3 million people.

Major battles included St Albans (1455, 1461), Wakefield (1460), Towton (1461), Barnet (1471), Tewkesbury (1471), and Bosworth Field (1485). The wars decimated the English nobility, ended the Plantagenet dynasty that had ruled since 1154, and brought the Tudors to power. The term "Wars of the Roses" was not used during the conflict itself—it was popularized centuries later by Sir Walter Scott, drawing on Shakespeare's depiction of nobles choosing roses in the Temple Garden.`,
		fullDescriptionDe: `Die Rosenkriege waren eine Reihe brutaler Bürgerkriege zwischen dem Haus Lancaster (symbolisiert durch eine rote Rose) und dem Haus York (symbolisiert durch eine weiße Rose) um die Kontrolle des englischen Throns. Der Konflikt begann 1455, als Richard, Herzog von York, die schwache Herrschaft des Lancaster-Königs Heinrich VI. in Frage stellte und in der Ersten Schlacht von St. Albans ausbrach.

Die Kriege lassen sich in drei Phasen unterteilen: der anfängliche Konflikt (1455-1464), der mit dem Yorkisten-Sieg bei Towton endete; die zweite Phase (1469-1471), ausgelöst durch Warwicks, des Königsmachers, Verrat an Eduard IV.; und die letzte Phase (1483-1487), die mit Heinrich Tudors Sieg bei Bosworth Field gipfelte. In dem Konflikt wurden etwa 105.000 Engländer in Schlachten getötet – eine erschütternde Zahl für eine Nation von nur 3 Millionen Menschen.

Zu den wichtigsten Schlachten gehörten St. Albans (1455, 1461), Wakefield (1460), Towton (1461), Barnet (1471), Tewkesbury (1471) und Bosworth Field (1485). Die Kriege dezimierten den englischen Adel, beendeten die Plantagenet-Dynastie, die seit 1154 regiert hatte, und brachten die Tudors an die Macht. Der Begriff „Rosenkriege" wurde während des Konflikts selbst nicht verwendet – er wurde Jahrhunderte später von Sir Walter Scott populär gemacht, der sich auf Shakespeares Darstellung von Adligen stützte, die im Temple Garden Rosen wählten.`,
		relatedEntries: ['house-of-lancaster', 'house-of-york', 'henry-vi', 'richard-duke-of-york', 'edward-iv', 'richard-iii', 'henry-vii', 'tudor-rose'],
		imageUrl: '/images/war-of-roses-map.jpg'
	},
	'henry-vi': {
		id: 'henry-vi',
		title: 'King Henry VI',
		titleDe: 'König Heinrich VI.',
		type: 'person',
		dates: '1421-1471',
		shortDescription: 'Lancastrian king whose mental illness sparked the Wars of the Roses',
		shortDescriptionDe: 'Lancaster-König, dessen Geisteskrankheit die Rosenkriege auslöste',
		fullDescription: `Henry VI became King of England at nine months old in 1422 and inherited the French throne shortly after. Despite this promising start, he proved to be England's most unsuccessful medieval monarch. Gentle, pious, and scholarly by nature, Henry was utterly unsuited for the brutal politics of his age. He suffered from severe mental illness (possibly catatonic schizophrenia), experiencing his first breakdown in 1453. During these episodes, he was completely unresponsive for months at a time. His incapacity created a power vacuum that his strong-willed wife Margaret of Anjou filled, leading noble factions to compete for control. Henry's weakness lost England all its French territories except Calais, bankrupted the crown, and ultimately triggered the civil war. After the Yorkist victory, he was imprisoned in the Tower of London, briefly restored to the throne in 1470, then murdered in 1471, likely on Edward IV's orders.`,
		fullDescriptionDe: `Heinrich VI. wurde 1422 im Alter von neun Monaten König von England und erbte kurz darauf den französischen Thron. Trotz dieses vielversprechenden Beginns erwies er sich als Englands erfolglosester mittelalterlicher Monarch. Von Natur aus sanft, fromm und gelehrt, war Heinrich für die brutale Politik seiner Zeit völlig ungeeignet. Er litt an einer schweren Geisteskrankheit (möglicherweise katatone Schizophrenie) und erlebte 1453 seinen ersten Zusammenbruch. Während dieser Episoden war er monatelang völlig reaktionslos. Seine Handlungsunfähigkeit schuf ein Machtvakuum, das seine willensstarke Frau Margaret von Anjou füllte, was Adelsfraktionen zum Wettstreit um die Kontrolle veranlasste. Heinrichs Schwäche kostete England alle französischen Territorien außer Calais, ruinierte die Krone finanziell und löste letztendlich den Bürgerkrieg aus. Nach dem Yorkisten-Sieg wurde er im Tower von London eingekerkert, 1470 kurzzeitig auf den Thron zurückgesetzt und dann 1471 ermordet, wahrscheinlich auf Befehl Eduards IV.`,
		relatedEntries: ['margaret-of-anjou', 'edward-iv', 'richard-duke-of-york', 'tower-of-london'],
		imageUrl: '/images/encyclopedia/henry-vi.jpg'
	},
	'richard-duke-of-york': {
		id: 'richard-duke-of-york',
		title: 'Richard, Duke of York',
		titleDe: 'Richard, Herzog von York',
		type: 'person',
		dates: '1411-1460',
		shortDescription: 'Yorkist claimant to the throne, father of Edward IV and Richard III',
		shortDescriptionDe: 'Yorkistischer Thronprätendent, Vater von Eduard IV. und Richard III.',
		fullDescription: `Richard Plantagenet, 3rd Duke of York, had a better claim to the English throne than King Henry VI through his descent from Edward III. Wealthy, capable, and ambitious, York served as Lieutenant of Ireland and Protector of England during Henry's mental breakdowns. However, Queen Margaret and the Duke of Somerset repeatedly blocked his rightful place in government. York's frustration led him to take up arms in 1455, beginning the Wars of the Roses. After victory at Northampton in 1460, he openly claimed the throne, but was forced to accept a compromise: Henry would remain king, but York would inherit after him. This disinherited Prince Edward, enraging Queen Margaret. York was killed at the Battle of Wakefield in December 1460, and his head was displayed on the gates of York wearing a paper crown in mockery. His death transformed the conflict—his son Edward avenged him by seizing the throne as Edward IV.`,
		fullDescriptionDe: `Richard Plantagenet, 3. Herzog von York, hatte durch seine Abstammung von Eduard III. einen besseren Anspruch auf den englischen Thron als König Heinrich VI. Wohlhabend, fähig und ehrgeizig, diente York als Statthalter von Irland und Protektor von England während Heinrichs geistigen Zusammenbrüchen. Königin Margaret und der Herzog von Somerset blockierten jedoch wiederholt seinen rechtmäßigen Platz in der Regierung. Yorks Frustration führte dazu, dass er 1455 zu den Waffen griff und die Rosenkriege begann. Nach dem Sieg bei Northampton 1460 erhob er offen Anspruch auf den Thron, musste aber einen Kompromiss akzeptieren: Heinrich würde König bleiben, aber York würde nach ihm erben. Dies enterbte Prinz Edward und erzürnte Königin Margaret. York wurde in der Schlacht von Wakefield im Dezember 1460 getötet, und sein Kopf wurde zur Verhöhnung mit einer Papierkrone auf den Toren von York ausgestellt. Sein Tod veränderte den Konflikt – sein Sohn Edward rächte ihn, indem er als Eduard IV. den Thron ergriff.`,
		relatedEntries: ['edward-iv', 'richard-iii', 'margaret-of-anjou', 'battle-of-wakefield'],
		imageUrl: '/images/encyclopedia/richard-duke-of-york.jpg'
	},
	'margaret-of-anjou': {
		id: 'margaret-of-anjou',
		title: 'Queen Margaret of Anjou',
		titleDe: 'Königin Margaret von Anjou',
		type: 'person',
		dates: '1430-1482',
		shortDescription: 'The "She-Wolf of France," fierce Lancastrian leader',
		shortDescriptionDe: 'Die „Wölfin von Frankreich", erbitterte Lancaster-Anführerin',
		fullDescription: `Margaret of Anjou, daughter of René of Anjou, married Henry VI in 1445 at age 15. She arrived in England as part of a peace treaty that cost England the territory of Maine. As Henry's mental health deteriorated, Margaret transformed from French princess to England's de facto ruler. She personally led armies, formed alliances, and fought with relentless determination to protect her son Edward's inheritance. The Yorkists called her the "She-Wolf of France"—a gendered insult for a woman who dared exercise military and political power. Margaret won victories at Wakefield and St Albans, but hesitation before London cost her the crown. After devastating defeats at Towton and Tewkesbury (where her son was killed), she was captured and imprisoned. Edward IV eventually ransomed her back to France, where she died in poverty in 1482. History remembers her as one of medieval England's most formidable women.`,
		fullDescriptionDe: `Margaret von Anjou, Tochter von René von Anjou, heiratete Heinrich VI. 1445 im Alter von 15 Jahren. Sie kam als Teil eines Friedensvertrags nach England, der England das Territorium von Maine kostete. Als Heinrichs geistige Gesundheit sich verschlechterte, wandelte sich Margaret von einer französischen Prinzessin zur faktischen Herrscherin Englands. Sie führte persönlich Armeen an, schloss Bündnisse und kämpfte mit unerbittlicher Entschlossenheit, um das Erbe ihres Sohnes Edward zu schützen. Die Yorkisten nannten sie die „Wölfin von Frankreich" – eine geschlechtsspezifische Beleidigung für eine Frau, die es wagte, militärische und politische Macht auszuüben. Margaret gewann Siege bei Wakefield und St. Albans, aber ihr Zögern vor London kostete sie die Krone. Nach verheerenden Niederlagen bei Towton und Tewkesbury (wo ihr Sohn getötet wurde) wurde sie gefangen genommen und eingekerkert. Eduard IV. löste sie schließlich nach Frankreich aus, wo sie 1482 in Armut starb. Die Geschichte erinnert sich an sie als eine der beeindruckendsten Frauen des mittelalterlichen Englands.`,
		relatedEntries: ['henry-vi', 'edward-of-westminster', 'richard-duke-of-york', 'battle-of-tewkesbury'],
		imageUrl: '/images/encyclopedia/margaret-of-anjou.jpg'
	},
	'warwick-the-kingmaker': {
		id: 'warwick-the-kingmaker',
		title: 'Richard Neville, Earl of Warwick ("The Kingmaker")',
		titleDe: 'Richard Neville, Graf von Warwick („Der Königsmacher")',
		type: 'person',
		dates: '1428-1471',
		shortDescription: 'The most powerful English noble, who made and broke kings',
		shortDescriptionDe: 'Der mächtigste englische Adlige, der Könige machte und stürzte',
		fullDescription: `Richard Neville inherited the title Earl of Warwick through marriage, becoming the wealthiest and most powerful nobleman in England. A brilliant military commander and master politician, he earned the nickname "Kingmaker" for his role in deposing Henry VI and crowning Edward IV. Warwick commanded forces at nearly every major battle of the wars, winning St Albans, Northampton, and Towton. But Edward IV's secret marriage to Elizabeth Woodville and the king's growing independence infuriated Warwick. In an unprecedented betrayal, Warwick allied with his former enemy Queen Margaret, deposed Edward, and briefly restored Henry VI in 1470. When Edward returned, Warwick was killed at the Battle of Barnet in 1471, killed trying to reach his horse. His death ended the age of over-mighty nobles who could challenge royal power. Shakespeare later immortalized him as the archetypal power broker.`,
		fullDescriptionDe: `Richard Neville erbte den Titel Graf von Warwick durch Heirat und wurde zum reichsten und mächtigsten Adligen in England. Als brillanter Feldherr und Meister der Politik verdiente er sich den Spitznamen „Königsmacher" für seine Rolle bei der Absetzung Heinrichs VI. und der Krönung Eduards IV. Warwick befehligte Truppen in fast jeder großen Schlacht der Kriege und gewann bei St. Albans, Northampton und Towton. Aber Eduards IV. geheime Heirat mit Elizabeth Woodville und die wachsende Unabhängigkeit des Königs erzürnten Warwick. In einem beispiellosen Verrat verbündete sich Warwick mit seiner ehemaligen Feindin Königin Margaret, setzte Edward ab und setzte Heinrich VI. 1470 kurzzeitig wieder ein. Als Edward zurückkehrte, wurde Warwick in der Schlacht von Barnet 1471 getötet, als er versuchte, sein Pferd zu erreichen. Sein Tod beendete die Ära der übermächtigen Adligen, die die königliche Macht herausfordern konnten. Shakespeare verewigte ihn später als den archetypischen Machtvermittler.`,
		relatedEntries: ['edward-iv', 'margaret-of-anjou', 'battle-of-barnet', 'george-duke-of-clarence'],
		imageUrl: '/images/encyclopedia/warwick-the-kingmaker.jpg'
	},
	'edward-iv': {
		id: 'edward-iv',
		title: 'King Edward IV',
		titleDe: 'König Eduard IV.',
		type: 'person',
		dates: '1442-1483',
		shortDescription: 'Tall, handsome Yorkist warrior-king who won the throne at 18',
		shortDescriptionDe: 'Großer, gutaussehender yorkistischer Kriegerkönig, der den Thron mit 18 gewann',
		fullDescription: `Edward of York became Earl of March at 18 when his father was killed at Wakefield. After witnessing the parhelion at Mortimer's Cross, he crushed the Lancastrians at Towton and was crowned Edward IV in 1461. At 6'4", he was one of England's tallest kings, and contemporary accounts praise his good looks and charm. A capable military commander, Edward won his throne through battlefield prowess. However, his secret marriage to Elizabeth Woodville in 1464 alienated Warwick and split the Yorkist faction. Briefly deposed in 1470 when Warwick and Margaret allied, Edward returned to win decisive victories at Barnet and Tewkesbury. His second reign (1471-1483) brought peace and prosperity. But Edward's indulgent lifestyle—heavy drinking and overeating—ruined his health. He died unexpectedly in 1483 at 40, leaving the throne to his 12-year-old son Edward V, setting the stage for Richard III's usurpation.`,
		fullDescriptionDe: `Edward von York wurde mit 18 Jahren Graf von March, als sein Vater bei Wakefield getötet wurde. Nach der Beobachtung der Nebensonne bei Mortimer's Cross vernichtete er die Lancastrianer bei Towton und wurde 1461 als Eduard IV. gekrönt. Mit 1,93 m war er einer der größten Könige Englands, und zeitgenössische Berichte loben sein gutes Aussehen und seinen Charme. Als fähiger Feldherr gewann Edward seinen Thron durch Kriegskunst. Seine geheime Heirat mit Elizabeth Woodville 1464 entfremdete jedoch Warwick und spaltete die Yorkisten-Fraktion. Kurzzeitig 1470 abgesetzt, als Warwick und Margaret sich verbündeten, kehrte Edward zurück und gewann entscheidende Siege bei Barnet und Tewkesbury. Seine zweite Regierungszeit (1471-1483) brachte Frieden und Wohlstand. Aber Edwards genussvoller Lebensstil – starkes Trinken und Überessen – ruinierte seine Gesundheit. Er starb unerwartet 1483 im Alter von 40 Jahren und hinterließ den Thron seinem 12-jährigen Sohn Edward V., womit die Bühne für Richard III.s Usurpation bereitet war.`,
		relatedEntries: ['elizabeth-woodville', 'warwick-the-kingmaker', 'richard-iii', 'battle-of-towton'],
		imageUrl: '/images/encyclopedia/edward-iv.jpg'
	},
	'richard-iii': {
		id: 'richard-iii',
		title: 'King Richard III',
		titleDe: 'König Richard III.',
		type: 'person',
		dates: '1452-1485',
		shortDescription: 'The last Plantagenet king, immortalized as Shakespeare\'s villain',
		shortDescriptionDe: 'Der letzte Plantagenet-König, als Shakespeares Bösewicht verewigt',
		fullDescription: `Richard, youngest son of Richard Duke of York and brother to Edward IV, served loyally during Edward's reign, governing northern England effectively. When Edward died in 1483, Richard was named Protector for 12-year-old Edward V. Within months, Richard declared Edward's children illegitimate, imprisoned them in the Tower of London, and took the throne himself. The "Princes in the Tower" disappeared, and Richard was widely suspected of murdering them, though no proof exists. His 26-month reign saw rebellions and plots. At the Battle of Bosworth Field in 1485, Richard was killed fighting Henry Tudor, reportedly crying "A horse! A horse! My kingdom for a horse!" Richard's reputation as a villain stems largely from Tudor propaganda and Shakespeare's play, which depicted him as a hunchbacked murderer. Modern historians debate whether he was truly monstrous or merely a pragmatic ruler in brutal times. His body, lost for centuries, was rediscovered under a Leicester car park in 2012.`,
		fullDescriptionDe: `Richard, jüngster Sohn von Richard, Herzog von York, und Bruder von Eduard IV., diente während Edwards Regierungszeit loyal und regierte Nordengland effektiv. Als Edward 1483 starb, wurde Richard zum Protektor für den 12-jährigen Edward V. ernannt. Innerhalb von Monaten erklärte Richard Edwards Kinder für illegitim, sperrte sie im Tower von London ein und übernahm selbst den Thron. Die „Prinzen im Tower" verschwanden, und Richard wurde weithin verdächtigt, sie ermordet zu haben, obwohl es keinen Beweis gibt. Seine 26-monatige Regierungszeit war von Rebellionen und Verschwörungen geprägt. In der Schlacht von Bosworth Field 1485 wurde Richard im Kampf gegen Heinrich Tudor getötet, wobei er Berichten zufolge rief: „Ein Pferd! Ein Pferd! Mein Königreich für ein Pferd!" Richards Ruf als Bösewicht stammt größtenteils aus Tudor-Propaganda und Shakespeares Stück, das ihn als buckligen Mörder darstellte. Moderne Historiker debattieren, ob er wirklich monströs oder nur ein pragmatischer Herrscher in brutalen Zeiten war. Seine Leiche, jahrhundertelang verschollen, wurde 2012 unter einem Parkplatz in Leicester wiederentdeckt.`,
		relatedEntries: ['edward-iv', 'princes-in-the-tower', 'henry-vii', 'battle-of-bosworth'],
		imageUrl: '/images/encyclopedia/richard-iii.jpg'
	},
	'henry-vii': {
		id: 'henry-vii',
		title: 'King Henry VII (Henry Tudor)',
		titleDe: 'König Heinrich VII. (Heinrich Tudor)',
		type: 'person',
		dates: '1457-1509',
		shortDescription: 'First Tudor king who ended the Wars of the Roses',
		shortDescriptionDe: 'Erster Tudor-König, der die Rosenkriege beendete',
		fullDescription: `Henry Tudor had a distant claim to the throne through his mother Margaret Beaufort's Lancastrian lineage. He spent most of his youth in exile in Brittany and France, an unlikely candidate for kingship. But after Richard III's unpopular usurpation, Henry became the focus of Lancastrian hopes. He invaded England in 1485 with French backing, and defeated Richard at Bosworth Field when some of Richard's allies switched sides mid-battle. Henry's claim was weak, so he strengthened it by marrying Elizabeth of York, uniting the two houses. He proved to be a shrewd, cautious ruler who rebuilt royal finances, crushed noble power, and established the Tudor dynasty. Though not a warrior like Edward IV, Henry was an excellent administrator who gave England the stability it desperately needed. His son Henry VIII and granddaughter Elizabeth I would make the Tudors the most famous English royal dynasty.`,
		fullDescriptionDe: `Heinrich Tudor hatte durch die Lancaster-Linie seiner Mutter Margaret Beaufort einen entfernten Anspruch auf den Thron. Er verbrachte den größten Teil seiner Jugend im Exil in der Bretagne und in Frankreich, ein unwahrscheinlicher Kandidat für die Königswürde. Aber nach Richard III.s unpopulärer Usurpation wurde Heinrich zum Fokus der Lancaster-Hoffnungen. Er fiel 1485 mit französischer Unterstützung in England ein und besiegte Richard bei Bosworth Field, als einige von Richards Verbündeten mitten in der Schlacht die Seiten wechselten. Heinrichs Anspruch war schwach, also stärkte er ihn durch die Heirat mit Elizabeth von York und vereinte die beiden Häuser. Er erwies sich als kluger, vorsichtiger Herrscher, der die königlichen Finanzen wiederaufbaute, die Macht des Adels brach und die Tudor-Dynastie begründete. Obwohl kein Krieger wie Eduard IV., war Heinrich ein ausgezeichneter Verwalter, der England die dringend benötigte Stabilität gab. Sein Sohn Heinrich VIII. und seine Enkelin Elisabeth I. sollten die Tudors zur berühmtesten englischen Königsdynastie machen.`,
		relatedEntries: ['elizabeth-of-york', 'richard-iii', 'battle-of-bosworth', 'tudor-rose'],
		imageUrl: '/images/encyclopedia/henry-vii.jpg'
	},
	'elizabeth-of-york': {
		id: 'elizabeth-of-york',
		title: 'Elizabeth of York',
		titleDe: 'Elizabeth von York',
		type: 'person',
		dates: '1466-1503',
		shortDescription: 'Yorkist princess who became first Tudor queen',
		shortDescriptionDe: 'Yorkistische Prinzessin, die erste Tudor-Königin wurde',
		fullDescription: `Elizabeth was the eldest daughter of Edward IV and Elizabeth Woodville. Born into the Yorkist royal family, her life was marked by upheaval: her father's deposition, restoration, and death; her brothers' disappearance in the Tower; her uncle Richard III's usurpation. Some historians suggest Richard III considered marrying Elizabeth himself after his wife died. Instead, Henry Tudor's victory at Bosworth made Elizabeth his prize. Their marriage on January 18, 1486, symbolically united Lancaster and York, creating the Tudor Rose emblem. Elizabeth was reportedly beautiful, gentle, and beloved by the people. She gave Henry seven children, including the future Henry VIII. Though politically important, she wielded little actual power compared to her fierce mother-in-law Margaret Beaufort. Elizabeth died in 1503 giving birth to her eighth child, predeceasing Henry VII by six years.`,
		fullDescriptionDe: `Elizabeth war die älteste Tochter von Eduard IV. und Elizabeth Woodville. In die yorkistische Königsfamilie hineingeboren, war ihr Leben von Umwälzungen geprägt: die Absetzung, Wiedereinsetzung und der Tod ihres Vaters; das Verschwinden ihrer Brüder im Tower; die Usurpation ihres Onkels Richard III. Einige Historiker vermuten, dass Richard III. nach dem Tod seiner Frau erwog, Elizabeth selbst zu heiraten. Stattdessen machte Heinrich Tudors Sieg bei Bosworth Elizabeth zu seinem Preis. Ihre Heirat am 18. Januar 1486 vereinte symbolisch Lancaster und York und schuf das Tudor-Rose-Emblem. Elizabeth war Berichten zufolge schön, sanft und vom Volk geliebt. Sie schenkte Heinrich sieben Kinder, darunter den späteren Heinrich VIII. Obwohl politisch wichtig, übte sie wenig tatsächliche Macht aus im Vergleich zu ihrer temperamentvollen Schwiegermutter Margaret Beaufort. Elizabeth starb 1503 bei der Geburt ihres achten Kindes, sechs Jahre vor Heinrich VII.`,
		relatedEntries: ['edward-iv', 'henry-vii', 'elizabeth-woodville', 'tudor-rose'],
		imageUrl: '/images/encyclopedia/elizabeth-of-york.jpg'
	},
	'elizabeth-woodville': {
		id: 'elizabeth-woodville',
		title: 'Elizabeth Woodville',
		titleDe: 'Elizabeth Woodville',
		type: 'person',
		dates: '1437-1492',
		shortDescription: 'Commoner widow who became Edward IV\'s controversial queen',
		shortDescriptionDe: 'Bürgerliche Witwe, die Eduards IV. umstrittene Königin wurde',
		fullDescription: `Elizabeth Woodville was a Lancastrian knight's widow with two sons when Edward IV fell in love with her. Their secret marriage in 1464 shocked England—kings didn't marry commoners, especially Lancastrian ones. Edward's elevation of the Woodville family to power infuriated Warwick and the old nobility. Accusations of witchcraft swirled around Elizabeth and her mother Jacquetta, who claimed descent from the water fairy Melusine. Despite the controversy, Elizabeth bore Edward ten children. When Edward died in 1483, Richard III declared her marriage invalid and her children bastards, seizing the throne. Her sons disappeared in the Tower. Elizabeth eventually supported Henry Tudor and saw her daughter become queen, but Richard III had confiscated her lands and she died in relative poverty in 1492.`,
		fullDescriptionDe: `Elizabeth Woodville war die Witwe eines Lancaster-Ritters mit zwei Söhnen, als Eduard IV. sich in sie verliebte. Ihre geheime Heirat 1464 schockierte England – Könige heirateten keine Bürgerlichen, besonders keine aus dem Lancaster-Lager. Edwards Erhebung der Woodville-Familie zur Macht erzürnte Warwick und den alten Adel. Anschuldigungen der Hexerei umgaben Elizabeth und ihre Mutter Jacquetta, die Abstammung von der Wasserfee Melusine beanspruchte. Trotz der Kontroverse gebar Elizabeth Edward zehn Kinder. Als Edward 1483 starb, erklärte Richard III. ihre Ehe für ungültig und ihre Kinder für Bastarde und ergriff den Thron. Ihre Söhne verschwanden im Tower. Elizabeth unterstützte schließlich Heinrich Tudor und sah ihre Tochter Königin werden, aber Richard III. hatte ihre Ländereien konfisziert, und sie starb 1492 in relativer Armut.`,
		relatedEntries: ['edward-iv', 'warwick-the-kingmaker', 'richard-iii', 'princes-in-the-tower'],
		imageUrl: '/images/encyclopedia/elizabeth-woodville.jpg'
	},
	'st-albans': {
		id: 'st-albans',
		title: 'St Albans',
		titleDe: 'St. Albans',
		type: 'place',
		shortDescription: 'Market town in Hertfordshire, site of two major battles',
		shortDescriptionDe: 'Marktstadt in Hertfordshire, Schauplatz zweier großer Schlachten',
		fullDescription: `St Albans, a prosperous market town north of London, witnessed two battles in the Wars of the Roses. The First Battle of St Albans (May 22, 1455) began the wars when Richard Duke of York's forces attacked King Henry VI's retinue in the town streets. Warwick led troops through gardens and narrow lanes to attack from unexpected angles. The battle lasted barely an hour but killed the Duke of Somerset and wounded the king. The Second Battle of St Albans (February 17, 1461) saw Queen Margaret defeat Warwick and rescue her husband King Henry. However, her army's pillaging made Londoners fear her, contributing to her decision not to march on the capital—a strategic error that cost her the throne.`,
		fullDescriptionDe: `St. Albans, eine wohlhabende Marktstadt nördlich von London, war Zeuge zweier Schlachten in den Rosenkriegen. Die Erste Schlacht von St. Albans (22. Mai 1455) begann die Kriege, als die Truppen von Richard, Herzog von York, König Heinrich VI. und sein Gefolge in den Straßen der Stadt angriffen. Warwick führte Truppen durch Gärten und enge Gassen, um aus unerwarteten Winkeln anzugreifen. Die Schlacht dauerte kaum eine Stunde, tötete aber den Herzog von Somerset und verwundete den König. Die Zweite Schlacht von St. Albans (17. Februar 1461) sah Königin Margaret Warwick besiegen und ihren Ehemann König Heinrich befreien. Die Plünderungen ihrer Armee ließen die Londoner sie jedoch fürchten, was zu ihrer Entscheidung beitrug, nicht auf die Hauptstadt zu marschieren – ein strategischer Fehler, der sie den Thron kostete.`,
		location: {
			name: 'St Albans, Hertfordshire',
			coordinates: { lat: 51.7519, lng: -0.3369 }
		},
		relatedEntries: ['warwick-the-kingmaker', 'richard-duke-of-york', 'margaret-of-anjou'],
		imageUrl: '/images/encyclopedia/st-albans.jpg'
	},
	'battle-of-wakefield': {
		id: 'battle-of-wakefield',
		title: 'Battle of Wakefield',
		titleDe: 'Schlacht von Wakefield',
		type: 'event',
		dates: 'December 30, 1460',
		shortDescription: 'Lancastrian victory where Richard Duke of York was killed',
		shortDescriptionDe: 'Lancaster-Sieg, bei dem Richard, Herzog von York, getötet wurde',
		fullDescription: `On December 30, 1460, Richard Duke of York left the safety of Sandal Castle and was lured into battle by Lancastrian forces. Whether through overconfidence or deception, York found himself outnumbered and surrounded. He was killed in the fighting, along with his second son Edmund, Earl of Rutland. The Lancastrians cut off York's head and displayed it on the gates of York city, crowned with a paper crown in mockery of his royal ambitions. This act of cruelty became one of the war's most infamous moments. York's death appeared to end the Yorkist cause, but instead it galvanized his son Edward to pursue the throne with renewed determination, leading to Edward's victories at Mortimer's Cross and Towton.`,
		fullDescriptionDe: `Am 30. Dezember 1460 verließ Richard, Herzog von York, die Sicherheit von Sandal Castle und wurde von Lancaster-Truppen in die Schlacht gelockt. Ob durch Überheblichkeit oder Täuschung, York fand sich in der Unterzahl und umzingelt wieder. Er wurde im Kampf getötet, zusammen mit seinem zweiten Sohn Edmund, Graf von Rutland. Die Lancastrianer schlugen Yorks Kopf ab und stellten ihn auf den Toren der Stadt York aus, mit einer Papierkrone gekrönt zur Verhöhnung seiner königlichen Ambitionen. Diese Grausamkeit wurde zu einem der berüchtigtsten Momente des Krieges. Yorks Tod schien die yorkistische Sache zu beenden, aber stattdessen motivierte er seinen Sohn Edward, mit erneuerter Entschlossenheit den Thron zu verfolgen, was zu Edwards Siegen bei Mortimer's Cross und Towton führte.`,
		location: {
			name: 'Wakefield, Yorkshire',
			coordinates: { lat: 53.6830, lng: -1.4990 }
		},
		relatedEntries: ['richard-duke-of-york', 'edward-iv', 'margaret-of-anjou']
	},
	'battle-of-towton': {
		id: 'battle-of-towton',
		title: 'Battle of Towton',
		titleDe: 'Schlacht von Towton',
		type: 'event',
		dates: 'March 29, 1461 (Palm Sunday)',
		shortDescription: 'The largest and bloodiest battle ever fought on English soil',
		shortDescriptionDe: 'Die größte und blutigste Schlacht, die je auf englischem Boden ausgetragen wurde',
		fullDescription: `Fought in a blinding snowstorm on Palm Sunday 1461, Towton was medieval warfare at its most brutal. Between 50,000-80,000 men clashed for ten hours in the snow. A south wind gave the Yorkists a crucial advantage—their arrows flew farther while Lancastrian arrows fell short. The battle raged all day until the Duke of Norfolk's fresh troops broke the Lancastrian flank. The slaughter was immense: approximately 28,000 men died, roughly 1% of England's entire population. The Cock Beck stream became so clogged with bodies that survivors crossed on bridges made of corpses. Edward IV's decisive victory forced Henry VI to flee to Scotland and secured the Yorkist hold on the throne. Towton remains the bloodiest day in English history, a trauma that scarred the nation's psyche.`,
		fullDescriptionDe: `Gekämpft in einem blendenden Schneesturm am Palmsonntag 1461, war Towton mittelalterliche Kriegsführung in ihrer brutalsten Form. Zwischen 50.000 und 80.000 Männer kämpften zehn Stunden lang im Schnee. Ein Südwind gab den Yorkisten einen entscheidenden Vorteil – ihre Pfeile flogen weiter, während die Lancaster-Pfeile zu kurz kamen. Die Schlacht tobte den ganzen Tag, bis die frischen Truppen des Herzogs von Norfolk die Lancaster-Flanke durchbrachen. Das Gemetzel war immens: Etwa 28.000 Männer starben, ungefähr 1% der gesamten Bevölkerung Englands. Der Bach Cock Beck war so verstopft mit Leichen, dass Überlebende auf Brücken aus Körpern hinüberkamen. Eduards IV. entscheidender Sieg zwang Heinrich VI. zur Flucht nach Schottland und sicherte den yorkistischen Griff auf den Thron. Towton bleibt der blutigste Tag in der englischen Geschichte, ein Trauma, das die Psyche der Nation prägte.`,
		location: {
			name: 'Towton, North Yorkshire',
			coordinates: { lat: 53.8333, lng: -1.2833 }
		},
		relatedEntries: ['edward-iv', 'henry-vi', 'margaret-of-anjou', 'warwick-the-kingmaker'],
		imageUrl: '/images/encyclopedia/battle-of-towton.jpg'
	},
	'battle-of-barnet': {
		id: 'battle-of-barnet',
		title: 'Battle of Barnet',
		titleDe: 'Schlacht von Barnet',
		type: 'event',
		dates: 'April 14, 1471 (Easter Sunday)',
		shortDescription: 'Edward IV\'s victory where Warwick the Kingmaker was killed',
		shortDescriptionDe: 'Eduards IV. Sieg, bei dem Warwick der Königsmacher getötet wurde',
		fullDescription: `On Easter Sunday 1471, Edward IV fought his former mentor Warwick the Kingmaker in thick fog at Barnet. Warwick had allied with Margaret of Anjou to restore Henry VI, forcing Edward to flee to Burgundy. But Edward returned with an army, confronting Warwick in conditions where visibility was nearly zero. Warwick's French cannons fired blindly into the mist, hitting nothing. Worse, when the Earl of Oxford's troops returned from pursuit, Warwick's forces mistook Oxford's star-and-streams banner for Edward's sun in the fog and fired on their own allies. The friendly fire incident broke Warwick's lines. Warwick, in full armor, tried to reach his horse to escape but was caught and killed. His death ended the age of over-mighty nobles who could challenge kings. Margaret of Anjou arrived in England the same day, learning of the disaster too late.`,
		fullDescriptionDe: `Am Ostersonntag 1471 kämpfte Eduard IV. gegen seinen ehemaligen Mentor Warwick den Königsmacher im dichten Nebel bei Barnet. Warwick hatte sich mit Margaret von Anjou verbündet, um Heinrich VI. wiederherzustellen, was Edward zur Flucht nach Burgund zwang. Aber Edward kehrte mit einer Armee zurück und stellte sich Warwick unter Bedingungen, bei denen die Sicht fast null war. Warwicks französische Kanonen feuerten blind in den Nebel und trafen nichts. Schlimmer noch, als die Truppen des Grafen von Oxford von der Verfolgung zurückkehrten, verwechselten Warwicks Truppen Oxfords Stern-und-Strahlen-Banner im Nebel mit Edwards Sonne und feuerten auf ihre eigenen Verbündeten. Der Eigenbeschuss brach Warwicks Linien. Warwick, in voller Rüstung, versuchte sein Pferd zu erreichen, um zu fliehen, wurde aber gefasst und getötet. Sein Tod beendete die Ära der übermächtigen Adligen, die Könige herausfordern konnten. Margaret von Anjou kam am selben Tag in England an und erfuhr zu spät von der Katastrophe.`,
		location: {
			name: 'Barnet, Hertfordshire',
			coordinates: { lat: 51.6514, lng: -0.2013 }
		},
		relatedEntries: ['warwick-the-kingmaker', 'edward-iv', 'margaret-of-anjou', 'battle-of-tewkesbury'],
		imageUrl: '/images/encyclopedia/battle-of-barnet.jpg'
	},
	'battle-of-bosworth': {
		id: 'battle-of-bosworth',
		title: 'Battle of Bosworth Field',
		titleDe: 'Schlacht von Bosworth Field',
		type: 'event',
		dates: 'August 22, 1485',
		shortDescription: 'Henry Tudor\'s victory that ended the Wars of the Roses',
		shortDescriptionDe: 'Heinrich Tudors Sieg, der die Rosenkriege beendete',
		fullDescription: `The Battle of Bosworth Field ended the Wars of the Roses and the Plantagenet dynasty. Richard III faced Henry Tudor's invasion force with a larger army, but his position was undermined by doubtful allies. During the battle, Lord Stanley and his brother (who commanded substantial forces) refused to commit to either side. When Richard spotted Henry's small bodyguard, he led a desperate cavalry charge to kill his rival personally. Richard fought bravely, reportedly killing Henry's standard-bearer, but Stanley's forces intervened on Henry's side. Richard was cut down, allegedly crying "Treason!" His crown was found on the battlefield and placed on Henry's head. Richard was the last English king to die in battle. His body was buried unceremoniously in Leicester and lost until archaeologists discovered it under a car park in 2012.`,
		fullDescriptionDe: `Die Schlacht von Bosworth Field beendete die Rosenkriege und die Plantagenet-Dynastie. Richard III. stellte sich Heinrich Tudors Invasionstruppe mit einer größeren Armee, aber seine Position wurde durch zweifelhafte Verbündete untergraben. Während der Schlacht weigerten sich Lord Stanley und sein Bruder (die erhebliche Truppen befehligten), sich für eine Seite zu entscheiden. Als Richard Heinrichs kleine Leibwache entdeckte, führte er einen verzweifelten Kavallerieangriff an, um seinen Rivalen persönlich zu töten. Richard kämpfte tapfer und tötete Berichten zufolge Heinrichs Bannerträger, aber Stanleys Truppen griffen auf Heinrichs Seite ein. Richard wurde niedergestreckt, angeblich mit dem Ruf „Verrat!" Seine Krone wurde auf dem Schlachtfeld gefunden und auf Heinrichs Kopf gesetzt. Richard war der letzte englische König, der in einer Schlacht starb. Sein Körper wurde in Leicester ohne Zeremonie begraben und blieb verschollen, bis Archäologen ihn 2012 unter einem Parkplatz entdeckten.`,
		location: {
			name: 'Bosworth Field, Leicestershire',
			coordinates: { lat: 52.6289, lng: -1.4094 }
		},
		relatedEntries: ['richard-iii', 'henry-vii', 'elizabeth-of-york', 'tudor-rose']
	},
	'house-of-lancaster': {
		id: 'house-of-lancaster',
		title: 'House of Lancaster',
		titleDe: 'Haus Lancaster',
		type: 'concept',
		shortDescription: 'The red rose faction descended from John of Gaunt',
		shortDescriptionDe: 'Die Fraktion der roten Rose, abstammend von John of Gaunt',
		fullDescription: `The House of Lancaster was a cadet branch of the Plantagenet dynasty, descended from John of Gaunt, Duke of Lancaster, fourth son of Edward III. The Lancastrian kings—Henry IV, Henry V, and Henry VI—ruled England from 1399 to 1461. Their symbol was the red rose. Henry V's conquests in France made the dynasty glorious, but Henry VI's weakness brought it to ruin. The Lancastrian claim rested on direct male descent from Henry IV, but the line was fragile—by 1471, only Henry VI and his son Edward remained. After the deaths of both at Tewkesbury and in the Tower, the Lancastrian cause passed to Henry Tudor, whose claim came through his mother's family (the Beauforts) and was quite weak. Nevertheless, Henry VII's victory at Bosworth technically made him a Lancastrian king, though he quickly married into York to legitimize his rule.`,
		fullDescriptionDe: `Das Haus Lancaster war ein jüngerer Zweig der Plantagenet-Dynastie, abstammend von John of Gaunt, Herzog von Lancaster, dem vierten Sohn von Eduard III. Die Lancaster-Könige – Heinrich IV., Heinrich V. und Heinrich VI. – regierten England von 1399 bis 1461. Ihr Symbol war die rote Rose. Heinrich V.s Eroberungen in Frankreich machten die Dynastie ruhmreich, aber Heinrich VI.s Schwäche führte sie in den Ruin. Der Lancaster-Anspruch beruhte auf direkter männlicher Abstammung von Heinrich IV., aber die Linie war fragil – bis 1471 waren nur noch Heinrich VI. und sein Sohn Edward übrig. Nach dem Tod beider bei Tewkesbury und im Tower ging die Lancaster-Sache auf Heinrich Tudor über, dessen Anspruch durch die Familie seiner Mutter (die Beauforts) kam und ziemlich schwach war. Dennoch machte Heinrich VII.s Sieg bei Bosworth ihn technisch zu einem Lancaster-König, obwohl er schnell in das Haus York einheiratete, um seine Herrschaft zu legitimieren.`,
		relatedEntries: ['house-of-york', 'henry-vi', 'henry-vii', 'tudor-rose'],
		imageUrl: '/images/heraldry/red-rose-lancaster.png'
	},
	'house-of-york': {
		id: 'house-of-york',
		title: 'House of York',
		titleDe: 'Haus York',
		type: 'concept',
		shortDescription: 'The white rose faction with strong claim through female descent',
		shortDescriptionDe: 'Die Fraktion der weißen Rose mit starkem Anspruch durch weibliche Abstammung',
		fullDescription: `The House of York descended from Edmund of Langley, Duke of York, fifth son of Edward III. But their claim to the throne came through Richard Duke of York's mother, Anne Mortimer, who descended from Edward III's second son. This gave York a better claim than Henry VI (who descended from the fourth son) if female descent counted—a controversial question. The Yorkist symbol was the white rose. Richard Duke of York began the wars to claim his rightful place, but it was his son Edward who took the throne as Edward IV in 1461. The Yorkist dynasty included Edward IV, his brief boy-king son Edward V, and Richard III. After Richard's death at Bosworth, the Yorkist cause largely ended, though Yorkist pretenders like Lambert Simnel and Perkin Warbeck troubled Henry VII's early reign. The white rose of York merged with Lancaster's red in the Tudor Rose.`,
		fullDescriptionDe: `Das Haus York stammte von Edmund of Langley, Herzog von York, dem fünften Sohn von Eduard III. ab. Aber ihr Anspruch auf den Thron kam durch Richard, Herzog von Yorks Mutter, Anne Mortimer, die von Eduard III.s zweitem Sohn abstammte. Dies gab York einen besseren Anspruch als Heinrich VI. (der vom vierten Sohn abstammte), wenn weibliche Abstammung zählte – eine kontroverse Frage. Das yorkistische Symbol war die weiße Rose. Richard, Herzog von York, begann die Kriege, um seinen rechtmäßigen Platz zu beanspruchen, aber es war sein Sohn Edward, der 1461 als Eduard IV. den Thron bestieg. Die yorkistische Dynastie umfasste Eduard IV., seinen kurzzeitigen Kindkönig-Sohn Edward V. und Richard III. Nach Richards Tod bei Bosworth endete die yorkistische Sache weitgehend, obwohl yorkistische Prätendenten wie Lambert Simnel und Perkin Warbeck Heinrich VII.s frühe Regierungszeit störten. Die weiße Rose von York verschmolz mit Lancasters roter in der Tudor-Rose.`,
		relatedEntries: ['house-of-lancaster', 'richard-duke-of-york', 'edward-iv', 'richard-iii'],
		imageUrl: '/images/heraldry/white-rose-york.png'
	},
	'tudor-rose': {
		id: 'tudor-rose',
		title: 'The Tudor Rose',
		titleDe: 'Die Tudor-Rose',
		type: 'concept',
		shortDescription: 'Symbol combining Lancaster\'s red and York\'s white roses',
		shortDescriptionDe: 'Symbol, das Lancasters rote und Yorks weiße Rose vereint',
		fullDescription: `The Tudor Rose symbolized the union of Lancaster and York through Henry VII's marriage to Elizabeth of York in 1486. The emblem depicted a white rose (York) inside a red rose (Lancaster), sometimes shown as quartered white and red. This heraldic device became the defining symbol of the Tudor dynasty, representing the end of civil war and the beginning of a unified England. The actual Wars of the Roses weren't called that during the conflict—the term came from the Tudor period, popularized by Shakespeare. The rose badges themselves were rarely used as battlefield symbols, but became powerful propaganda tools afterward. The Tudor Rose appeared on buildings, coins, and artwork throughout the Tudor period, a constant reminder that the dynasty had brought peace by ending the wars between the roses.`,
		fullDescriptionDe: `Die Tudor-Rose symbolisierte die Vereinigung von Lancaster und York durch Heinrich VII.s Heirat mit Elizabeth von York 1486. Das Emblem zeigte eine weiße Rose (York) innerhalb einer roten Rose (Lancaster), manchmal als geviertelt in Weiß und Rot dargestellt. Dieses heraldische Zeichen wurde zum bestimmenden Symbol der Tudor-Dynastie und repräsentierte das Ende des Bürgerkriegs und den Beginn eines vereinten Englands. Die eigentlichen Rosenkriege wurden während des Konflikts nicht so genannt – der Begriff kam aus der Tudor-Zeit, populär gemacht durch Shakespeare. Die Rosenabzeichen selbst wurden selten als Schlachtfeldsymbole verwendet, wurden aber danach zu mächtigen Propagandawerkzeugen. Die Tudor-Rose erschien auf Gebäuden, Münzen und Kunstwerken während der gesamten Tudor-Periode, eine ständige Erinnerung daran, dass die Dynastie Frieden gebracht hatte, indem sie die Kriege zwischen den Rosen beendete.`,
		relatedEntries: ['henry-vii', 'elizabeth-of-york', 'house-of-lancaster', 'house-of-york'],
		imageUrl: '/images/heraldry/tudor-rose.png'
	},
	'tower-of-london': {
		id: 'tower-of-london',
		title: 'Tower of London',
		titleDe: 'Tower von London',
		type: 'place',
		shortDescription: 'Royal fortress, palace, and prison',
		shortDescriptionDe: 'Königliche Festung, Palast und Gefängnis',
		fullDescription: `The Tower of London served as both royal residence and England's most notorious prison during the Wars of the Roses. Henry VI was imprisoned there after his deposition, briefly released when Warwick restored him, then murdered there in 1471 (allegedly by Richard Duke of Gloucester). The "Princes in the Tower"—Edward V and his brother Richard—were lodged there by their uncle Richard III and disappeared in 1483, likely murdered. Two child skeletons were discovered in the Tower in 1674 and presumed to be the princes. The Tower witnessed numerous executions during the wars, including several of Warwick's relatives. Its association with dark deeds made it a powerful symbol in Tudor propaganda.`,
		fullDescriptionDe: `Der Tower von London diente während der Rosenkriege sowohl als königliche Residenz als auch als Englands berüchtigstes Gefängnis. Heinrich VI. wurde dort nach seiner Absetzung eingekerkert, kurzzeitig freigelassen, als Warwick ihn wiedereinsetzte, dann dort 1471 ermordet (angeblich von Richard, Herzog von Gloucester). Die „Prinzen im Tower" – Edward V. und sein Bruder Richard – wurden dort von ihrem Onkel Richard III. untergebracht und verschwanden 1483, wahrscheinlich ermordet. Zwei Kinderskelette wurden 1674 im Tower entdeckt und als die Prinzen vermutet. Der Tower erlebte zahlreiche Hinrichtungen während der Kriege, darunter mehrere von Warwicks Verwandten. Seine Verbindung mit dunklen Taten machte ihn zu einem mächtigen Symbol in der Tudor-Propaganda.`,
		location: {
			name: 'Tower of London',
			coordinates: { lat: 51.5081, lng: -0.0759 }
		},
		relatedEntries: ['henry-vi', 'princes-in-the-tower', 'richard-iii', 'edward-iv']
	},
	'princes-in-the-tower': {
		id: 'princes-in-the-tower',
		title: 'The Princes in the Tower',
		titleDe: 'Die Prinzen im Tower',
		type: 'event',
		dates: '1483',
		shortDescription: 'Edward V and his brother, who disappeared and were presumably murdered',
		shortDescriptionDe: 'Edward V. und sein Bruder, die verschwanden und vermutlich ermordet wurden',
		fullDescription: `When Edward IV died in 1483, his 12-year-old son became Edward V. The boy-king and his younger brother Richard, Duke of York (age 9), were lodged in the Tower of London by their uncle Richard Duke of Gloucester (the Lord Protector). Within months, Gloucester declared the boys illegitimate on dubious grounds and took the throne as Richard III. The princes were seen less and less frequently and eventually disappeared entirely. They were almost certainly murdered, though the killer's identity remains uncertain. Tudor propaganda blamed Richard III, but some historians suggest others might have ordered the deed. In 1674, workmen found two child skeletons under a staircase in the Tower. They were assumed to be the princes and reburied in Westminster Abbey. The mystery of the Princes in the Tower remains one of history's most famous cold cases.`,
		fullDescriptionDe: `Als Eduard IV. 1483 starb, wurde sein 12-jähriger Sohn Edward V. Der Kindkönig und sein jüngerer Bruder Richard, Herzog von York (9 Jahre alt), wurden im Tower von London von ihrem Onkel Richard, Herzog von Gloucester (dem Lordprotektor), untergebracht. Innerhalb von Monaten erklärte Gloucester die Jungen auf zweifelhafter Grundlage für illegitim und bestieg als Richard III. den Thron. Die Prinzen wurden immer seltener gesehen und verschwanden schließlich ganz. Sie wurden mit ziemlicher Sicherheit ermordet, obwohl die Identität des Mörders ungewiss bleibt. Tudor-Propaganda beschuldigte Richard III., aber einige Historiker vermuten, dass andere die Tat angeordnet haben könnten. 1674 fanden Arbeiter zwei Kinderskelette unter einer Treppe im Tower. Sie wurden als die Prinzen angenommen und in Westminster Abbey wiederbestattet. Das Geheimnis der Prinzen im Tower bleibt einer der berühmtesten ungelösten Fälle der Geschichte.`,
		relatedEntries: ['edward-iv', 'richard-iii', 'elizabeth-woodville', 'tower-of-london'],
		imageUrl: '/images/encyclopedia/princes-in-the-tower.png'
	},
	'george-duke-of-clarence': {
		id: 'george-duke-of-clarence',
		title: 'George, Duke of Clarence',
		titleDe: 'George, Herzog von Clarence',
		type: 'person',
		dates: '1449-1478',
		shortDescription: 'Edward IV\'s treacherous brother, allegedly drowned in wine',
		shortDescriptionDe: 'Eduards IV. verräterischer Bruder, angeblich im Wein ertränkt',
		fullDescription: `George, Duke of Clarence, was the middle brother between Edward IV and Richard III. Ambitious and easily swayed, George proved spectacularly disloyal. When Warwick the Kingmaker turned against Edward, George joined the rebellion and married Warwick's daughter Isabel. He even briefly supported restoring Henry VI. But when Warwick's cause faltered, George switched sides again, betraying his father-in-law at the Battle of Barnet. Edward forgave him, but George continued scheming. After Isabel's death, he accused one of her servants of poisoning her and had the woman executed without trial. When George began questioning the legitimacy of Edward's marriage and children, he went too far. Edward had him tried for treason and executed in 1478. Legend claims George chose to be drowned in a barrel of Malmsey wine—a death as theatrical as his life. Shakespeare immortalized him as the dream-haunted victim in Richard III.`,
		fullDescriptionDe: `George, Herzog von Clarence, war der mittlere Bruder zwischen Eduard IV. und Richard III. Ehrgeizig und leicht beeinflussbar, erwies sich George als spektakulär illoyal. Als Warwick der Königsmacher sich gegen Edward wandte, schloss George sich der Rebellion an und heiratete Warwicks Tochter Isabel. Er unterstützte sogar kurzzeitig die Wiedereinsetzung Heinrichs VI. Aber als Warwicks Sache ins Wanken geriet, wechselte George erneut die Seiten und verriet seinen Schwiegervater in der Schlacht von Barnet. Edward verzieh ihm, aber George setzte seine Intrigen fort. Nach Isabels Tod beschuldigte er eine ihrer Dienerinnen, sie vergiftet zu haben, und ließ die Frau ohne Prozess hinrichten. Als George begann, die Legitimität von Edwards Ehe und Kindern in Frage zu stellen, ging er zu weit. Edward ließ ihn wegen Hochverrats vor Gericht stellen und 1478 hinrichten. Die Legende behauptet, George habe gewählt, in einem Fass Malvasier-Wein ertränkt zu werden – ein Tod, so theatralisch wie sein Leben. Shakespeare verewigte ihn als das von Träumen heimgesuchte Opfer in Richard III.`,
		relatedEntries: ['edward-iv', 'richard-iii', 'warwick-the-kingmaker', 'battle-of-barnet'],
		imageUrl: '/images/encyclopedia/george-duke-of-clarence.jpg'
	},
	'edward-of-westminster': {
		id: 'edward-of-westminster',
		title: 'Edward of Westminster, Prince of Wales',
		titleDe: 'Edward von Westminster, Prinz von Wales',
		type: 'person',
		dates: '1453-1471',
		shortDescription: 'Henry VI\'s son, the last Lancastrian prince',
		shortDescriptionDe: 'Heinrich VI.s Sohn, der letzte Lancaster-Prinz',
		fullDescription: `Edward of Westminster was the only son of Henry VI and Margaret of Anjou, born during his father's first mental breakdown in 1453. His birth should have secured the Lancastrian succession, but instead intensified the conflict—Richard Duke of York had been named heir, and Edward's arrival displaced him. Margaret fought ferociously to protect her son's inheritance, earning her "She-Wolf" reputation. Edward grew up in exile after the Yorkist victory at Towton, living in France under his mother's guidance. In 1470, he married Anne Neville (Warwick's daughter) to seal the Warwick-Lancaster alliance. When this alliance collapsed at Barnet and Tewkesbury, Edward's fate was sealed. He was killed at the Battle of Tewkesbury in 1471, either in battle or executed shortly after—sources disagree. His death ended the direct Lancastrian line and Margaret's hopes forever.`,
		fullDescriptionDe: `Edward von Westminster war der einzige Sohn von Heinrich VI. und Margaret von Anjou, geboren während des ersten geistigen Zusammenbruchs seines Vaters 1453. Seine Geburt hätte die Lancaster-Nachfolge sichern sollen, aber stattdessen verschärfte sie den Konflikt – Richard, Herzog von York, war als Erbe ernannt worden, und Edwards Ankunft verdrängte ihn. Margaret kämpfte erbittert, um das Erbe ihres Sohnes zu schützen, und verdiente sich ihren Ruf als „Wölfin". Edward wuchs nach dem Yorkisten-Sieg bei Towton im Exil auf und lebte in Frankreich unter der Führung seiner Mutter. 1470 heiratete er Anne Neville (Warwicks Tochter), um das Warwick-Lancaster-Bündnis zu besiegeln. Als dieses Bündnis bei Barnet und Tewkesbury zusammenbrach, war Edwards Schicksal besiegelt. Er wurde in der Schlacht von Tewkesbury 1471 getötet, entweder in der Schlacht oder kurz danach hingerichtet – die Quellen sind uneins. Sein Tod beendete die direkte Lancaster-Linie und Margarets Hoffnungen für immer.`,
		relatedEntries: ['henry-vi', 'margaret-of-anjou', 'battle-of-tewkesbury', 'warwick-the-kingmaker']
	},
	'george-neville-archbishop': {
		id: 'george-neville-archbishop',
		title: 'George Neville, Archbishop of York',
		titleDe: 'George Neville, Erzbischof von York',
		type: 'person',
		dates: '1432-1476',
		shortDescription: 'Warwick\'s brother who used religion to legitimize Edward IV',
		shortDescriptionDe: 'Warwicks Bruder, der Religion nutzte, um Eduard IV. zu legitimieren',
		fullDescription: `George Neville was the younger brother of Warwick the Kingmaker and served as Archbishop of York from 1465. He played a crucial role in legitimizing Edward IV's claim to the throne. At St Paul's Cathedral, George preached sermons declaring that Henry VI had broken sacred oaths, thus forfeiting divine favor. He presided over Edward's coronation, using the full weight of religious ceremony to transform a usurper into God's anointed king. George hosted the most lavish feast in medieval English history at his enthronement as Archbishop. However, when Warwick turned against Edward, George followed his brother into rebellion. After Warwick's death at Barnet, George was arrested and stripped of his archbishopric. He died in 1476, impoverished and forgotten—a reminder that even princes of the Church could fall when they backed the wrong king.`,
		fullDescriptionDe: `George Neville war der jüngere Bruder von Warwick dem Königsmacher und diente ab 1465 als Erzbischof von York. Er spielte eine entscheidende Rolle bei der Legitimierung von Eduards IV. Anspruch auf den Thron. In der St. Pauls Kathedrale predigte George Predigten, die erklärten, Heinrich VI. habe heilige Eide gebrochen und damit die göttliche Gunst verwirkt. Er leitete Edwards Krönung und nutzte das volle Gewicht der religiösen Zeremonie, um einen Usurpator in Gottes gesalbten König zu verwandeln. George richtete das prächtigste Fest in der mittelalterlichen englischen Geschichte bei seiner Inthronisation als Erzbischof aus. Als Warwick sich jedoch gegen Edward wandte, folgte George seinem Bruder in die Rebellion. Nach Warwicks Tod bei Barnet wurde George verhaftet und seines Erzbistums enthoben. Er starb 1476, verarmt und vergessen – eine Erinnerung daran, dass selbst Kirchenfürsten fallen konnten, wenn sie auf den falschen König setzten.`,
		relatedEntries: ['warwick-the-kingmaker', 'edward-iv', 'henry-vi']
	},
	'jasper-tudor': {
		id: 'jasper-tudor',
		title: 'Jasper Tudor, Earl of Pembroke',
		titleDe: 'Jasper Tudor, Graf von Pembroke',
		type: 'person',
		dates: '1431-1495',
		shortDescription: 'Henry VII\'s uncle and lifelong protector',
		shortDescriptionDe: 'Heinrich VII.s Onkel und lebenslanger Beschützer',
		fullDescription: `Jasper Tudor was the half-brother of Henry VI (through their mother Catherine of Valois) and uncle to the future Henry VII. A steadfast Lancastrian, Jasper fought at nearly every major battle of the wars. After the Lancastrian defeats, he dedicated his life to protecting his nephew Henry Tudor. When Edward IV's forces threatened, Jasper fled with young Henry to Brittany, where they spent 14 years in exile. Jasper never wavered in his belief that Henry could claim the throne. He helped organize the 1485 invasion, fought at Bosworth Field, and lived to see his nephew crowned. Henry VII rewarded his uncle's loyalty by making him Duke of Bedford. Jasper died in 1495, having accomplished his life's mission: putting a Tudor on the English throne.`,
		fullDescriptionDe: `Jasper Tudor war der Halbbruder von Heinrich VI. (durch ihre Mutter Catherine von Valois) und Onkel des späteren Heinrich VII. Als standhafter Lancaster kämpfte Jasper in fast jeder großen Schlacht der Kriege. Nach den Lancaster-Niederlagen widmete er sein Leben dem Schutz seines Neffen Heinrich Tudor. Als Eduards IV. Truppen drohten, floh Jasper mit dem jungen Heinrich in die Bretagne, wo sie 14 Jahre im Exil verbrachten. Jasper zweifelte nie daran, dass Heinrich den Thron beanspruchen könnte. Er half bei der Organisation der Invasion von 1485, kämpfte bei Bosworth Field und erlebte noch die Krönung seines Neffen. Heinrich VII. belohnte die Loyalität seines Onkels, indem er ihn zum Herzog von Bedford machte. Jasper starb 1495, nachdem er seine Lebensaufgabe erfüllt hatte: einen Tudor auf den englischen Thron zu setzen.`,
		relatedEntries: ['henry-vii', 'owen-tudor', 'henry-vi', 'battle-of-bosworth']
	},
	'owen-tudor': {
		id: 'owen-tudor',
		title: 'Owen Tudor',
		titleDe: 'Owen Tudor',
		type: 'person',
		dates: 'c.1400-1461',
		shortDescription: 'Welsh courtier who secretly married a queen and founded a dynasty',
		shortDescriptionDe: 'Walisischer Höfling, der heimlich eine Königin heiratete und eine Dynastie gründete',
		fullDescription: `Owen Tudor was a Welsh courtier who achieved the impossible: he secretly married Catherine of Valois, the widow of Henry V and mother of Henry VI. This scandalous union produced Edmund and Jasper Tudor. Though Owen was no nobleman, his grandsons would include a king. Owen fought for Lancaster throughout the wars. At the Battle of Mortimer's Cross in 1461, he was captured by Edward IV's forces. Reportedly, Owen didn't believe he would be executed until the very moment the axe fell, supposedly saying "that head shall lie on the stock that was wont to lie on Queen Catherine's lap." His head was placed on the market cross, where a local woman combed his hair and lit candles around it. Owen's unlikely marriage created the Tudor bloodline that would eventually rule England.`,
		fullDescriptionDe: `Owen Tudor war ein walisischer Höfling, der das Unmögliche erreichte: Er heiratete heimlich Catherine von Valois, die Witwe von Heinrich V. und Mutter von Heinrich VI. Aus dieser skandalösen Verbindung gingen Edmund und Jasper Tudor hervor. Obwohl Owen kein Adliger war, würden seine Enkel einen König einschließen. Owen kämpfte während der gesamten Kriege für Lancaster. In der Schlacht von Mortimer's Cross 1461 wurde er von Eduards IV. Truppen gefangen genommen. Berichten zufolge glaubte Owen nicht, dass er hingerichtet werden würde, bis im letzten Moment das Beil fiel, wobei er angeblich sagte: „Dieser Kopf soll auf dem Block liegen, der gewohnt war, auf dem Schoß von Königin Catherine zu liegen." Sein Kopf wurde auf das Marktkreuz gesetzt, wo eine einheimische Frau sein Haar kämmte und Kerzen um ihn herum anzündete. Owens unwahrscheinliche Ehe schuf die Tudor-Blutlinie, die schließlich England regieren sollte.`,
		relatedEntries: ['jasper-tudor', 'henry-vii', 'battle-of-mortimers-cross']
	},
	'jacquetta-of-luxembourg': {
		id: 'jacquetta-of-luxembourg',
		title: 'Jacquetta of Luxembourg',
		titleDe: 'Jacquetta von Luxemburg',
		type: 'person',
		dates: '1415-1472',
		shortDescription: 'Elizabeth Woodville\'s mother, accused of witchcraft',
		shortDescriptionDe: 'Elizabeth Woodvilles Mutter, der Hexerei beschuldigt',
		fullDescription: `Jacquetta of Luxembourg was one of the most remarkable women of the Wars of the Roses. First married to the Duke of Bedford (Henry V's brother), she scandalized the court by secretly marrying his squire, Richard Woodville, for love. Their daughter Elizabeth would become queen. Jacquetta claimed descent from Melusine, a water fairy from medieval legend, and this association haunted her family. When Edward IV secretly married Elizabeth, Warwick accused Jacquetta of using witchcraft to ensnare the king. She was formally charged with making lead images to bewitch Edward. Jacquetta successfully defended herself, but the accusations persisted. Her family's rapid rise from minor gentry to royal in-laws made them targets of resentment. Jacquetta died in 1472, but the witchcraft rumors followed the Woodvilles for generations.`,
		fullDescriptionDe: `Jacquetta von Luxemburg war eine der bemerkenswertesten Frauen der Rosenkriege. Zuerst mit dem Herzog von Bedford (Heinrich V.s Bruder) verheiratet, schockierte sie den Hof, indem sie heimlich seinen Knappen Richard Woodville aus Liebe heiratete. Ihre Tochter Elizabeth sollte Königin werden. Jacquetta beanspruchte Abstammung von Melusine, einer Wasserfee aus mittelalterlicher Legende, und diese Verbindung verfolgte ihre Familie. Als Eduard IV. heimlich Elizabeth heiratete, beschuldigte Warwick Jacquetta, Hexerei eingesetzt zu haben, um den König zu verführen. Sie wurde formell angeklagt, Bleibilder hergestellt zu haben, um Edward zu verhexen. Jacquetta verteidigte sich erfolgreich, aber die Anschuldigungen bestanden fort. Der rasche Aufstieg ihrer Familie vom niederen Adel zu königlichen Verwandten machte sie zu Zielscheiben von Ressentiments. Jacquetta starb 1472, aber die Hexerei-Gerüchte verfolgten die Woodvilles über Generationen.`,
		relatedEntries: ['elizabeth-woodville', 'edward-iv', 'warwick-the-kingmaker', 'melusine'],
		imageUrl: '/images/encyclopedia/jacquetta-of-luxembourg.png'
	},
	'melusine': {
		id: 'melusine',
		title: 'Melusine',
		titleDe: 'Melusine',
		type: 'concept',
		shortDescription: 'Mythical water fairy ancestor claimed by the Woodville family',
		shortDescriptionDe: 'Mythische Wasserfee, als Vorfahrin von der Familie Woodville beansprucht',
		fullDescription: `Melusine is a figure from medieval European folklore—a beautiful woman cursed to transform into a serpent from the waist down every Saturday. According to legend, she appeared to Raymond of Poitou at a fountain in the forest after he had accidentally killed his lord. She offered him wealth, power, and a dynasty in exchange for marriage, but with one condition: he must never see her on the Sabbath. Raymond agreed, and Melusine used her magical powers to build him the magnificent Château de Lusignan in a single night. She bore him many sons, though several had strange features—marks of their fey heritage.

For years the marriage prospered, but Raymond's brother planted seeds of doubt. What was Melusine hiding? What dark rituals did she perform on Saturdays? Finally, Raymond broke his vow and spied on his wife through a keyhole. He discovered her bathing, her lower body transformed into a massive serpent's tail. When Melusine realized her husband had betrayed his oath, she let out a terrible shriek—the "Cri de Fae"—and flew from the castle window, cursed to circle the towers whenever a lord of Lusignan was about to die.

The House of Lusignan claimed descent from Melusine, and through them, so did the House of Luxembourg. Jacquetta of Luxembourg, mother of Elizabeth Woodville, brought this legendary ancestry to England. When Edward IV secretly married Elizabeth—a mere commoner's widow—his enemies used the Melusine legend against them. Warwick the Kingmaker accused Jacquetta of witchcraft, claiming she had used fairy magic inherited from Melusine to enchant the king with "leaden dolls and twisted charms." The accusations were a political weapon, attempting to delegitimize the marriage by painting the Woodvilles as practitioners of dark arts.`,
		fullDescriptionDe: `Melusine ist eine Figur aus der mittelalterlichen europäischen Folklore—eine schöne Frau, die verflucht war, sich jeden Samstag von der Hüfte abwärts in eine Schlange zu verwandeln. Der Legende nach erschien sie Raymond von Poitou an einem Brunnen im Wald, nachdem er versehentlich seinen Herrn getötet hatte. Sie bot ihm Reichtum, Macht und eine Dynastie im Austausch für eine Heirat, aber mit einer Bedingung: Er durfte sie niemals am Sabbat sehen. Raymond stimmte zu, und Melusine nutzte ihre magischen Kräfte, um ihm in einer einzigen Nacht das prächtige Château de Lusignan zu erbauen. Sie gebar ihm viele Söhne, obwohl einige seltsame Merkmale aufwiesen—Zeichen ihrer feenhaften Herkunft.

Jahrelang gedieh die Ehe, aber Raymonds Bruder säte Zweifel. Was verbarg Melusine? Welche dunklen Rituale führte sie samstags durch? Schließlich brach Raymond sein Gelübde und bespitzelte seine Frau durch ein Schlüsselloch. Er entdeckte sie beim Baden, ihr Unterkörper in einen massiven Schlangenschwanz verwandelt. Als Melusine erkannte, dass ihr Mann seinen Eid gebrochen hatte, stieß sie einen schrecklichen Schrei aus—den „Cri de Fae"—und flog aus dem Schlossfenster, verflucht, die Türme zu umkreisen, wann immer ein Herr von Lusignan sterben sollte.

Das Haus Lusignan beanspruchte Abstammung von Melusine, und durch sie auch das Haus Luxemburg. Jacquetta von Luxemburg, Mutter von Elizabeth Woodville, brachte diese legendäre Abstammung nach England. Als Eduard IV. heimlich Elizabeth heiratete—eine bloße Witwe eines Bürgerlichen—nutzten seine Feinde die Melusine-Legende gegen sie. Warwick der Königsmacher beschuldigte Jacquetta der Hexerei und behauptete, sie habe Feenmagie verwendet, die von Melusine geerbt wurde, um den König mit „bleiernen Puppen und verdrehten Zaubern" zu verhexen. Die Anschuldigungen waren eine politische Waffe, um die Ehe zu delegitimieren, indem die Woodvilles als Praktiker dunkler Künste dargestellt wurden.`,
		relatedEntries: ['jacquetta-of-luxembourg', 'elizabeth-woodville', 'edward-iv', 'warwick-the-kingmaker'],
		imageUrl: '/images/encyclopedia/melusine-hubner.jpg'
	},
	'battle-of-tewkesbury': {
		id: 'battle-of-tewkesbury',
		title: 'Battle of Tewkesbury',
		titleDe: 'Schlacht von Tewkesbury',
		type: 'event',
		dates: 'May 4, 1471',
		shortDescription: 'The battle that destroyed the Lancastrian cause',
		shortDescriptionDe: 'Die Schlacht, die die Lancaster-Sache zerstörte',
		fullDescription: `Three weeks after killing Warwick at Barnet, Edward IV faced Queen Margaret's army at Tewkesbury. Margaret had finally returned from France with her son Prince Edward, hoping to rally Lancastrian supporters in the west. But Edward IV moved with devastating speed, forcing battle before Margaret could gather more troops. The Lancastrian position was strong, but the Duke of Somerset's impetuous charge exposed his flank. Edward's forces routed the Lancastrians completely. Prince Edward of Westminster was killed—either in battle or executed shortly after, ending the direct Lancastrian line. Many Lancastrian nobles who fled into Tewkesbury Abbey were dragged out and executed. Margaret was captured and eventually ransomed to France. Tewkesbury ended the wars' second phase; only the threat of Henry Tudor remained.`,
		fullDescriptionDe: `Drei Wochen nachdem er Warwick bei Barnet getötet hatte, stellte sich Eduard IV. Königin Margarets Armee bei Tewkesbury. Margaret war endlich aus Frankreich mit ihrem Sohn Prinz Edward zurückgekehrt, in der Hoffnung, Lancaster-Anhänger im Westen zu sammeln. Aber Eduard IV. handelte mit verheerender Geschwindigkeit und erzwang die Schlacht, bevor Margaret mehr Truppen sammeln konnte. Die Lancaster-Position war stark, aber der ungestüme Angriff des Herzogs von Somerset legte seine Flanke offen. Edwards Truppen schlugen die Lancastrianer vollständig in die Flucht. Prinz Edward von Westminster wurde getötet – entweder in der Schlacht oder kurz danach hingerichtet, womit die direkte Lancaster-Linie endete. Viele Lancaster-Adlige, die in die Abtei von Tewkesbury geflohen waren, wurden herausgezerrt und hingerichtet. Margaret wurde gefangen genommen und schließlich nach Frankreich ausgelöst. Tewkesbury beendete die zweite Phase der Kriege; nur noch die Bedrohung durch Heinrich Tudor blieb.`,
		location: {
			name: 'Tewkesbury, Gloucestershire',
			coordinates: { lat: 51.9927, lng: -2.1603 }
		},
		relatedEntries: ['edward-iv', 'margaret-of-anjou', 'edward-of-westminster', 'battle-of-barnet']
	},
	'gates-of-london': {
		id: 'gates-of-london',
		title: 'Margaret at the Gates of London',
		titleDe: 'Margarete an den Toren Londons',
		type: 'event',
		dates: 'February 1461',
		shortDescription: 'The fatal hesitation that cost Margaret the crown',
		shortDescriptionDe: 'Das verhängnisvolle Zögern, das Margarete die Krone kostete',
		fullDescription: `After her triumphant victory at the Second Battle of St Albans on February 17, 1461, Queen Margaret of Anjou stood at the pinnacle of her power. She had rescued her husband King Henry VI from captivity, defeated the mighty Warwick, and London—the heart of the kingdom—lay just 20 miles away with no army to defend it.

But London refused to open its gates. The citizens had heard terrifying reports of Margaret's northern army—tales of pillaging, burning, and looting as they marched south. The Lord Mayor and aldermen barricaded the city and sent nervous delegations to negotiate, demanding assurances that the capital would not be sacked.

Margaret faced an impossible choice. Storm the city and confirm every rumor about her "barbaric" army, potentially turning all of England against her son's cause? Or wait, negotiate, and trust in her overwhelming military advantage?

She chose to wait. It was the worst mistake of her life.

While Margaret's army grew hungry and restless outside the walls, while her negotiations dragged on for precious days, the defeated Warwick had linked up with young Edward of York at the Cotswolds. Together they made a desperate gamble—racing toward London with a smaller but disciplined force.

The city that had barred its gates to Margaret now threw them open for Edward. On March 4, 1461, he was acclaimed King Edward IV by the citizens and lords. Margaret, learning of this disaster, had no choice but to retreat north. Weeks later, Edward crushed her army at Towton in the bloodiest battle ever fought on English soil.

Historians still debate whether Margaret could have taken London by force. What is certain is that her hesitation transformed a total Lancastrian victory into catastrophic defeat. Had she stormed the city immediately after St Albans, there might never have been a King Edward IV, no Battle of Towton, no decade of exile for the Lancastrian queen. This moment—Margaret waiting at the gates while her kingdom slipped away—became one of history's great "what ifs."`,
		fullDescriptionDe: `Nach ihrem triumphalen Sieg in der Zweiten Schlacht von St Albans am 17. Februar 1461 stand Königin Margarete von Anjou auf dem Höhepunkt ihrer Macht. Sie hatte ihren Ehemann König Heinrich VI. aus der Gefangenschaft befreit, den mächtigen Warwick besiegt, und London – das Herz des Königreichs – lag nur 30 Kilometer entfernt ohne Armee zur Verteidigung.

Aber London weigerte sich, seine Tore zu öffnen. Die Bürger hatten erschreckende Berichte über Margaretes nördliche Armee gehört – Geschichten von Plünderung, Brandschatzung und Raub auf ihrem Marsch nach Süden. Der Lord Mayor und die Ratsherren verbarrikadierten die Stadt und sandten nervöse Delegationen zur Verhandlung, die Zusicherungen forderten, dass die Hauptstadt nicht geplündert würde.

Margarete stand vor einer unmöglichen Wahl. Die Stadt stürmen und jedes Gerücht über ihre „barbarische" Armee bestätigen, was möglicherweise ganz England gegen die Sache ihres Sohnes aufbringen würde? Oder warten, verhandeln und auf ihren überwältigenden militärischen Vorteil vertrauen?

Sie entschied sich zu warten. Es war der schlimmste Fehler ihres Lebens.

Während Margaretes Armee vor den Mauern hungrig und unruhig wurde, während sich ihre Verhandlungen über kostbare Tage hinzogen, hatte sich der besiegte Warwick mit dem jungen Edward von York in den Cotswolds zusammengeschlossen. Gemeinsam wagten sie ein verzweifeltes Spiel – sie rasten mit einer kleineren, aber disziplinierten Truppe auf London zu.

Die Stadt, die Margarete ihre Tore verschlossen hatte, öffnete sie nun für Edward. Am 4. März 1461 wurde er von den Bürgern und Lords als König Eduard IV. akklamiert. Margarete, die von diesem Desaster erfuhr, hatte keine andere Wahl, als sich nach Norden zurückzuziehen. Wochen später vernichtete Edward ihre Armee bei Towton in der blutigsten Schlacht, die je auf englischem Boden geschlagen wurde.

Historiker debattieren noch immer, ob Margarete London mit Gewalt hätte nehmen können. Was sicher ist: Ihr Zögern verwandelte einen totalen Lancaster-Sieg in eine katastrophale Niederlage. Hätte sie die Stadt sofort nach St Albans gestürmt, hätte es vielleicht nie einen König Eduard IV. gegeben, keine Schlacht von Towton, kein Jahrzehnt des Exils für die Lancaster-Königin. Dieser Moment – Margarete wartend an den Toren, während ihr Königreich entglitt – wurde zu einem der großen „Was wäre wenn" der Geschichte.`,
		location: {
			name: 'London',
			coordinates: { lat: 51.5074, lng: -0.1278 }
		},
		relatedEntries: ['margaret-of-anjou', 'edward-iv', 'warwick-the-kingmaker', 'second-battle-of-st-albans', 'battle-of-towton'],
		imageUrl: '/images/encyclopedia/gates-of-london.png'
	},
	'the-three-suns': {
		id: 'the-three-suns',
		title: 'The Three Suns (Parhelion)',
		titleDe: 'Die Drei Sonnen (Nebensonne)',
		type: 'event',
		dates: 'February 2, 1461',
		shortDescription: 'The miraculous omen that inspired Edward IV\'s Sun in Splendour badge',
		shortDescriptionDe: 'Das wundersame Omen, das Edwards IV. Abzeichen der Sonne in Pracht inspirierte',
		fullDescription: `On the freezing morning of February 2, 1461, just before the Battle of Mortimer's Cross, Edward of York's soldiers witnessed a terrifying sight in the sky: three suns appeared to rise simultaneously. This rare atmospheric phenomenon, known as a parhelion or "sun dog," occurs when ice crystals in the atmosphere refract sunlight, creating bright spots on either side of the sun.

The superstitious medieval soldiers were frightened by this unnatural sight, fearing it was a bad omen. But the eighteen-year-old Edward, showing the charisma that would make him king, seized the moment. He declared that the three suns represented the Holy Trinity—Father, Son, and Holy Spirit—blessing their cause. More personally, he proclaimed they symbolized the three sons of York: himself, his brother Edmund (recently murdered at Wakefield), and his brother George.

"This is a sign from God!" Edward reportedly cried. "The heavens themselves declare our righteous cause!"

Inspired by this divine interpretation, his troops fought with renewed vigor and crushed the Lancastrian army. Edward adopted the "Sun in Splendour" as his personal badge, a radiant sun with a face that became one of the most recognizable symbols of the Yorkist dynasty. The parhelion transformed a moment of fear into a propaganda triumph that Edward would use for the rest of his reign.`,
		fullDescriptionDe: `Am eisigen Morgen des 2. Februar 1461, kurz vor der Schlacht von Mortimer's Cross, erlebten die Soldaten von Edward von York einen erschreckenden Anblick am Himmel: Drei Sonnen schienen gleichzeitig aufzugehen. Dieses seltene atmosphärische Phänomen, bekannt als Nebensonne oder „Sonnenhund", entsteht, wenn Eiskristalle in der Atmosphäre das Sonnenlicht brechen und helle Flecken auf beiden Seiten der Sonne erzeugen.

Die abergläubischen mittelalterlichen Soldaten waren von diesem unnatürlichen Anblick verängstigt und fürchteten, es sei ein schlechtes Omen. Aber der achtzehnjährige Edward, der das Charisma zeigte, das ihn zum König machen sollte, nutzte den Moment. Er erklärte, dass die drei Sonnen die Heilige Dreifaltigkeit darstellten – Vater, Sohn und Heiliger Geist – die ihre Sache segneten. Persönlicher verkündete er, sie symbolisierten die drei Söhne von York: ihn selbst, seinen Bruder Edmund (kürzlich in Wakefield ermordet) und seinen Bruder George.

„Dies ist ein Zeichen Gottes!" soll Edward gerufen haben. „Der Himmel selbst verkündet unsere gerechte Sache!"

Inspiriert von dieser göttlichen Interpretation kämpften seine Truppen mit erneuerter Kraft und vernichteten die Lancaster-Armee. Edward nahm die „Sonne in Pracht" als sein persönliches Abzeichen an, eine strahlende Sonne mit einem Gesicht, die zu einem der bekanntesten Symbole der Yorkshire-Dynastie wurde. Die Nebensonne verwandelte einen Moment der Angst in einen Propagandatriumph, den Edward für den Rest seiner Regierungszeit nutzen sollte.`,
		relatedEntries: ['edward-iv', 'battle-of-mortimers-cross', 'richard-duke-of-york', 'house-of-york'],
		imageUrl: '/images/encyclopedia/parhelion-three-suns.png'
	},
	'battle-of-mortimers-cross': {
		id: 'battle-of-mortimers-cross',
		title: "Battle of Mortimer's Cross",
		titleDe: 'Schlacht von Mortimer\'s Cross',
		type: 'event',
		dates: 'February 2, 1461',
		shortDescription: 'Edward IV\'s first victory, marked by three suns in the sky',
		shortDescriptionDe: 'Eduards IV. erster Sieg, gekennzeichnet durch drei Sonnen am Himmel',
		fullDescription: `Just weeks after his father's death at Wakefield, the young Edward of York won his first battle at Mortimer's Cross in Herefordshire. Before the battle, his frightened troops witnessed a parhelion—a rare atmospheric phenomenon where three suns appeared in the sky. Edward brilliantly declared this the Holy Trinity blessing their cause and adopted the "Sun in Splendour" as his badge. His army, inspired by the omen, crushed the Lancastrian force led by Jasper Tudor. Among those captured and executed was Owen Tudor, Jasper's father and grandfather of the future Henry VII. Owen reportedly didn't believe he would die until the axe was raised. The victory established Edward as a military commander in his own right and set him on the path to kingship.`,
		fullDescriptionDe: `Nur Wochen nach dem Tod seines Vaters bei Wakefield gewann der junge Edward von York seine erste Schlacht bei Mortimer's Cross in Herefordshire. Vor der Schlacht beobachteten seine verängstigten Truppen eine Nebensonne – ein seltenes atmosphärisches Phänomen, bei dem drei Sonnen am Himmel erschienen. Edward erklärte dies brillant zur Segnung der Heiligen Dreifaltigkeit für ihre Sache und nahm die „Sonne im Glanz" als sein Abzeichen an. Seine Armee, inspiriert vom Omen, vernichtete die Lancaster-Truppe unter Führung von Jasper Tudor. Unter den Gefangenen und Hingerichteten war Owen Tudor, Jaspers Vater und Großvater des späteren Heinrich VII. Owen glaubte Berichten zufolge nicht, dass er sterben würde, bis das Beil erhoben wurde. Der Sieg etablierte Edward als Feldherr aus eigenem Recht und setzte ihn auf den Weg zur Königswürde.`,
		location: {
			name: "Mortimer's Cross, Herefordshire",
			coordinates: { lat: 52.2667, lng: -2.9167 }
		},
		relatedEntries: ['edward-iv', 'jasper-tudor', 'owen-tudor', 'richard-duke-of-york'],
		imageUrl: '/images/encyclopedia/sun-in-splendour.jpg'
	},
	'lord-clifford': {
		id: 'lord-clifford',
		title: 'Lord Clifford (The Butcher)',
		titleDe: 'Lord Clifford (Der Schlächter)',
		type: 'person',
		dates: '1435-1461',
		shortDescription: 'Lancastrian lord notorious for killing York\'s young son Edmund at Wakefield',
		shortDescriptionDe: 'Lancaster-Lord, berüchtigt für die Tötung von Yorks jungem Sohn Edmund bei Wakefield',
		fullDescription: `John Clifford, 9th Baron Clifford, earned his infamous nickname "The Butcher" at the Battle of Wakefield in 1460. His father, Thomas Clifford, had been killed by the Yorkists at the First Battle of St Albans in 1455, and the younger Clifford harbored a burning desire for revenge.

At Wakefield, Clifford allegedly intercepted the fleeing Edmund, Earl of Rutland—the seventeen-year-old son of Richard, Duke of York. According to chronicles, young Edmund begged for mercy on Wakefield Bridge, but Clifford is said to have declared "By God's blood, thy father slew mine, and so will I do thee and all thy kin!" before stabbing the boy. This act of revenge killing, combined with his role in defeating York's army, made Clifford one of the most hated figures among the Yorkists.

Clifford's brutality helped fuel Edward IV's campaign of vengeance. At the Battle of Ferrybridge, just before Towton in 1461, Clifford was killed by an arrow to the throat—poetic justice, some said, for a man who had shown no mercy. His death was celebrated by the Yorkists, and he became a symbol of the war's pitiless cruelty. Shakespeare later dramatized his murder of Rutland in "Henry VI, Part 3," cementing his villainous reputation for centuries.`,
		fullDescriptionDe: `John Clifford, 9. Baron Clifford, erhielt seinen berüchtigten Spitznamen „Der Schlächter" in der Schlacht von Wakefield 1460. Sein Vater, Thomas Clifford, war 1455 in der Ersten Schlacht von St. Albans von den Yorkisten getötet worden, und der jüngere Clifford hegte einen brennenden Wunsch nach Rache.

Bei Wakefield fing Clifford angeblich den fliehenden Edmund, Earl of Rutland, ab – den siebzehnjährigen Sohn von Richard, Herzog von York. Laut Chroniken flehte der junge Edmund auf der Wakefield-Brücke um Gnade, aber Clifford soll erklärt haben: „Bei Gottes Blut, dein Vater erschlug meinen, und so werde ich es dir und all deinen Verwandten antun!" bevor er den Jungen erstach. Diese Rache-Tat, kombiniert mit seiner Rolle bei der Niederlage von Yorks Armee, machte Clifford zu einer der meistgehassten Figuren unter den Yorkisten.

Cliffords Brutalität half, Edwards IV. Rachefeldzug anzuheizen. In der Schlacht von Ferrybridge, kurz vor Towton 1461, wurde Clifford von einem Pfeil in den Hals getötet – poetische Gerechtigkeit, sagten manche, für einen Mann, der keine Gnade gezeigt hatte. Sein Tod wurde von den Yorkisten gefeiert, und er wurde zu einem Symbol für die gnadenlose Grausamkeit des Krieges. Shakespeare dramatisierte später seinen Mord an Rutland in „Heinrich VI., Teil 3" und festigte seinen Ruf als Schurke für Jahrhunderte.`,
		relatedEntries: ['richard-duke-of-york', 'margaret-of-anjou', 'battle-of-wakefield', 'edward-iv']
	}
};

// Terms to automatically link in historical context descriptions
export const linkableTerms: Record<string, string> = {
	'King Richard II': 'richard-ii',
	'Richard II': 'richard-ii',
	'King Henry IV': 'henry-iv',
	'Henry IV': 'henry-iv',
	'Henry Bolingbroke': 'henry-iv',
	'Bolingbroke': 'henry-iv',
	'John of Gaunt': 'henry-iv',
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
	"Mortimer's Cross": 'battle-of-mortimers-cross',
	'Wars of the Roses': 'wars-of-the-roses',
	'Lord Clifford': 'lord-clifford',
	'Clifford': 'lord-clifford',
	'the Butcher': 'lord-clifford',
	'three suns': 'the-three-suns',
	'Three Suns': 'the-three-suns',
	'parhelion': 'the-three-suns',
	'Sun in Splendour': 'the-three-suns',
	'Gates of London': 'gates-of-london',
	'gates of London': 'gates-of-london'
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
