// Script to import lyrics from text files into songs.ts
// Run with: node scripts/importLyrics.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const lyricsMap = {
	'white-rose-red-rose': 'White rose red rose.txt',
	'the-kingmakers-dawn': 'Kingermakers dawn.txt',
	'she-wolf-queen-and-the-king': 'she wolf.txt',
	'the-paper-crown': 'paper crown.txt',
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

const songtextsDir = path.join(__dirname, '..', 'resources', 'songtexts');

console.log('Reading lyrics from:', songtextsDir);
console.log('\nProcessing lyrics files:\n');

for (const [songId, filename] of Object.entries(lyricsMap)) {
	const filepath = path.join(songtextsDir, filename);

	if (fs.existsSync(filepath)) {
		const content = fs.readFileSync(filepath, 'utf-8');
		const lines = content.split('\n').map(line => line.trim());

		console.log(`✓ ${songId}: ${lines.length} lines`);
		console.log(`  File: ${filename}`);
		console.log(`  Preview: ${lines[0]?.substring(0, 50)}...`);
		console.log('');
	} else {
		console.log(`✗ ${songId}: File not found`);
		console.log(`  Expected: ${filename}`);
		console.log('');
	}
}

console.log('\nTo add these lyrics to songs.ts, you can:');
console.log('1. Manually copy from the text files in resources/songtexts/');
console.log('2. Or use a dynamic loading approach (see src/lib/utils/loadLyrics.ts)');
