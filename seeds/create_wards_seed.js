/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes all existing entries
  return knex('wards').del()
    .then(function () {
      // Inserts seed entries
      return knex('wards').insert([
        {id: 1, name: 'Ubakala Ward 1', lga_id: 1},
        {id: 2, name: 'Mararaba Ward', lga_id: 2},
        {id: 3, name: 'Afaha Ward', lga_id: 3},
        {id: 4, name: 'Amawbia Ward 3', lga_id: 4},
        {id: 5, name: 'Galambi Ward', lga_id: 5},
        {id: 6, name: 'Agbere Ward 6', lga_id: 6},
        {id: 7, name: 'High Level Ward', lga_id: 7},
        {id: 8, name: 'Custom Ward', lga_id: 8},
        {id: 9, name: 'State Housing Ward', lga_id: 9},
        {id: 10, name: 'Warri South West Ward 3', lga_id: 10}
      ]);
    });
};

