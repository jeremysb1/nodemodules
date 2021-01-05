const express = require('express');

const app = express();

/* learning basic concept of Middleware */

app.use((req, res, next) => {
	console.log('Hi');
	next();
});

app.get('/', (req, res) => {
	res.send('Yo');
});

app.listen(3000);