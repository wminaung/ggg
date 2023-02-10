const express = require("express");
const formidable = require("formidable");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\index.html");
});

app.post("/", (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
  });
});

app.listen(3000, () => {
  console.log("Server is listen on port 3000");
});
