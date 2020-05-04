/* objection.js */
const {
  Model
} = require("objection");
const database = require("../database-connection")
Model.knex(database);

/* Object class to represent dog */
class Dog extends Model {
  static get tableName() {
    return "dog";
  }
}

module.exports = Dog;