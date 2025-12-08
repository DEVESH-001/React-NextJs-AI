import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGO_URI;

let isConnected = false; //this aviods multiple connections

async function dbConnect() {
  if (isConnected) {
    console.log("Database already connected");
    return;
  }
  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = db.connections[0].readyState === 1; // means connection is alive
    console.log("Connected to Database", db);
  } catch (error) {
    console.log(error, "Failed to connect to Database");
  }
}

export default dbConnect;
