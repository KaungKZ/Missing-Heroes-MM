const express = require("express");
// const fetch = require("node-fetch");
var cors = require("cors");
require("dotenv").config();
const fetch = require("node-fetch");
// const path = require("path");
// const rp = require("request-promise");
// const rp = require("request-promise");
// const got = require("got");

const app = express();
// const router = express.Router();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", function (request, response) {
//   response.send("Missing heroes api");
// });
// app.use(
//   "/api/fetchData",
//   createProxyMiddleware({ target: process.env.API_ROUTE, changeOrigin: true })
// );

app.get("/api/test", function (request, response) {
  response.send("Hello World!"); // this works when I try from url as www...com/api/test
});

app.get("/api/fetchData", async (req, res) => {
  const data = await fetch(process.env.API_ROUTE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          heroes {
            id
            name
            age
            sex
            address
            condition
            remark
          }
        }
        `,
    }),
  });

  const json = await data.json();

  // console.log(typeof data.body.data);

  return res.json(json);
});

// app.post("/api/fetchData", function (req, res) {
//   const options = {
//     method: "POST",
//     uri: process.env.API_ROUTE,
//     body: {

//     },
//     json: true, // Automatically stringifies the body to JSON
//   };
//   // console.log("fetch");
//   // console.log(req.body);
//   rp(options)
//     .then((body) => {
//       // console.log(body);
//       res.send(body);
//       // return body.json();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  // app.get("/*", (req, res) => {
  //   res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  // });
}

const PORT = process.env.PORT || 8080;
console.log(`Listening on PORT ${PORT}`);

app.listen(PORT);
