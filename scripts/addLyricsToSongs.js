// Script to automatically add all lyrics from text files to songs.ts
// Run with: node scripts/addLyricsToSongs.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Map song IDs to lyric filenames
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

// Read and format lyrics for each song
const lyricsData = {};

for (const [songId, filename] of Object.entries(lyricsMap)) {
	const filepath = path.join(songtextsDir, filename);

	if (fs.existsSync(filepath)) {
		const content = fs.readFileSync(filepath, 'utf-8');
		// Split by lines and format as array items
		const lines = content.split('\n').map(line => {
			const trimmed = line.trim();
			// Escape single quotes and backslashes for JavaScript string
			const escaped = trimmed.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
			// Use double quotes if line contains apostrophes, otherwise single quotes
			if (trimmed.includes("'")) {
				return `\t\t\t"${trimmed.replace(/"/g, '\\"')}"`;
			} else {
				return `\t\t\t'${escaped}'`;
			}
		});

		lyricsData[songId] = lines;
		console.log(`✓ Processed ${songId}: ${lines.length} lines`);
	} else {
		console.log(`✗ File not found: ${filename}`);
	}
}

console.log('\n=== Instructions ===');
console.log('The lyrics have been processed. To add them to songs.ts:');
console.log('1. Open src/lib/data/songs.ts');
console.log('2. Find each song by its ID');
console.log('3. Replace "lyrics: []," with the formatted lyrics array');
console.log('\nOr you can manually copy from the text files in resources/songtexts/');
