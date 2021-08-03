const path = require("path");
const express = require("express");
const routes = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "../build")));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost${PORT}`);
});
