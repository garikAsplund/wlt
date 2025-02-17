import { error } from '@sveltejs/kit';
import { getPropertyBySlug } from '$lib/properties';

export const load = ({ params }) => {
	const property = getPropertyBySlug(params.slug);
	
	if (!property) {
		throw error(404, 'Property not found');
	}

	return {
		property
	};
};