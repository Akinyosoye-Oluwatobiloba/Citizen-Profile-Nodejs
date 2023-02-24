/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes all existing entries
  return knex('lgas').del()
    .then(function () {
      // Inserts seed entries
      return knex('lgas').insert([
        {id: 1, name: 'Umuahia North', state_id: 1},
        {id: 2, name: 'Mubi South', state_id: 2},
        {id: 3, name: 'Eket', state_id: 3},
        {id: 4, name: 'Awka South', state_id: 4},
        {id: 5, name: 'Gamawa', state_id: 5},
        {id: 6, name: 'Ekeremor', state_id: 6},
        {id: 7, name: 'Makurdi', state_id: 7},
        {id: 8, name: 'Maiduguri', state_id: 8},
        {id: 9, name: 'Calabar South', state_id: 9},
        {id: 10, name: 'Warri South', state_id: 10}
      ]);
    });
};
