const express = require("express");
const { Router } = express;
const loginRouter = Router();


loginRouter.get("/google", (req, res) => {
  res.send(`<h1>${req.user.displayName}</h1>
            <img src="${req.user.photos[0].value}">
            <p>${req.user.emails[0].value}</p>
            <p> ${req.user.provider}</p>
            <p> ${req.user.id}</p>
            <p> ${req.user._json.sub}</p>
            <p> ${req.user._json.name}</p>
            <p> ${req.user._json.given_name}</p>
            <p> ${req.user._json.family_name}</p>
            
            <a href="/auth/logout">Logout</a>`);
});

module.exports = loginRouter;

