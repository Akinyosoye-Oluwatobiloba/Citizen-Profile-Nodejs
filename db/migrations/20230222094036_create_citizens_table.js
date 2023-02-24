/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('citizens', function(table) {
      table.increments('id').primary();
      table.string('full_name').notNullable();
      table.string('gender').notNullable();
      table.string('address').notNullable();
      table.string('phone').notNullable();
      table.integer('ward_id').unsigned().notNullable();
      table.foreign('ward_id').references('wards.id');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('citizens');
  };
  
