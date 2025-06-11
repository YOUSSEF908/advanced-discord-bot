const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const path = require('path');
const { mongoURI } = require('../../config');
require('dotenv').config();
require('./passport');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Check if mongoURI is provided before creating MongoStore
let sessionStore;
if (mongoURI && mongoURI !== '') {
  try {
    sessionStore = MongoStore.create({
      mongoUrl: mongoURI,
    });
    console.log('Using MongoDB session store');
  } catch (error) {
    console.warn('Failed to connect to MongoDB for sessions, using memory store:', error.message);
    sessionStore = undefined;
  }
} else {
  console.warn('No MongoDB URI provided, using memory store for sessions');
  sessionStore = undefined;
}

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your-secret-key-change-this',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: { secure: false, maxAge: 86400000 },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./Routes/index'));
app.use('/auth', require('./Routes/login'));
app.use('/auth', require('./Routes/logout'));
app.use('/auth', require('./Routes/redirect'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Dashboard server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT}/auth/login to access the dashboard`);
});