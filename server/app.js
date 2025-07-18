const docenteRoutes = require('./routes/docenteRoutes');
const disciplinaRoutes = require('./routes/disciplinaRoutes');
const express = require('express');

const path = require('path');
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../front-end')));

app.use('/api', docenteRoutes);
app.use('/api', disciplinaRoutes);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
console.log(`Running on http://localhost:${port}`);
})