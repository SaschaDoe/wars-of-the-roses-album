import { error } from '@sveltejs/kit';
import { getSongsForAlbum, getSongFromAlbum } from '$lib/data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const song = getSongFromAlbum(params.slug, params.id);
	const songs = getSongsForAlbum(params.slug);

	if (!song) {
		throw error(404, 'Song not found');
	}

	const currentIndex = songs.findIndex(s => s.id === song.id);
	const prevSong = currentIndex > 0 ? songs[currentIndex - 1] : null;
	const nextSong = currentIndex < songs.length - 1 ? songs[currentIndex + 1] : null;

	return {
		song,
		prevSong,
		nextSong
	};
};
