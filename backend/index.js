// backend/index.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes'); // Corrected path to routes

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',  // Replace with your frontend's URL
    credentials: true,  // Include credentials (e.g., cookies) in the requests
  }));
app.use(express.json());



app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));