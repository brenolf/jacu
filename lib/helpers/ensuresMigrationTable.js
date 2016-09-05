/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

/* istanbul ignore next */
var schema = function schema(table) {
  table.increments('id').primary().unsigned();
  table.string('name').notNullable().unique();
  table.integer('batch');
  table.dateTime('seeding_time');
};

module.exports = function ensuresMigrationTable(context) {
  return context.knex.schema
  .hasTable(context.CONFIG.table)
  .then(function(exists) {
    if (exists) {
      return;
    }

    return context.knex.schema
    .createTable(context.CONFIG.table, schema);
  });
};
