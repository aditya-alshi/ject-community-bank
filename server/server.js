const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyparser = require('body-parser');
const database = require('./database');

// All methods in the database.js
const getAllPeople = database.getAllPeople;
const validateLogin = database.validateLogin;

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/allpeople', (req,res)=>{
    try{
        getAllPeople()
        .then(people => res.json(people));
    }catch(err){
        console.log(err);
    }
});

app.post('/validlogin', async (req, res)=>{
    try{
        const query = req.body;
        const result = await validateLogin(query);
        console.log(result);
        res.json(result);
    }catch(err){
        res.json(err);
    }

})

app.use(express.static(path.join('public')));
app.use((req,res)=>{
    res.sendFile(path.resolve('public', 'index.html'));
})

app.listen(9000);