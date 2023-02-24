/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = function(knex) {
  // Deletes all existing entries
  return knex('states').del()
    .then(function () {
      // Inserts seed entries
      return knex('states').insert([
        {id: 1, name: 'Abia'},
        {id: 2, name: 'Adamawa'},
        {id: 3, name: 'Akwa Ibom'},
        {id: 4, name: 'Anambra'},
        {id: 5, name: 'Bauchi'},
        {id: 6, name: 'Bayelsa'},
        {id: 7, name: 'Benue'},
        {id: 8, name: 'Borno'},
        {id: 9, name: 'Cross River'},
        {id: 10, name: 'Delta'}
      ]);
    });
};
