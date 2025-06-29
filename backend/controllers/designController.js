const db = require('../config/db');

// Create a design
exports.createDesign = (req, res) => {
  const { name, image, decors_used, description } = req.body;
  const query = 'INSERT INTO designs (name, image, decors_used, description) VALUES (?, ?, ?, ?)';
  db.query(query, [name, image, decors_used, description], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, name, image, decors_used, description });
  });
};

// Update a design
exports.updateDesign = (req, res) => {
  const { id } = req.params;
  const { name, image, decors_used, description } = req.body;
  const query = 'UPDATE designs SET name = ?, image = ?, decors_used = ?, description = ? WHERE id = ?';
  db.query(query, [name, image, decors_used, description, id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Design updated successfully' });
  });
};

// Delete a design
exports.deleteDesign = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM designs WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Design deleted successfully' });
  });
};

// Fetch all designs
exports.getAllDesigns = (req, res) => {
  const query = 'SELECT * FROM designs';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Search designs by name
exports.searchDesignByName = (req, res) => {
  const { name } = req.params;
  const query = 'SELECT * FROM designs WHERE name LIKE ?';
  db.query(query, [`%${name}%`], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
