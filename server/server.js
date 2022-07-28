const express = require('express');
const path = require('path');

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

// Server frontend

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'))
  );
} else {
  app.get('/', (req, res) => res.send('Please switch to production!'));
}

app.use(errorHandler); // Overrides the default express error middleware

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}...`));
