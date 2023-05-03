const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const allChief = require('./data/chief.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.get('/allchief', (req, res) => {
    res.send(allChief)
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})