const express = require('express');
const cors = require('cors');  
const app = express();

app.use(cors());

const designRoutes = require('./routes/designRoutes');
const decorRoutes = require('./routes/decorRoutes');

app.use(express.json());

app.use('/api/designs', designRoutes);
app.use('/api/decors', decorRoutes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
