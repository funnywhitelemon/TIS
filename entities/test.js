const Nomenclature = require('./nomenclature');
const Connection = require('./base/common/Connection');

const connection = new Connection;

const connection2 = new Connection;

console.log(connection === connection2);