const client = require("@mailchimp/mailchimp_marketing");

export default function handler(req, res) {
  const { firstName, lastName, mail, motivation } = req.body;

  client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: "us12",
  });

  const run = async () => {
    const subscriber = {
      email_address: mail,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
        MOTIVATION: motivation,
      },
    };
    const response = await client.lists.batchListMembers("e103db3244", {
      members: [subscriber],
    });
    console.log(response);
    res.status(200).json({ name: "Applied" });
  };

  run();
}
