
exports.up = knex => knex.schema.createTable('houses', table => {
    table.increments();
    table.text('address').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.text('link').notNullable();
    table.bigInteger('price');
    table.text('image').notNullable();
});

exports.down = knex => knex.schema.dropTable('houses');
