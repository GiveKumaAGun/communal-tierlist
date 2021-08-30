
exports.up = function(knex) {
  return knex.schema.createTable('reviews', function(table) {
    table.increments('id');
    table.string('product');
    table.float('score', )
    table.text('comment')
    table.datetime('datetimePosted').defaultTo(knex.fn.now(6))
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('reviews');
};
