const express = require('express');
const cors = require('cors');
const ject = require('./ject-database');

const app = express();

app.use(cors());
app.use(express.json());


app.get('/', (req, res)=>{
    res.send("This is port 8000")
})

app.post('/submit', (req, res)=>{
    const formData = req.body;
    ject.addDocument(formData);
} )

app.listen(8000);