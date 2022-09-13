const winston = require("winston");
const dotenv = require("dotenv").config();
const logger = require("./logger");
const express = require("express");
const app = express();








    app.get("*", (req, res) => {
        const { url, method } = req;
        logger.warn(`Ruta ${url} con método ${method} no implementada`);
        res.send(`Ruta ${url} con método ${method} no implementada`);
      });
