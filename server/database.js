const { MongoClient } = require("mongodb");

const dotenv = require('dotenv');
dotenv.config();

const themongoURl = process.env.MONGO_DB_CONNECTION_STRING;
const url = themongoURl;
const client = new MongoClient(url);

module.exports.registerPerson = async (registerPerson) => {
  try {
    await client.connect();

    const jcBankdb = await client.db("jcBankdb");
    const jcbankCollection = await jcBankdb.collection("jcbankCollection");

    const feedback = await jcbankCollection.insertOne(registerPerson);
    return `sucessfully added with Id: ${feedback.insertedId}`;
  } catch (err) {
    return err;
  } finally {
    await client.close();
  }
};

module.exports.getAllPeople = async () => {
  try {
    await client.connect();

    const jcBankdb = await client.db("jcBankdb");
    const jcbankCollection = await jcBankdb.collection("jcbankCollection");

    let people = [];
    const cursor = jcbankCollection.find({});
    for await (const person of cursor) {
      people.push(person);
    }

    return people;
  } catch (err) {
    console.log(err.message);
  } finally {
    await client.close();
  }
};

module.exports.validateLogin = async (query) => {
  try {
    await client.connect();
    const jcBankdb = await client.db("jcBankdb");
    const jcbankCollection = await jcBankdb.collection("jcbankCollection");
    const person = await jcbankCollection.findOne({ email: query.email });
    if (!person) {
      return { message: "Not Found", email: false };
    } else if (person.password !== query.password) {
      return { message: "Found", email: true, password: false };
    } else {
      return { 
        message: "Found", 
        email: true, 
        password: true,
        user:{
          id : person._id,
          firstName: person.firstName,
          lastName: person.lastName,
          email: person.email,
          phoneNumber: person.phoneNumber,
          profilePicture: person.profilePicture? person.profilePicture: ''
        }
      };
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    await client.close();
  }
};


module.exports.updatePerson = async(filter, updateDoc)=>{
  try{
    await client.connect();
    const jcBankdb = await client.db("jcBankdb");
    const jcbankCollection = await jcBankdb.collection("jcbankCollection");
  
    const result = await jcbankCollection.updateOne(filter, updateDoc);
    const editedUser = await jcbankCollection.findOne(filter);

    return {
      message: result.matchedCount,
      user:{
        id : editedUser._id,
        firstName: editedUser.firstName,
        lastName: editedUser.lastName,
        email: editedUser.email,
        phoneNumber: editedUser.phoneNumber,
        profilePicture: editedUser.profilePicture? editedUser.profilePicture: ''
      }
    }
  }catch(err){
    console.log(err.message);
  }finally{
    await client.close();
  }
}

module.exports.uploadImage = async ()=>{
    try{
      await client.connect();
      const jcBankdb = await client.db("jcBankdb");
      return jcBankdb;
    }catch(err){
      console.log(err)
    }finally{
      await client.close();
    }
}
