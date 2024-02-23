const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyparser = require("body-parser");
const database = require("./database");
const aswS3Bucket = require('./s3')
const ObjectId = require('mongodb').ObjectId;
// const fileUpload = require('express-fileupload');
const multer = require('multer');


// All methods in the database.js
const getAllPeople = database.getAllPeople;
const validateLogin = database.validateLogin;
const registerPerson = database.registerPerson;
const updatePerson = database.updatePerson;

// All methods in the s3
const sendS3Command = aswS3Bucket.sendS3Command;
const getTheSignedUrlOfImage = aswS3Bucket.getTheSignedUrlOfImage;


const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

// const storage = multer.diskStorage({
//   destination: function(req, file, cb){
//     cb(null, path.resolve(__dirname, 'public'))
//   },
//   filename: function(req, file, cb){
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' +uniqueSuffix + file.originalname)
//   }
// })

const storage = multer.memoryStorage();

const upload = multer({storage:storage})
app.post('/uploadImage',upload.single('sampleFile'),async function(req, res) {
  try{
    console.log(req.body);
    console.log(req.file);
    sendS3Command(
      req.file.originalname, 
      req.file.buffer, 
      req.file.mimetype
    )

    const editProfileImage = req.body
    const editProfileImage_id = new ObjectId(editProfileImage._id);
    const theurl = await getTheSignedUrlOfImage(req.file.originalname)
    const filter = {_id: editProfileImage_id}
    const updateDoc = {
      $set:{
        profilePicture: theurl
      }
    }
    const updateReturns = await updatePerson(filter, updateDoc);
    res.json({message: 'Profile picture added Succefully', user : updateReturns.user});
  }catch(err){
    res.send('Error occured');
  }
});

app.post("/registerPerson", async (req, res) => {
  try {
    const registerFormData = req.body;
    console.log(registerFormData);
    // res.json({message: 'Recieved'});
    const registerPersonResult = await registerPerson(registerFormData);
    console.log(registerPersonResult);
    res.json({ message: "Succesfully Registered" });
  } catch (err) {
    res.json({ message: "Error occur while adding details.\nTry again" });
  }
});



app.post('/home/userProfile/editProfile', async(req, res)=>{
  try{
    const editData = req.body;
    // console.log(editData)
    editData._id = new ObjectId(editData._id);

    const filter = {_id: editData._id}
    const prepareDoc ={}
    for (const [key, value] of Object.entries(editData)) {
      if(editData[key] && key !='_id'){
        prepareDoc[key] = value;
      }
    }

    const updateDoc = {
      $set:prepareDoc
    }

    const updateReturns = await updatePerson(filter, updateDoc);
    console.log(updateReturns);
    res.json(updateReturns);;

  }catch(err){
    res.json({message:"ServerError"})
  }
})

app.get("/allpeople", (req, res) => {
  try {
    getAllPeople().then((people) => res.json(people));
  } catch (err) {
    console.log(err);
  }
});

app.post("/validlogin", async (req, res) => {
  try {
    const query = req.body;
    // const query = {email: "spongebob@squarepants.com", password: "SpongeBob"}
    const result = await validateLogin(query);
    console.log(result);
    res.json(result);
  } catch (err) {
    res.json(err);
  }
});


app.get('/checkforS3Image', async(req, res)=>{
  try{
    
    res.json({url: theurl});
  }catch(err){
    res.send('Error: ' + err.message);
  }
})

app.use(express.static(path.join("public")));
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});
app.listen(8000);
