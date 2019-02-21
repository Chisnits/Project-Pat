const express = require('express')
 , bodyParser = require('body-parser')
 , cors = require('cors')
 , session = require('express-session')
 , InstagramStrategy = require('passport-instagram').Strategy
 , passport = require('passport')
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

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});



passport.use(new InstagramStrategy({
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/instagram/callback"
},
function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
        let user = {};
        user.name = profile.displayName;
        user.homePage = profile._json.data.website;
        user.image = profile._json.data.profile_picture;
        user.bio = profile._json.data.bio;
        user.media = `https://api.instagram.com/v1/users/${profile.id}/media/recent/?access_token=${accessToken}&count=100`;
        
      // To keep the example simple, the user's Instagram profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Instagram account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

app.get('/auth/instagram',
  passport.authenticate('instagram'));

// app.get('/auth/instagram',
//   passport.authenticate('instagram', { 
//   successRedirect: 'http://localhost:3000/user',
//   failureRedirect: 'http://localhost:3000/' 
// }));

app.get('/auth/instagram/callback', 
  passport.authenticate('instagram', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.listen(config.port, () => {
  console.log("Started server on port", config.port)
});