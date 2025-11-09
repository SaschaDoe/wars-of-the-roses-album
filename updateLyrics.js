import fs from 'fs';
import path from 'path';

const lyricsMap = {
	'the-three-suns': 'three suns.txt',
	'no-ransom-called': 'No Ransom Called.txt',
	'to-the-gates-of-london': 'to the gates of london.txt',
	'towton-die-by-the-damned': 'Die by the Damned.txt',
	'sacred-lies': 'The Sacred Lie.txt',
	'oh-god-see-our-plight': 'Oh, God, See our plight.txt',
	'reaving-river-rats': 'Reaving River Rats.txt',
	'the-kingmakers-scorn': 'The Kingmakers scorn2.txt',
	'le-temple-de-boccace': 'Le Temple de Boccace.txt',
	'melusine': 'Melusine.txt',
	'the-kingmakers-pawn': 'The Kingmakers Pawn.txt',
	'epic-rap-battle-of-the-roses': 'full rap battle.txt',
	'kaboom-2-0-live-wacken-2025': 'Kaboom 2.txt',
	'the-kingmakers-fall': 'Finale.txt',
	'the-winter-of-all-discontent': 'The Winter of all Discontent.txt',
	'rejoice': 'Recoice.txt',
	'happy-birthday-stomp': 'Happy Birthday Stomp.txt'
};

const songtextsDir = './resources/songtexts';
const songsFile = './src/lib/data/songs.ts';

console.log('Reading songs.ts...');
let songsContent = fs.readFileSync(songsFile, 'utf-8');

for (const [songId, filename] of Object.entries(lyricsMap)) {
	const filepath = path.join(songtextsDir, filename);

	if (!fs.existsSync(filepath)) {
		console.log(`⚠ Skipping ${songId}: file not found`);
		continue;
	}

	const lyricsContent = fs.readFileSync(filepath, 'utf-8');
	const lines = lyricsContent.split('\n').map(line => line.trim());

	// Format as TypeScript array
	const formattedLines = lines.map(line => {
		// Escape quotes
		const escaped = line.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
		return `\t\t\t"${escaped}"`;
	});

	const lyricsArray = `[\n${formattedLines.join(',\n')}\n\t\t]`;

	// Find and replace lyrics: [], for this song
	const pattern = new RegExp(
		`(id: '${songId}',[\\s\\S]*?lyrics: )\\[\\]`,
		'g'
	);

	const before = songsContent;
	songsContent = songsContent.replace(pattern, `$1${lyricsArray}`);

	if (songsContent !== before) {
		console.log(`✓ Updated ${songId}`);
	} else {
		console.log(`⚠ Could not find pattern for ${songId}`);
	}
}

console.log('\nWriting updated songs.ts...');
fs.writeFileSync(songsFile, songsContent, 'utf-8');
console.log('✓ Done! All lyrics have been added.');
