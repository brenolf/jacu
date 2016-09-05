/*
* Jacu
* Copyright(c) 2016 Breno Lima de Freitas <brenolimadefreitas@gmail.com>
* MIT Licensed
*/

module.exports = function deleteSeedFile(transaction, file, seedTable) {
  return transaction
  .from(seedTable)
  .where({
    name: file.name
  })
  .delete();
};
