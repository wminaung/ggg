const express = require("express");
const formidable = require("formidable");

const app = express();
app.use(express.json());
// app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\index.html");
});

app.post("/", (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
  });
});
// const data = { name: "win", email: "win@win" };

// const auth = (req, res, next) => {
//   const { name, email } = req.body;
//   console.log(name, email);

//   let isValid = false;
//   if (data.name === name && data.email === email) {
//     isValid = true;
//   } else {
//     isValid = false;
//   }
//   if (!isValid) {
//     res.status(200).json({ status: "nope you are not auth" });
//   } else {
//     next();
//   }
// };

// app.post("/login", auth, (req, res) => {
//   res.json("ok");
// });

app.listen(3000, () => {
  console.log("Server is listen on port 3000");
});
