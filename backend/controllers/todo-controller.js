const db = require("../db/database");

exports.createDB = (req, res) => {
  let q = "CREATE DATABASE TOdolist";

  db.query(q, (err, result) => {
    if (err) throw err;

    return res.status(201).json("DB Created");
  });
};

exports.createTable = (req, res) => {
  let q =
    "CREATE TABLE todos( id int AUTO_INCREMENT PRIMARY KEY, firstName VARCHAR(100), lastName VARCHAR(100))";

  db.query(q, (err, result) => {
    if (err) throw err;

    return res.status(201).json("table Created");
  });
};

exports.createlist = (req, res) => {
  let q = "INSERT INTO todos SET ?";

  const { firstName, lastName } = req.body;

  db.query(q, { firstName, lastName }, (err, result) => {
    if (err) throw err;

    return res.status(201).json(result);
  });
};

//GET ALL TODOS
exports.showTodos = (req, res) => {
  let q = "SELECT * FROM todos";

  db.query(q, (err, result) => {
    if (err) throw err;

    return res.status(201).json(result);
  });
};

//GET SINGLE TODO
exports.getSingleTodo = (req, res) => {
  let q = `SELECT * FROM todos where id=${req.params.id}`;

  db.query(q, (err, result) => {
    if (err) throw err;

    return res.status(201).json(result[0]);
  });
};

//UPDATE TODOS

exports.updadateTodos = (req, res) => {
  const { firstName, lastName } = req.body;

  let q = `UPDATE todos SET? where id = ${req.params.id}`;

  db.query(q, { firstName, lastName }, (err, result) => {
    if (err) throw err;

    return res.status(201).json(result);
  });
};

exports.deleteSingleTodos = (req, res) => {
  let q = `DELETE FROM todos where id = ${req.params.id}`;

  db.query(q, (err, result) => {
    if (err) throw err;

    return res.status(201).json({ data: "Todo deleted" });
  });
};
