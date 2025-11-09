import { linkableTerms } from '$lib/data/encyclopedia';

export interface TextSegment {
	text: string;
	isLink: boolean;
	linkId?: string;
}

/**
 * Parse text and convert encyclopedia terms into linkable segments
 */
export function linkifyText(text: string): TextSegment[] {
	const segments: TextSegment[] = [];
	let remainingText = text;
	let lastIndex = 0;

	// Sort terms by length (longest first) to match longer phrases first
	const sortedTerms = Object.keys(linkableTerms).sort((a, b) => b.length - a.length);

	// Track which positions have already been matched
	const matchedPositions = new Set<number>();

	// Find all matches
	const matches: Array<{ start: number; end: number; term: string; id: string }> = [];

	for (const term of sortedTerms) {
		// Create regex to match the term (case insensitive, whole word)
		const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
		let match;

		while ((match = regex.exec(text)) !== null) {
			const start = match.index;
			const end = start + match[0].length;

			// Check if this position overlaps with an existing match
			let overlaps = false;
			for (let i = start; i < end; i++) {
				if (matchedPositions.has(i)) {
					overlaps = true;
					break;
				}
			}

			if (!overlaps) {
				matches.push({
					start,
					end,
					term: match[0],
					id: linkableTerms[term]
				});

				// Mark positions as matched
				for (let i = start; i < end; i++) {
					matchedPositions.add(i);
				}
			}
		}
	}

	// Sort matches by position
	matches.sort((a, b) => a.start - b.start);

	// Build segments
	let currentPos = 0;

	for (const match of matches) {
		// Add text before the match
		if (match.start > currentPos) {
			segments.push({
				text: text.substring(currentPos, match.start),
				isLink: false
			});
		}

		// Add the match as a link
		segments.push({
			text: match.term,
			isLink: true,
			linkId: match.id
		});

		currentPos = match.end;
	}

	// Add remaining text
	if (currentPos < text.length) {
		segments.push({
			text: text.substring(currentPos),
			isLink: false
		});
	}

	return segments;
}
