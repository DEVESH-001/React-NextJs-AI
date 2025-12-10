import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  throw new Error("No MongoDB env found");
}

let cached = global.mongoose; //to cache connection in `dev`
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }; //this is to avoid multiple connections in dev. {conn: null, promise: null} states that no connection is established yet, and no promise is pending. we have used promise to avoid race conditions. for example, if multiple requests come in at the same time, we don't want to create multiple connections.
}

async function ConnectDB() {
  //check if connection is already established
  if (cached.conn) {
    return cached.conn; //return the existing connection instead of creating a new one
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log("Oh Mai leh gya dil leh gya Mongoose");

      return mongoose;
    }); //create a new connection and store the promise in cache, useful for handling multiple requests at the same time
  }
  try {
    cached.conn = await cached.promise; //wait for the promise to resolve and store the connection in cache
    //return cached.conn;
  } catch (error) {
    cached.promise = null; //reset the promise in case of error, so that future requests can try to create a new connection
    throw error;
  }
  console.log(cached);

  return cached.conn;
}

export default ConnectDB;
