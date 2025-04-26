const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes/ToDoRoutes');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api', routes);
app.listen(port, () => console.log(`Listening on port ${port}...`));
