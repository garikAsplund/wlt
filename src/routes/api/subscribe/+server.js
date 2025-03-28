// src/routes/api/subscribe/+server.js
import { json } from '@sveltejs/kit';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Configure Mailchimp with Vite env vars
mailchimp.setConfig({
	apiKey: import.meta.env.VITE_MAILCHIMP_API_KEY,
	server: import.meta.env.VITE_MAILCHIMP_SERVER
});

const listId = import.meta.env.VITE_MAILCHIMP_LIST_ID;
// console.log('Mailchimp List ID:', listId);

export async function POST({ request }) {
	try {
		const data = await request.json();
		const {
			email
			// firstName,
			// lastName
		} = data.data;

		// console.log({ data });

		// Using the Mailchimp SDK instead of raw fetch
		const response = await mailchimp.lists.addListMember(listId, {
			email_address: email,
			status: 'pending'
			// merge_fields: {
			// 	FNAME: firstName || '',
			// 	LNAME: lastName || ''
			// }
		});

		return json({
			success: true,
			message: 'Successfully subscribed!'
		});
	} catch (error) {
		console.error('Subscription error:', error);
		// Check if this is the "Member Exists" error
		if (error.response && error.response.body && error.response.body.title === 'Member Exists') {
			return json({
				success: true,
				message:
					"You're already on our mailing list! If you haven't received a confirmation email, please check your spam folder."
			});
		}

		// For other errors
		return json(
			{
				success: false,
				message: "Sorry, we couldn't process your subscription. Please try again later."
			},
			{ status: 400 }
		);
	}
}
