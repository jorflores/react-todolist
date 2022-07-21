var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var ToDoSchema = Schema ({
    title: String,
    user_id: String
});

// # 3
module.exports = mongoose.model('tasks', ToDoSchema);
