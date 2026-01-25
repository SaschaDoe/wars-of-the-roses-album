/**
 * Lyrics processing utility
 * - Removes technical annotations (rhythm, tempo, musical directions)
 * - Provides German translations interleaved with English when in German mode
 */

import { lyricsTranslationsDe as lyricsTranslations } from '$lib/data/lyrics-translations-de';

export { lyricsTranslations };

// Patterns for lines that should be completely removed (production notes)
const ANNOTATION_PATTERNS = [
	/^\(Rhythm:.*\)$/i,
	/^\(Tempo.*\)$/i,
	/^\(Build up.*\)$/i,
	/^\(Guitar Solo[^)]*\)$/i,
	/^\(A duel between.*\)$/i,
	/^\(The "Twist".*\)$/i,
	/^\(Narrative.*\)$/i,
	/^\(Music.*\)$/i,
	/^\(Back to the.*\)$/i,
	/^\(Classic Sabaton.*\)$/i,
];

/**
 * Check if a line is a technical annotation that should be removed
 */
function isAnnotation(line: string): boolean {
	const trimmed = line.trim();
	return ANNOTATION_PATTERNS.some(pattern => pattern.test(trimmed));
}

export interface LyricLine {
	english: string;
	german?: string;
	isSection: boolean;
	isEmpty: boolean;
}

/**
 * Process lyrics for display, removing annotations and optionally adding German translations.
 * Translations array is parallel to the original lyrics array (same indices).
 */
export function processLyrics(
	lyrics: string[],
	translations?: (string | null)[]
): LyricLine[] {
	const result: LyricLine[] = [];

	for (let i = 0; i < lyrics.length; i++) {
		const line = lyrics[i];

		// Skip technical annotations
		if (isAnnotation(line)) continue;

		const isSection = line.startsWith('[') || /^\([A-Za-z]+ \d+\)$/.test(line.trim());
		const isEmpty = line.trim() === '';

		result.push({
			english: line,
			german: translations?.[i] ?? undefined,
			isSection,
			isEmpty
		});
	}

	return result;
}

/**
 * Get processed lyrics with German translations for a specific song
 */
export function getLyricsWithTranslations(
	songId: string,
	lyrics: string[],
	showGerman: boolean
): LyricLine[] {
	const translations = showGerman ? lyricsTranslations[songId] : undefined;
	return processLyrics(lyrics, translations);
}
