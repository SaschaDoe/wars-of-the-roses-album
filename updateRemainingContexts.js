import fs from 'fs';

const contexts = {
  'the-kingmakers-pawn': {
    title: 'The Kingmaker\'s Gambit - A Failed Coup',
    description: `After defeating Edward IV's forces at Edgecote in 1469, Warwick executed the queen's father and brother, then captured the king himself. The Kingmaker's plan seemed perfect: control the king, control the kingdom. But Warwick discovered that medieval power didn't work that way. When he summoned Parliament in Edward's name, the lords refused to obey. The kingdom wouldn't accept Warwick ruling through a puppet king—legitimacy mattered more than force. Meanwhile, Lancastrian forces rose in the north, forcing Warwick to release Edward to fight them. But Edward, once freed, moved swiftly to crush Warwick's remaining allies and uncover his treasonous correspondence. Checkmate. The gambit had failed. Warwick faced a terrible choice: submit to Edward's mercy or commit the ultimate betrayal—ally with his former enemy, Queen Margaret.`,
    year: '1469-1470'
  },
  'epic-rap-battle-of-the-roses': {
    title: 'The Propaganda War - Words as Weapons',
    description: `Medieval warfare wasn't just fought with swords—it was fought with words. This imagined rap battle between Warwick and Margaret represents the real propaganda war both sides waged. They issued proclamations calling each other traitors, spread rumors about their enemies' legitimacy, and used heralds to deliver insults and challenges. The song captures the personal hatred between these two power brokers who destroyed each other's families. But it also shows something remarkable: by 1470, Warwick and Margaret actually did ally against Edward IV, setting aside their blood feud to restore Henry VI. The song imagines this unlikely partnership forming—two former enemies united by Edward's betrayal. The references to Shakespeare's insults show how these historical figures became immortal characters in English literature.`,
    year: '1455-1471'
  },
  'kaboom-2-0-live-wacken-2025': {
    title: 'Gunpowder Folly - When Technology Fails',
    description: `At the Battle of Barnet in 1471, Warwick brought French cannons, confident that modern artillery would defeat Edward IV. But the battle was fought in thick fog on Easter morning. Warwick's gunners fired blindly into the mist, hitting nothing. Worse, when the Earl of Oxford's troops returned from pursuing enemies, Warwick's forces mistook Oxford's star-and-streams banner for Edward's sun-and-roses in the fog. Warwick's own cannons fired on his allies, causing panic and breaking his lines. This darkly comic song tells the story of early gunpowder weapons' unreliability. The "fancy guns" caused more problems than they solved, accidentally bombarding cows, barns, and Warwick's own troops. Technology doesn't automatically bring victory—sometimes you're better off with a longbow.`,
    year: '1471'
  },
  'the-kingmakers-fall': {
    title: 'Barnet - The Death of Warwick',
    description: `April 14, 1471, Easter Sunday. Warwick had gambled everything on one final battle at Barnet. The fog that ruined his cannons also confused his troops. When the friendly fire incident broke his lines, Edward IV pressed the attack. Warwick, in full armor, tried to reach his horse to escape. But Edward's forces caught him and killed him. The song is written from Warwick's dying perspective—the "Cedar of England" falling, seeing his student Edward triumph over his teacher. In the final verses, Warwick witnesses the Battle of Tewkesbury weeks later, where Edward's forces kill Queen Margaret's son, Prince Edward. The last Lancastrian prince died on the same battlefield where Lancaster thought they'd won. Warwick's death ended the age of the over-mighty noble. Shakespeare would later quote Warwick: "Why, what is pomp, rule, reign, but earth and dust? And, live we how we can, yet die we must."`,
    year: '1471'
  },
  'the-winter-of-all-discontent': {
    title: 'Richard III - Shakespeare\'s Villain Lives',
    description: `After Edward IV's death in 1483, his brother Richard III seized the throne by imprisoning his nephews (the "Princes in the Tower") and declaring them illegitimate. Richard's brief reign became synonymous with villainy, thanks largely to Shakespeare's famous play. This song embraces the Shakespearean Richard, from his opening line "Now is the winter of our discontent" to his death cry "A horse! A horse! My kingdom for a horse!" The song lists Richard's alleged crimes: drowning his brother Clarence in wine, executing Lord Hastings without trial, and the disappeared princes. But it also breaks the fourth wall—Richard complains to the songwriter about being created just to be killed off in the second-to-last song. This meta-theatrical moment captures how Richard III became more legend than history, a theatrical villain who dominates every scene he's in.`,
    year: '1483-1485'
  },
  'rejoice': {
    title: 'The Tudor Rose - Unity Through Marriage',
    description: `On August 22, 1485, Henry Tudor defeated and killed Richard III at Bosworth Field. But military victory alone wouldn't end the wars—only marriage could. On January 18, 1486, Henry VII married Elizabeth of York, daughter of Edward IV, uniting the red rose of Lancaster with the white rose of York. This wedding song celebrates the union that created the Tudor dynasty. The new Tudor Rose badge combined both roses, symbolizing an end to 30 years of civil war. The song's joyful tone and Broadway musical style reflects how contemporaries saw this moment—after decades of bloodshed, England finally had peace. The drunken uncle's toast adds comic humanity to the grand historical moment. The marriage worked: Henry and Elizabeth's granddaughter would be Elizabeth I, the Virgin Queen who would rule England's golden age.`,
    year: '1486'
  },
  'happy-birthday-stomp': {
    title: 'Tavern Life - The Common People\'s Story',
    description: `While nobles fought for crowns, ordinary people gathered in taverns to celebrate the simple victory of surviving another year. This raucous folk song captures medieval English tavern culture—ale flowing, lutes playing badly, and working people stomping and dancing. The song's philosophy is simple: "Some men have silver, some have land...But what's the use of all that toil? When you are laid beneath the soil!" Why fight over roses when you could drink beer with friends instead? The detailed pirate-style names and the call-and-response choruses echo actual medieval drinking songs. It's the anti-war song of the album—while nobles killed each other over inheritance claims, tavern-goers understood that life was too short to waste on someone else's ambitions. This is history from below, the story of the people who just wanted to survive the wars, not win them.`,
    year: '1455-1485'
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
console.log('\n✅ All remaining historical contexts updated!');
