const express = require('express');

const connectDB = require('./config/db');

require('dotenv').config();

const { errorHandler } = require('./middleware/error.middleware');
const goalsRouter = require('./routes/goals.router');
const usersRouter = require('./routes/users.router');

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalsRouter);
app.use('/api/users', usersRouter);

app.use(errorHandler); // Overrides the default express error middleware

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}...`));
