const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.get('')


app.use(express.static(path.join('public')));
app.use((req,res)=>{
    res.sendFile(path.join('public', 'index.html'));
})

app.listen(9000);