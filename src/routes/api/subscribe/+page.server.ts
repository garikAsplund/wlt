import { superValidate, message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { schema } from '$lib/schema';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(schema));

	return { form };
};

export const actions = {
	default: async ({ request, fetch }) => {
	  const form = await superValidate(request, zod(schema));
	  console.log(form);
	  
	  if (!form.valid) {
		return fail(400, { form });
	  } else {
		// Attempt to subscribe to Mailchimp
		const mailchimpResponse = await fetch('/api/subscribe', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(form)
		});
		
		// Parse the Mailchimp response
		const mailchimpData = await mailchimpResponse.json();
		
		// Return just the Mailchimp message
		return message(form, mailchimpData.message || "Subscription processed");
	  }
	}
  } satisfies Actions;