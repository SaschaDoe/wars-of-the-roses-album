// Re-export all data and provide helpers
import { songs as warsOfRosesSongs, type Song } from './songs';
import { songsHundredYears } from './songs-hundred-years';
import { albums, getAlbumBySlug, type Album } from './albums';
import { encyclopediaEntries, type EncyclopediaEntry, getEncyclopediaEntry, getAllEntries, getEntriesByType } from './encyclopedia';
import { timelineEvents, type TimelineEvent } from './timeline';

export type { Song, Album, EncyclopediaEntry, TimelineEvent };
export { albums, getAlbumBySlug, encyclopediaEntries, getEncyclopediaEntry, getAllEntries, getEntriesByType, timelineEvents };

// Get songs for a specific album
export function getSongsForAlbum(albumSlug: string): Song[] {
	switch (albumSlug) {
		case 'wars-of-the-roses':
			return warsOfRosesSongs;
		case 'a-hundred-years-of-glory':
			return songsHundredYears;
		default:
			return [];
	}
}

// Get a specific song from an album
export function getSongFromAlbum(albumSlug: string, songId: string): Song | undefined {
	const songs = getSongsForAlbum(albumSlug);
	return songs.find(song => song.id === songId);
}

// Get encyclopedia entries for an album (if applicable)
export function getEncyclopediaForAlbum(albumSlug: string): EncyclopediaEntry[] {
	switch (albumSlug) {
		case 'wars-of-the-roses':
			return encyclopediaEntries;
		default:
			return [];
	}
}

// Get timeline events for an album (if applicable)
export function getTimelineForAlbum(albumSlug: string): TimelineEvent[] {
	switch (albumSlug) {
		case 'wars-of-the-roses':
			return timelineEvents;
		default:
			return [];
	}
}
