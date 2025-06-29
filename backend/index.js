const express = require('express');
const app = express();

app.use(express.json());

//Checking db
const db = require('./config/db')
// Optional: a quick endpoint to verify connection
app.get('/ping', (req, res) => {
  db.query('SELECT 1', (err, results) => {
    if (err) {
      return res.status(500).json({ connected: false, error: err });
    }
    res.json({ connected: true });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));