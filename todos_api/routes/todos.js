var express = require("express"),
    router = express.Router(),
    db = require("../models"),
    helpers = require("../helpers/todos");
    
router.route("/")
 .get(helpers.getTodos)
 .post(helpers.createTodo);


router.route("/:todoId")
 .get(helpers.getById)
 .put(helpers.updateById)
 .delete(helpers.deleteById);

module.exports = router;