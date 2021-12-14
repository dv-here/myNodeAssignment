const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 4444;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const empRoutes = require("./routes/api");
app.use("/api/employee", empRoutes);

app.listen(port, () => {
  console.log(`Server listening @ http://localhost:${port}`);
});
