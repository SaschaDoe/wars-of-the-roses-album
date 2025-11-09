import { getEncyclopediaEntry } from '$lib/data/encyclopedia';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const entry = getEncyclopediaEntry(params.id);

	if (!entry) {
		throw error(404, 'Encyclopedia entry not found');
	}

	return {
		entry
	};
};
