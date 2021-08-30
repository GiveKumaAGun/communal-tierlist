
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {product: 'Shrek', score: 10, comment: "Shrektacular. This is the Citizen Kane of movies."},
        {product: 'Shrek 2', score: 10, comment: "I didn't understand love until I watched this movie."},
        {product: 'Shrek the Musical', score: 8, comment: "Although not as entertaining as the magnum opus it is based on, Shrek the Musical is still wonderfully entertaining in its own right."},
        {product: 'Bee Movie', score: 7, comment: "In spite of its flaws, Bee Movie is nonetheless a solid addition to the Shrek Extended Universe's Internet Memes Alternate Timeline"},
      ]);
    });
};
