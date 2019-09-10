import * as dotenv from "dotenv";
dotenv.config();
console.log('HELLLLOOOOOOO')
export default {
  APP: process.env.APP || "development",
  PORT: process.env.PORT || "3000",
  
  DB_DIALECT: process.env.DB_DIALECT || "mongo",
  DB_HOST:
    process.env.DB_HOST ||
    "mongodb+srv://denis:6apDeJIbu3I0M@cluster0-ljxwx.mongodb.net/test?retryWrites=true&w=majority",
  DB_NAME: process.env.DB_NAME || "example_db",
  DB_PASSWORD: process.env.DB_PASSWORD || "db-password",
  DB_PORT: process.env.DB_PORT || "27017",
  DB_USER: process.env.DB_USER || "root",

  JWT_ENCRYPTION: process.env.JWT_ENCRYPTION || "jwt_please_change",
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || "1h",
  SALT_ROUNDS: process.env.SALT_ROUNDS || 10
};

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://denis:6apDeJIbu3I0M@cluster0-ljxwx.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });