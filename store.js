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
  }
}
module.exports = interface;
