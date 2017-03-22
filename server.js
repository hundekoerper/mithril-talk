const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './css')));
app.use(express.static(path.join(__dirname, './examples')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './index.html')));

app.get('/animals', (req, res) => res.send(['cat', 'dog', 'honeybadger']));

const server = http.createServer(app);
server.listen(1337);
