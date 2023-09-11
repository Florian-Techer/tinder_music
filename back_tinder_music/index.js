const express = require("express");
const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = 8888;

app.get("/login", (req, res) => {
  const redirectUri = `https://accounts.spotify.com/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&redirect_uri=${process.env.REDIRECT_URI}&scope=user-read-private%20user-read-email`;
  res.redirect(redirectUri);
});

app.get("/callback", (req, res) => {
  const code = req.query.code;
  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    form: {
      code: code,
      redirect_uri: process.env.REDIRECT_URI,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
      ).toString("base64")}`,
    },
    json: true,
  };

  request.post(authOptions, (error, response, body) => {
    const access_token = body.access_token;
    const uri = process.env.FRONTEND_URI || "http://localhost:3000";
    res.redirect(`${uri}?access_token=${access_token}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
