const knex = require("knex");
const config = require("./knexfile")[process.env.NODE_ENV || "development"];
const database = knex(config);

// this is how you export a module in node 
module.exports = database;