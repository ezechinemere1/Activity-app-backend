const express = require('express')
const router = express.Router();
const {createDB, createTable, createlist, showTodos, getSingleTodo, updadateTodos, deleteSingleTodos} = require('../controllers/todo-controller')

router.get('/create/database', createDB)
router.get('/create/table', createTable)
router.post('/create/list', createlist)
router.get('/get/getalltodos', showTodos)
router.get('/get/:id', getSingleTodo)
router.put('/update/todo/:id', updadateTodos)
router.delete('/delete/todo/:id', deleteSingleTodos)


module.exports = router;