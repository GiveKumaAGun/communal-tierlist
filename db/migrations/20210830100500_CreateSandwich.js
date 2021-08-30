
exports.up = function(knex) {
  return knex.schema.createTable('sandwich', function(table) {
    table.increments('id');
    table.integer('BaconEggCheese');
    table.integer('GrilledCheese');
    table.integer('PulledPork');
    table.integer('BLT');
    table.integer('TunaMelt');
    table.integer('FriedChicken');
    table.integer('Cheesesteak');
    table.integer('Cubano');
    table.integer('MeatballSub');
    table.integer('Reuben');
    table.integer('Caprese');
    table.integer('PattyMelt');
    table.integer('PBJ');
    table.integer('RoastBeef');
    table.integer('Tonkatsu');
    table.integer('HamCheese');
    table.integer('Bologna');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sandwich');
};