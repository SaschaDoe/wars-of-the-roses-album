import { error } from '@sveltejs/kit';
import { getAlbumBySlug } from '$lib/data/albums';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ params }) => {
	const album = getAlbumBySlug(params.slug);

	if (!album) {
		throw error(404, 'Album not found');
	}

	return {
		album
	};
};
