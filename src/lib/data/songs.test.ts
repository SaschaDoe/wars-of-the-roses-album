import { describe, it, expect } from 'vitest';
import { songs, getSongByTrackNumber, getSongById } from './songs';
import { songsHundredYears } from './songs-hundred-years';
import { findSongContext } from '../stores/audioPlayer';

describe('Wars of the Roses - track data integrity', () => {
	it('has no duplicate track numbers', () => {
		const trackNumbers = songs.map(s => s.trackNumber);
		const unique = new Set(trackNumbers);
		expect(unique.size).toBe(trackNumbers.length);
	});

	it('has no duplicate song IDs', () => {
		const ids = songs.map(s => s.id);
		const unique = new Set(ids);
		expect(unique.size).toBe(ids.length);
	});

	it('track numbers are sequential (1 to N)', () => {
		const sorted = [...songs].sort((a, b) => a.trackNumber - b.trackNumber);
		for (let i = 0; i < sorted.length; i++) {
			expect(sorted[i].trackNumber).toBe(i + 1);
		}
	});

	it('songs array is ordered by track number', () => {
		for (let i = 1; i < songs.length; i++) {
			expect(songs[i].trackNumber).toBeGreaterThan(songs[i - 1].trackNumber);
		}
	});

	it('every song has an audioUrl', () => {
		for (const song of songs) {
			expect(song.audioUrl, `Song "${song.title}" (track ${song.trackNumber}) missing audioUrl`).toBeTruthy();
		}
	});

	it('every song has a non-empty title', () => {
		for (const song of songs) {
			expect(song.title.length).toBeGreaterThan(0);
		}
	});

	it('every song has lyrics', () => {
		for (const song of songs) {
			expect(song.lyrics.length, `Song "${song.title}" has no lyrics`).toBeGreaterThan(0);
		}
	});

	it('every song has historical context with year', () => {
		for (const song of songs) {
			expect(song.historicalContext.year, `Song "${song.title}" missing year`).toBeTruthy();
		}
	});

	it('Bridge of the Broken is track 9', () => {
		const track9 = getSongByTrackNumber(9);
		expect(track9).toBeDefined();
		expect(track9!.id).toBe('towton-bridge-of-the-broken');
		expect(track9!.title).toBe('Towton - The Bridge of the Broken');
	});

	it('no "Original Version" or "Die by the Damned" exists as a separate track', () => {
		const dieByDamned = songs.find(s => s.id === 'towton-die-by-the-damned');
		expect(dieByDamned).toBeUndefined();
	});

	it('getSongByTrackNumber returns correct song for each track', () => {
		for (const song of songs) {
			const found = getSongByTrackNumber(song.trackNumber);
			expect(found).toBeDefined();
			expect(found!.id).toBe(song.id);
		}
	});

	it('getSongById returns correct song for each ID', () => {
		for (const song of songs) {
			const found = getSongById(song.id);
			expect(found).toBeDefined();
			expect(found!.trackNumber).toBe(song.trackNumber);
		}
	});
});

describe('A Hundred Years of Glory - track data integrity', () => {
	it('has no duplicate track numbers', () => {
		const trackNumbers = songsHundredYears.map(s => s.trackNumber);
		const unique = new Set(trackNumbers);
		expect(unique.size).toBe(trackNumbers.length);
	});

	it('has no duplicate song IDs', () => {
		const ids = songsHundredYears.map(s => s.id);
		const unique = new Set(ids);
		expect(unique.size).toBe(ids.length);
	});

	it('track numbers are sequential (1 to N)', () => {
		const sorted = [...songsHundredYears].sort((a, b) => a.trackNumber - b.trackNumber);
		for (let i = 0; i < sorted.length; i++) {
			expect(sorted[i].trackNumber).toBe(i + 1);
		}
	});

	it('songs array is ordered by track number', () => {
		for (let i = 1; i < songsHundredYears.length; i++) {
			expect(songsHundredYears[i].trackNumber).toBeGreaterThan(songsHundredYears[i - 1].trackNumber);
		}
	});

	it('every song has an audioUrl', () => {
		for (const song of songsHundredYears) {
			expect(song.audioUrl, `Song "${song.title}" (track ${song.trackNumber}) missing audioUrl`).toBeTruthy();
		}
	});

	it('every song has a non-empty title', () => {
		for (const song of songsHundredYears) {
			expect(song.title.length).toBeGreaterThan(0);
		}
	});
});

