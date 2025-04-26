const { Router } = require('express');
const { getToDos, saveTodo, updateTodo, deleteTodo } = require('../controller/ToDoController');

const router = Router();

router.get("/get", getToDos);
router.post("/save", saveTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

module.exports = router;
