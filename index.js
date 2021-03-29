const express = require("express");
// var cors = require("cors");
require("dotenv").config();
const fetch = require("node-fetch");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

  return res.json(json);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 8080;
// console.log(`Listening on PORT ${PORT}`);

app.listen(PORT);
