/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

module.exports = function loadSeedFile(transaction, file, batch, seedTable) {
  return transaction
  .insert({
    name: file,
    batch: batch,
    seeding_time: new Date()
  })
  .into(seedTable);
};
