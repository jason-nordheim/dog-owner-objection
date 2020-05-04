/* objection.js */
const {
  Model
} = require("objection");
const database = require("../database-connection")
const Dog = require('./dog')
Model.knex(database);


/* Objection Class to represent Owner */
class Owner extends Model {
  static get tableName() {
    return "owner";
  }
  static relationMappings = {
    /* key = the relationship */
    /* value = object defining the relationship */
    dogs: {
      modelClass: Dog,
      relation: Model.ManyToManyRelation, // relation to the existing table
      join: {
        from: "owner.id", // what in the current table helps form this connection - the pk field from the primary table
        through: {
          from: "dog_owner.owner_id", // start with the table we are coming from --- should link to the `from`  -- the foreign key from the join table
          to: "dog_owner.dog_id", // link to the table we are going to -- should link to the `to:` -- foriegn key from the join table
        },
        to: "dog.id", // what is the field I am ultiamtely trying to relate to
      },
    },
  };
}

module.exports = Owner;