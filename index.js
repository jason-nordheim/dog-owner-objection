const express = require("express");
const app = express();

const {
  Model
} = require("objection");
const database = require("./database-connection")
const Dog = require('./models/dog')
const Owner = require('./models/owner');
Model.knex(database);


const port = process.env.PORT || 4000;

/* dog GET route using objection */

app.get("/dogs", (request, response) => {
  Dog.query().then((dogs) => {
    response.json({
      dogs,
    });
  });
});
/* owner GET route using objection */
app.get("/owners", (request, response) => {
  Owner.query()
    .withGraphFetched("dogs")
    .then((owner) => {
      response.json({
        owner,
      });
    });
});

app.listen(port);