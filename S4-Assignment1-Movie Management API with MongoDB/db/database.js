const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

client.connect();
const db = client.db('Movies');
const collection = db.collection('moviesData');


const close = async ()=>{
    await client.close();
}


module.exports = {db, close, collection};