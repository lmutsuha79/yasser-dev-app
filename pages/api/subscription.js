import axios from "axios";

export default async function subscription(req, res) {
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({ error: "Email is required" });
  }

  const API_KEY = "8c9e3d0af3db7f9ae090d0f66e11d50e-us11";
  const API_SERVER = "us11";
  const AUDIENCE_ID = "5c99ac9823";

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
    return res
      .status(500)
      .json({
        error: error.message,
        errorDescription: error.response.data.title,
      });
  }
}
