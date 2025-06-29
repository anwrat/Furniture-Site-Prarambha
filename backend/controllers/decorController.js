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
