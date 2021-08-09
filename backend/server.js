/**
 * @author krish
 */

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const mongo = require("./config/mongo");

dotenv.config();
const app = express();

//logger
var log4js = require("log4js");
var logger = log4js.getLogger();
logger.level = "debug";

mongo();

//routes
const auth = require("./route/auth");
const user = require("./route/user");
const empOfMonth = require("./route/empOfMonth");
const testimonial = require("./route/testimonial");

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(cors());

//routes goes here
app.use("/api", auth);
app.use("/api", user);
app.use("/api", empOfMonth);
app.use("/api", testimonial);

const PORT = 8000;

app.listen(PORT, () => {
  logger.info("Listening on port", PORT);
});
