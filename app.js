const mongoose = require('mongoose');

const mongooseconnect = require('./config/db.js');
mongooseconnect();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const policyRoutes = require('./routes/policyRoutes');
const calcRoutes = require('./routes/calcRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/policies', policyRoutes);
app.use('/api/calculate', calcRoutes);


// Start the server
const PORT = process.env.PORT;
app.listen(4000, () => console.log(`Server running on port 4000`));
