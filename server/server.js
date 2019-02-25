const express = require('express')
 , bodyParser = require('body-parser')
 , cors = require('cors')
 , session = require('express-session')
 , Instagram = require('node-instagram').default
 , cookieParser = require('cookie-parser')
 , config = require('./server-config')
 , path = require("path");


let app = express();
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
 // Express Session
 app.use(session({
  secret: 'chisnitssecret',
  saveUninitialized: true,
  resave: true,
  cookie: {secure: true}
}));


const redirectUri = 'http://localhost:3000/auth/instagram/callback';

const instagram = new Instagram({
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  accessToken: config.ACCESS_TOKEN
});

// First redirect user to instagram oauth
app.get('/auth/instagram', (req, res) => {
  res.redirect(
    instagram.getAuthorizationUrl(
      redirectUri,
      {
        // an array of scopes
        scope: ['basic', 'public_content'],
      },
    )
  );
});
 
// Handle auth code and get access_token for user
app.get('/auth/instagram/callback', async (req, res) => {
  try {
    // The code from the request, here req.query.code for express
    const code = req.query.code;
    const data = await instagram.authorizeUser(code, redirectUri);
    // data.access_token contain the user access_token
    res.json(data);
  } catch (err) {
    res.json(err);
  }
});

app.get('/recent', (req, res) => {

  instagram.get('users/self/media/recent', (err, data) => {
    // console.log(data);
    res.send(data)
  });

})


app.listen(config.port, () => {
  console.log("Started server on port", config.port)
});
