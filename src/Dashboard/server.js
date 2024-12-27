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

app.use(
  session({
    secret: 'your-secret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: mongoURI,
    }),
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
  console.log(`Server running on port ${PORT}`);
});
