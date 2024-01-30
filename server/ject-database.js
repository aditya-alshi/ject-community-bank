const {MongoClient} = require('mongodb');
const uri = 'mongodb+srv://alshiaditya1996:Qwerty123@cluster0.lrlvhzp.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

module.exports.addDocument = async function(user){
    try{
        await client.connect();
        const jcBankdb = client.db('jcBankdb');
        const jcbankCollection = jcBankdb.collection('jcbankCollection')

        await jcbankCollection.insertOne(user);
    }catch(e){
        console.log(e);
    }
    finally{
        await client.close();
    }
}

