const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
require('./passport');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: '@@@@@@@', // change it to whatever you like
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 86400000 },
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./Routes/index'));
app.use('/auth', require('./Routes/login'));
app.use('/auth', require('./Routes/logout'));
app.use('/auth', require('./Routes/redirect'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
