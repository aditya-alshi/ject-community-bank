const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("This is port 8000")
})

app.post('/submit', (req, res)=>{
    const firstName = req.body.firstName;

    res.json({message: "User data received successfully", firstName })
} )

app.listen(8000);