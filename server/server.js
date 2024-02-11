const express = require('express');
const cors = require('cors');
const path = require('path');
const getAllPeople = require('./database').getAllPeople;

const app = express();

app.use(cors());

app.get('/allpeople', (req,res)=>{
    try{
        getAllPeople()
        .then(people => res.json(people));
    }catch(err){
        console.log(err);
    }
})

app.use(express.static(path.join('public')));
app.use((req,res)=>{
    res.sendFile(path.resolve('public', 'index.html'));
})

app.listen(9000);