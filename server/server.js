const express = require('express');
const cors = require('cors');
const path = require('path');
const ject = require('./ject-database');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/submit', (req, res)=>{
    const formData = req.body;
    ject.addDocument(formData);
    res.json({ message: 'Data received successfully!' });
} );

app.get('/allpeople', (req, res)=>{
    ject.getAllPeople().then(allPeople => res.json(allPeople));
})


app.use(express.static(path.join('public')));
app.use((req,res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(8000);