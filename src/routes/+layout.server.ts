import { superValidate } from 'sveltekit-superforms';
import type { LayoutServerLoad } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { schema } from '$lib/schema';

export const load: LayoutServerLoad = async ({ locals }) => {
    // Initialize the form
    const form = await superValidate(zod(schema));
    
    return {
        form
    };
};