import { timelineEvents } from '$lib/data/timeline';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const event = timelineEvents.find(e => {
		const eventId = `${e.year.toLowerCase()}-${e.title.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`;
		return eventId === params.id;
	});

	if (!event) {
		throw error(404, 'Event not found');
	}

	return {
		event
	};
};
