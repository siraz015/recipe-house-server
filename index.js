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

// app.get('/allchief/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     const selectedChief = allChief.find(chief => chief.id === id)
//     res.send(selectedChief)
// })

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})