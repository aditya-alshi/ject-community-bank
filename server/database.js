const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://alshiaditya1996:Qwerty123@cluster0.lrlvhzp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

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

module.exports.findOnePerson = async ()=>{
    try{
        await client.connect();

        const jcBankdb = await client.db('jcBankdb');
        const jcbankCollection = await jcBankdb.collection('jcbankCollection');
        
    }catch(err){
        console.log(err.message);
    }finally{
        await client.close();
    }
}