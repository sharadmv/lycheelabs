var model = require('./model');
var interface = {
  add : function(obj, callback)  {
    var obj = new model.Item(obj);
    obj.save(function(){
      console.log(obj);
      callback(obj);
    })
  },
  buy : function(id, amount) {
  },
  items : function(callback) {
    model.Item.find({}, function(err, items) {
      callback(items);
    })
  },
  item : function(id, callback) {
    model.Item.findOne({ _id : id }, function(err, item) {
      callback(item);
    })
  }
}
module.exports = interface;
