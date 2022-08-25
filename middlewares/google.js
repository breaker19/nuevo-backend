const passport = require('passport');
const  { OAuth2Strategy } = require('passport-google-oauth');

passport.use(
    "auth-google",
    new OAuth2Strategy(
      {
        clientID: "CLIENT_ID",
        clientSecret: "CLIENT_SECRET",
        callbackURL: "http://localhost:3001/auth/google",
},
function (accessToken, refreshToken, profile, done) {
    console.log(profile);
    const userProfile = profile;    
    done(null, userProfile);
  }
))