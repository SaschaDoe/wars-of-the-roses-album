import { getSongsForAlbum } from '$lib/data';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params, parent }) => {
	const songs = getSongsForAlbum(params.slug);

	return {
		songs
	};
};
