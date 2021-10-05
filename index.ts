import express from "express";
import { router } from "./api-routes";

const app = express();

app.get("/", (req, res) => {
  res.send("Well done!");
});

app.use("/api", router);

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});
