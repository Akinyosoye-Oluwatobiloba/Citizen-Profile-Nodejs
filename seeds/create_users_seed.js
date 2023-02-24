/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {id: 1, colName: 'TOBI'},
    {id: 2, colName: 'PHILLIP'},
    {id: 3, colName: 'PHILLIP'},
    {id: 4, colName: 'KEMI'},
    {id: 5, colName: 'KEMI'},
    {id: 6, colName: 'KEMI'},
    {id: 7, colName: 'KEMI'},
    {id: 8, colName: 'KEMI'},
    {id: 9, colName: 'KEMI'},
    {id: 10, colName: 'KEMI'},
 
  ]);
};
