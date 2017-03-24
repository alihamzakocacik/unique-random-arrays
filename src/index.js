var uniqueRandomArray = require('unique-random-array');
var random_Name = require('./random-name.json');


module.exports = {
    all: random_Name,
    random: uniqueRandomArray(random_Name)
};