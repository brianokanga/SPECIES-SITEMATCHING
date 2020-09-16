const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const treeSpecieRouter = require('./routes/treeSpecieRouter');
const countyRouter = require('./routes/countyRouter');
const subCountyRouter = require('./routes/subCountyRouter');
const locationRouter = require('./routes/locationRouter');
const siteMatchRouter = require('./routes/siteMatchRouter');

const app = express();

// Body parser
app.use(express.json());

// cors
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static(`${__dirname}/public`));

app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

app.use('/api/v1/tree-species', treeSpecieRouter);
app.use('/api/v1/counties', countyRouter);
app.use('/api/v1/sub-counties', subCountyRouter);
app.use('/api/v1/location', locationRouter);
app.use('/api/v1/plant-request', siteMatchRouter);

module.exports = app;
