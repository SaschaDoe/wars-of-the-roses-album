import { getSongById } from '$lib/data/songs';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const song = getSongById(params.id);

	if (!song) {
		throw error(404, 'Song not found');
	}

	return {
		song
	};
};
