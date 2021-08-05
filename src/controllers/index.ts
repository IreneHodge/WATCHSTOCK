const path = require("path");
const express = require("express");
const polygonRoutes = require("./routes/polygonRoutes");
const dbRoutes = require("./routes/dbRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "../build")));

app.use("/search", polygonRoutes);

app.use("/watchList", dbRoutes);

app.get("/", (req: Request, res: Response) => {
  //handle root
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost${PORT}`);
});
