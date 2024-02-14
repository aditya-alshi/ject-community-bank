const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://alshiaditya1996:Qwerty123@cluster0.lrlvhzp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

module.exports.registerPerson = async (registerPerson)=>{
    try{
        await client.connect();

        const jcBankdb = await client.db('jcBankdb');
        const jcbankCollection = await jcBankdb.collection('jcbankCollection');

        const feedback = await jcbankCollection.insertOne(registerPerson);
        return `sucessfully added with Id: ${feedback.insertedId}`;
    }catch(err){
        return err;
    }finally{
        await client.close();
    }
}

module.exports.getAllPeople = async ()=>{
    try{
        await client.connect();

        const jcBankdb = await client.db('jcBankdb');
        const jcbankCollection = await jcBankdb.collection('jcbankCollection');

        let people = []
        const cursor = jcbankCollection.find({});
        for await (const person of cursor){
            people.push(person);
        }

        return people;
    }catch(err){
        console.log(err.message);
    }finally{
        await client.close();
    }
}

module.exports.validateLogin = async (query)=>{
    try{
        await client.connect();
        const jcBankdb = await client.db('jcBankdb');
        const jcbankCollection = await jcBankdb.collection('jcbankCollection');
        const person = await jcbankCollection.findOne({email : query.email});
        if(!person){
            return {message: "Not Found", email: false};
        }else if(person.password !== query.password){
            return {message : "Found", email : true, password : false};
        }else{
            return {message: "Found", email: true, password: true};
        }
    }catch(err){
        console.log(err.message);
    }finally{
        await client.close();
    }
}