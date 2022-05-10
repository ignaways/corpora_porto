const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = 'mongodb+srv://ignaway:MzRyD2dQKG1UqgWx@ecommerce-ignaway-01-db.qtxtl.mongodb.net/myFirstDatabase';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const dbName = "ecommerce-01";
let db;

async function connect() {
  await client.connect();
  db = client.db(dbName);
}

function getDataBase() {
  return db;
}

module.exports = { connect, getDataBase };