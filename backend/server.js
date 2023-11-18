// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3006;

app.use(bodyParser.json());

// API routes
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
