const { options } = require ("../options/mariaDB");
const knex = require("knex")(options);

knex.schema
    .createTable("productosEcommerce", table => {
    table.increments("id");
    table.string("name");
    table.float("price");
    table.string("description");
    table.string("image");
    }).then(() => {

        console.log("table created");
    }
    ).catch((err) => {
        console.log(err);
    }
    ).finally(() => {
        knex.destroy();
    }
    );

