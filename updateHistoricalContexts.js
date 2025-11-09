import fs from 'fs';

const contexts = {
  'to-the-gates-of-london': {
    title: 'The Race for London - Strategic Hesitation',
    description: `After defeating Warwick at the Second Battle of St Albans in February 1461, Queen Margaret had rescued King Henry VI and held the strongest military position. London lay open before her. But the city feared her northern army and hesitated to open its gates. While Margaret waited for assurances, Warwick and young Edward raced south. Edward entered London unopposed while Margaret's army, running low on supplies, had to withdraw. This duet captures both perspectives—Margaret's initial triumph turning to frustration, and the Yorkist desperate gamble that paid off. Control of London meant control of legitimacy, wealth, and the symbolic heart of England. Margaret's delay cost the Lancastrians the crown. Days later, Edward was proclaimed King Edward IV.`,
    year: '1461'
  },
  'towton-die-by-the-damned': {
    title: 'Towton - The Bloodiest Day',
    description: `Palm Sunday, March 29, 1461. Between 50,000-80,000 men met on a snow-swept field in Yorkshire in the largest battle ever fought on English soil. A blizzard gave the Yorkists a crucial advantage—the south wind carried their arrows farther while Lancastrian arrows fell short. The battle raged for ten hours, ending only when the Duke of Norfolk's reinforcements broke the Lancastrian flank. Casualties reached 28,000—roughly 1% of England's entire population died in a single day. The Cock Beck stream became so choked with bodies that men crossed on bridges of corpses. The song wrestles with a terrible question: is this brutal slaughter the only way to determine who should rule? The Yorkist victory was absolute, but the cost was England's collective trauma—brother killing brother, father killing son.`,
    year: '1461'
  },
  'sacred-lies': {
    title: 'Sanctifying the Throne - Religion as Weapon',
    description: `Edward IV understood that military victory wasn't enough—he needed God's blessing. Warwick's brother, George Neville, Archbishop of York, became the key to legitimizing Edward's rule. This song explores how the Neville brothers weaponized religion: George's sermon at St Paul's declared Henry VI's oath-breaking justified Edward's claim, while the coronation ceremony at Westminster used sacred ritual to transform Edward from usurper to divinely anointed king. The incense, holy water, and consecrated oil "sanctified the lies." But some in the crowd saw through the manipulation—they'd learned that political power, not divine will, decided who wore the crown. The song captures a turning point in medieval thinking: faith was being eroded by cynical realpolitik.`,
    year: '1461'
  },
  'oh-god-see-our-plight': {
    title: 'Kyrie Eleison - The People\'s Lament',
    description: `While nobles fought for roses and crowns, common people suffered. This haunting song, mixing English, French, and Latin, voices the despair of ordinary folk caught in endless civil war. "Kyrie Eleison" (Lord, have mercy) was a prayer they knew from church—now it became a plea for England's tormented soul. The song's stark lyrics capture the upside-down morality of the wars: blood buys crowns, treason becomes power, kings die and are replaced, but the suffering continues. The mixing of languages reflects England's divided identity—French from the Norman conquest, Latin from the Church, English from the people. Together they cry out: Oh God, see our plight. This is the war from the perspective of those who had no choice which rose to follow.`,
    year: '1455-1485'
  },
  'reaving-river-rats': {
    title: 'Licensed Piracy - Privateers on the Thames',
    description: `While nobles fought on land, Warwick employed "privateers"—officially sanctioned pirates—to raid ships on the Thames and English Channel. This darkly comic song shows the war's absurdity through the eyes of these river rats. They don't care who wins—Lancaster or York, they'll steal from both. Warwick gets his cut of their plunder while maintaining plausible deniability. The song is filled with colorful pirate names and gallows humor about Execution Dock at Wapping, where pirates were hanged and left for three tides. These weren't noble heroes—they were opportunists who learned their criminal trades from watching nobles commit treason and murder. The song's cheerful tone masks a bitter truth: war corrupts everything it touches, and the powerful taught the powerless that might makes right.`,
    year: '1460s'
  },
  'the-kingmakers-scorn': {
    title: 'Betrayal in France - Edward\'s Secret Marriage',
    description: `In 1464, while Warwick was in France negotiating a royal marriage alliance, Edward IV secretly married Elizabeth Woodville, a commoner's widow. The song captures Warwick's humiliation when he learned the news—French courtiers mocked him as the fool building "castles of dust in the air." Warwick had shed blood at Towton to crown Edward, but the king had betrayed him for a "commoner's kiss." Worse, Edward elevated the Woodville family to positions of power, distributing lands and titles that Warwick felt belonged to his own family. The Kingmaker's carefully constructed political edifice was "cracked at the stone." This personal betrayal transformed Warwick from Edward's greatest supporter into his most dangerous enemy. The song ends ominously: "A king is a man, and a man can be broken."`,
    year: '1464-1469'
  },
  'le-temple-de-boccace': {
    title: 'The Tragic King - Henry VI Through Margaret\'s Eyes',
    description: `This intimate song gives voice to Queen Margaret's private thoughts about her husband Henry VI. The title references Boccaccio's "De Casibus Virorum Illustrium" (The Fall of Princes), which chronicled tragic rulers destroyed by fate. Margaret watches Henry pray and read scripture—a gentle, scholarly man utterly unsuited for the brutal world of 15th-century power politics. He's a "winter lamb lost in the bitterest wind." While Henry retreats into religious devotion, Margaret must wear the armor and fight the battles. The song's most haunting element is Margaret's vision: Henry VI's peaceful nature will indirectly lead to the English Reformation and eventually to Queen Elizabeth I—a Virgin Queen presiding over a golden age. But in the present, Margaret can only lament watching her gentle husband crushed by an age that demanded ruthlessness.`,
    year: '1445-1471'
  },
  'melusine': {
    title: 'Witchcraft Accusations - The Melusine Legend',
    description: `How did a commoner's widow bewitch a king? Warwick and his allies spread rumors that Elizabeth Woodville and her mother Jacquetta practiced witchcraft. The Woodvilles claimed descent from Melusine, a water fairy from medieval French legend. The song retells the legend: a knight encountered Melusine at a fountain and married her, gaining wealth and power. But she made him promise never to see her on Saturdays. When he broke his vow, he discovered she transformed into a serpent from the waist down. Her shriek—the "Cri de Fae"—cursed the bloodline forever. Warwick argued that Jacquetta used this same fairy magic to ensnare Edward IV with "leaden dolls and twisted charms." These witchcraft accusations were political weapons, attempting to delegitimize Edward's marriage and the Woodville family's power through supernatural conspiracy theories.`,
    year: '1464-1483'
  }
};

const songsFile = './src/lib/data/songs.ts';
let content = fs.readFileSync(songsFile, 'utf-8');

for (const [songId, context] of Object.entries(contexts)) {
  const titlePattern = new RegExp(
    `(id: '${songId}',[\\s\\S]*?historicalContext: {\\s*title: )'[^']*'`,
    'g'
  );
  const descPattern = new RegExp(
    `(id: '${songId}',[\\s\\S]*?description: )\`[^\`]*\``,
    'g'
  );

  content = content.replace(titlePattern, `$1'${context.title}'`);
  content = content.replace(descPattern, `$1\`${context.description}\``);

  console.log(`✓ Updated ${songId}`);
}

fs.writeFileSync(songsFile, content, 'utf-8');
console.log('\n✅ All historical contexts updated!');
