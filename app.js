const express = require("express");
const bodyParser = require("body-parser");
const serviceRoutes = require("./FeedbackManagement/Service/ServiceRoute");
const webpageRoutes = require("./FeedbackManagement/WebPage/WebPageRoute");

const db = require("./DB/connection");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());


//Service Management
app.use("/service", serviceRoutes);
app.use("/webpage", webpageRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
