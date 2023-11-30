import * as express from "express";

// THIS FILE IS MEANT TO BE A BLACKBOX FORM GOVAA
export const govaaRoute = express.Router();

const HARDCODED_EMAIL = "test@test.tech.gov";
const HARDCODED_PASSWORD = "password";

type token = {
  govEmail: string;
  token: string;
};
export const tokens: token[] = [
  {
    govEmail: HARDCODED_EMAIL,
    token: "somesuccesstoken",
  },
];

govaaRoute.post("/auth", (req, res) => {
  const { email, password } = req.body;

  if (email === HARDCODED_EMAIL && password === HARDCODED_PASSWORD) {
    return res.json({ success: true, token: "somesuccesstoken" });
  }
  tokens.push({ govEmail: email, token: String(tokens.length) });
  return res.status(403).json({ success: false });
});

govaaRoute.post("/validateToken", (req, res) => {
  console.log("in validate token");
  const { token } = req.body;
  const user = tokens.find((currentToken) => currentToken === token);
  if (!user) {
    return res.status(400).json({ success: false });
  }
  return res.json({ success: true, user });
});

govaaRoute.get("/loginPage", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(`
  <h1>Mock GOVAA</h1>
  Gov email:  <input id="email" value="${HARDCODED_EMAIL}" />
  <br />
  Password: <input type="password" id="password" value="${HARDCODED_PASSWORD}" />
  <br />
  <button onclick="login()">Login</button>
  <script>
  let login = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const callback = urlParams.get("callback");
    const rawResponse = await fetch('/govaa/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      })
    });
    await rawResponse.json().then((res)=>{
      window.location = callback + "?token=" + res.token;
    })
    .catch((err) => console.log(err));
  }
  </script>
  `);
});
