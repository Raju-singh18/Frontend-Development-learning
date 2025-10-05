// ! ============Method-1=========
// import express from "express";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";

// const app = express();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const staticPath = path.join(__dirname, "public");

// app.use(express.static(staticPath));
// //  If using POST forms, enable this
// // app.use(express.urlencoded({extended:true}))

// // Example GET route (with query params)
// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   /*
//     [Object: null prototype] {
//   'user[name]': 'Raju Singh',
//   'user[message]': 'hi'
// }
//     */
// res.send("OK"); or
//   res.redirect("/");
// });

// app.listen(3000, () => {
//   console.log("Server starting on port 3000");
// });

// !==========Method-2=============
import express from "express";
import path, { dirname } from "path";
const app = express();

// Express can serve "public" directly
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

// ! it should be at the end(as we done)
app.use((req, res) => {
  // return res.status(404).send("<h1>Page not Found</h1>");
  return res
    .status(404)
    .sendFile(path.join(import.meta.dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// ! Method=2
// { user: { name: 'Raju Singh', message: 'testing' } }
