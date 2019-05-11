const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const template = require('./views/template');
// transition from es6 => cJS
const ssr = require('./views/server').default;

const initialState = {
  isFetching: true,
  name: 'Kyungtae',
  type: 'server'
};

const indexRouter = (req, res) => {
  const { preloadedState, content } = ssr(initialState);
  const response = template({
    content,
    initialState: preloadedState,
    title: 'Server-side Language',
    type: 'react'
  });
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
};

const canvas = (req, res) => {
  const response = template({ title: 'TK Premier', type: 'canvas' });
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
};

const webWorkers = (req, res) => {
  const response = template({ title: 'Lab 49 Prep', type: 'web-worker' });
  res.setHeader('Cache-Control', 'assets, max-age=604800');
  res.send(response);
}

const app = express();

app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// start the server
app.listen(process.env.PORT || 3000);


app.get('/', indexRouter);
app.get('/canvas', canvas);
app.get('/web-workers', webWorkers);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  console.log('err: ', err);
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
