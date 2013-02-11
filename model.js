var mongoose = require('mongoose');
mongoose.connect('mongodb://lychee:labs@linus.mongohq.com:10080/app9987072');

var schema = {
  Item : mongoose.model('item', mongoose.Schema({
    name :          String,
    description :   String,
    price :         Number,
    category :      String,
    count :         Number,
    picture :       String
  })),
}

module.exports = schema;
