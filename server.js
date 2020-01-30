const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

app.use(express.json());
app.use(cors());



const apiKey = 'fb07371e9e8f6a6c53f85498e92dcea1';
app.post('/api', (req, res) => {

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${req.body.input}&units=metric&APPID=${apiKey}`)
        .then(data => data.json()).then(data => res.send(data))
        .catch(err => res.status(400).json('unable to work with api'))
})


app.listen(3001, () => {
    console.log('app is running on 3001')
});