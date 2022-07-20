const express = require('express');

const dotenv = require('dotenv').config();

const { errorHandler } = require('./server/middleware/error.middleware');
const goalsRouter = require('./server/routes/goals.router');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalsRouter);

app.use(errorHandler); // Overrides the default express error middleware

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}...`));
