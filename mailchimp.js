// mailchimp.js - ES6 version
import dotenv from 'dotenv';
import mailchimp from '@mailchimp/mailchimp_marketing';

// Initialize dotenv
dotenv.config();

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.VITE_MAILCHIMP_API_KEY,
  server: process.env.VITE_MAILCHIMP_SERVER
});

const listId = process.env.VITE_MAILCHIMP_LIST_ID;
const subscribingUser = {
  firstName: "Prudence",
  lastName: "McVankab",
  email: "garik.asplund@gmail.com"
};

async function run() {
  const response = await mailchimp.lists.addListMember(listId, {
    email_address: subscribingUser.email,
    status: "pending",
    merge_fields: {
      FNAME: subscribingUser.firstName,
      LNAME: subscribingUser.lastName
    }
  });

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${
      response.id
    }.`
  );
}

run();