describe('No ID collisions between albums', () => {
	it('Wars of the Roses and Hundred Years have no shared song IDs', () => {
		const warsIds = new Set(songs.map(s => s.id));
		for (const song of songsHundredYears) {
			expect(warsIds.has(song.id), `ID collision: "${song.id}" exists in both albums`).toBe(false);
		}
	});
});

describe('Audio player navigation - play all songs in order', () => {
	it('can navigate forward through all Wars of the Roses songs', () => {
		for (let i = 0; i < songs.length - 1; i++) {
			const ctx = findSongContext(songs[i].id);
			expect(ctx, `Could not find context for "${songs[i].title}"`).not.toBeNull();
			expect(ctx!.index).toBe(i);

			const nextSong = ctx!.songs[ctx!.index + 1];
			expect(nextSong, `No next song after "${songs[i].title}" (track ${songs[i].trackNumber})`).toBeDefined();
			expect(nextSong.id).toBe(songs[i + 1].id);
		}
	});

	it('can navigate backward through all Wars of the Roses songs', () => {
		for (let i = songs.length - 1; i > 0; i--) {
			const ctx = findSongContext(songs[i].id);
			expect(ctx, `Could not find context for "${songs[i].title}"`).not.toBeNull();

			const prevSong = ctx!.songs[ctx!.index - 1];
			expect(prevSong, `No previous song before "${songs[i].title}" (track ${songs[i].trackNumber})`).toBeDefined();
			expect(prevSong.id).toBe(songs[i - 1].id);
		}
	});

	it('cannot navigate before first song', () => {
		const ctx = findSongContext(songs[0].id);
		expect(ctx).not.toBeNull();
		expect(ctx!.index).toBe(0);
	});

	it('cannot navigate past last song', () => {
		const lastSong = songs[songs.length - 1];
		const ctx = findSongContext(lastSong.id);
		expect(ctx).not.toBeNull();
		expect(ctx!.index).toBe(songs.length - 1);
	});

	it('can navigate forward through all Hundred Years songs', () => {
		for (let i = 0; i < songsHundredYears.length - 1; i++) {
			const ctx = findSongContext(songsHundredYears[i].id);
			expect(ctx, `Could not find context for "${songsHundredYears[i].title}"`).not.toBeNull();
			expect(ctx!.index).toBe(i);

			const nextSong = ctx!.songs[ctx!.index + 1];
			expect(nextSong, `No next song after "${songsHundredYears[i].title}"`).toBeDefined();
			expect(nextSong.id).toBe(songsHundredYears[i + 1].id);
		}
	});

	it('can navigate backward through all Hundred Years songs', () => {
		for (let i = songsHundredYears.length - 1; i > 0; i--) {
			const ctx = findSongContext(songsHundredYears[i].id);
			expect(ctx).not.toBeNull();

			const prevSong = ctx!.songs[ctx!.index - 1];
			expect(prevSong, `No previous song before "${songsHundredYears[i].title}"`).toBeDefined();
			expect(prevSong.id).toBe(songsHundredYears[i - 1].id);
		}
	});

	it('findSongContext returns null for unknown song ID', () => {
		const ctx = findSongContext('nonexistent-song');
		expect(ctx).toBeNull();
	});

	it('each song is found in exactly one album', () => {
		for (const song of songs) {
			const ctx = findSongContext(song.id);
			expect(ctx).not.toBeNull();
			expect(ctx!.songs).toBe(songs);
		}
		for (const song of songsHundredYears) {
			const ctx = findSongContext(song.id);
			expect(ctx).not.toBeNull();
			expect(ctx!.songs).toBe(songsHundredYears);
		}
	});
});

describe('Album metadata consistency', () => {
	it('Wars of the Roses album trackCount matches actual song count', async () => {
		const { albums } = await import('./albums');
		const warsAlbum = albums.find(a => a.slug === 'wars-of-the-roses');
		expect(warsAlbum).toBeDefined();
		expect(warsAlbum!.trackCount).toBe(songs.length);
	});

	it('Hundred Years album trackCount matches actual song count', async () => {
		const { albums } = await import('./albums');
		const hundredAlbum = albums.find(a => a.slug === 'a-hundred-years-of-glory');
		expect(hundredAlbum).toBeDefined();
		expect(hundredAlbum!.trackCount).toBe(songsHundredYears.length);
	});
});
