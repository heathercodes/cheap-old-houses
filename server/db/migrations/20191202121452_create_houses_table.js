
exports.up = knex => knex.schema.createTable('houses', table => {
    table.increments();
    table.string('address').notNullable();
    table.string('state').notNullable();
    table.string('link').notNullable();
    table.integer('price').notNullable();
    table.string('image').notNullable();
});

exports.down = knex => knex.schema.dropTable('houses');
