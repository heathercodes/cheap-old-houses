
exports.up = function(knex) {
    return knex.schema.createTable('houses', table => {
        table.increments();
        table.text('address').notNullable();
        table.string('city').notNullable();
        table.string('region').notNullable();
        table.text('link').notNullable();
        table.bigInteger('price');
        table.text('image').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('houses');
};
