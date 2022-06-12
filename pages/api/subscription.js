import axios from "axios";
import { UseValideEmail } from "../../util/UseValideEmail";

export default async function subscription(req, res) {
  const { email } = req.body;

  if (!UseValideEmail(email)) {
    return res.status(400).json({ error: "invalid email address" });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `api_key ${API_KEY}`,
    },
  };

  try {
    const response = await axios.post(url, data, options);

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter. Shoot me an email at ogbonnakell@gmail and I'll add you to the list.`,
      });
    }
    return res.status(201).json({ message: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.response.data.title });
    // .json({
    //   error: error,
    //   // errorDescription: error.response.data.title,
    // });
  }
}
