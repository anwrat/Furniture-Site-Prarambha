const express = require('express');
const app = express();

const designRoutes = require('./routes/designRoutes');

app.use(express.json());

app.use('/api/designs', designRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));