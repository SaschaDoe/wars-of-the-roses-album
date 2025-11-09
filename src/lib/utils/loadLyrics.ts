// Mapping of song IDs to their lyric file names
const lyricsFileMap: Record<string, string> = {
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

/**
 * Load lyrics for a song from the text files
 * @param songId - The ID of the song
 * @returns Array of lyric lines, or empty array if not found
 */
export async function loadLyrics(songId: string): Promise<string[]> {
	const filename = lyricsFileMap[songId];
	if (!filename) {
		return [];
	}

	try {
		// In production, lyrics would be fetched from your API/CDN
		// For now, you can manually copy the lyrics or load from static files
		const response = await fetch(`/lyrics/${filename}`);
		if (!response.ok) {
			return [];
		}
		const text = await response.text();
		return text.split('\n').filter(line => line.trim() !== '');
	} catch (error) {
		console.error(`Failed to load lyrics for ${songId}:`, error);
		return [];
	}
}

/**
 * Check if a song has lyrics available
 */
export function hasLyrics(songId: string): boolean {
	return songId in lyricsFileMap;
}

/**
 * Get list of song IDs that have lyrics
 */
export function getSongsWithLyrics(): string[] {
	return Object.keys(lyricsFileMap);
}

/**
 * Get list of song IDs that don't have lyrics
 */
export function getSongsWithoutLyrics(allSongIds: string[]): string[] {
	return allSongIds.filter(id => !hasLyrics(id));
}
