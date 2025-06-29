const db = require('../config/db');

// Create a decor item
exports.createDecor = (req, res) => {
  const { name, description, image, price } = req.body;
  const query = 'INSERT INTO decor (name, description, image, price) VALUES (?, ?, ?, ?)';
  db.query(query, [name, description, image, price], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, name, description, image, price });
  });
};

// Update a decor item
exports.updateDecor = (req, res) => {
  const { id } = req.params;
  const { name, description, image, price } = req.body;
  const query = 'UPDATE decor SET name = ?, description = ?, image = ?, price = ? WHERE id = ?';
  db.query(query, [name, description, image, price, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Decor updated successfully' });
  });
};

// Delete a decor item
exports.deleteDecor = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM decor WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Decor deleted successfully' });
  });
};

// Fetch all decors
exports.getAllDecors = (req, res) => {
  const query = 'SELECT * FROM decor';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Fetch decors by price order (asc or desc)
exports.getSortedDecors = (req, res) => {
  const { order } = req.params;
  if (order !== 'asc' && order !== 'desc') {
    return res.status(400).json({ error: 'Order must be asc or desc' });
  }
  const query = `SELECT * FROM decor ORDER BY price ${order.toUpperCase()}`;
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Fetch decor(s) by name (partial match)
exports.getDecorByName = (req, res) => {
  const { name } = req.params;
  const query = 'SELECT * FROM decor WHERE name LIKE ?';
  db.query(query, [`%${name}%`], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
