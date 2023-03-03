const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users.routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
