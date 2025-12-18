import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	// For Wars of the Roses, redirect to the main encyclopedia
	if (params.slug === 'wars-of-the-roses') {
		throw redirect(301, '/encyclopedia');
	}

	// For other albums, show 404 (no encyclopedia yet)
	return {
		album: params.slug
	};
};
