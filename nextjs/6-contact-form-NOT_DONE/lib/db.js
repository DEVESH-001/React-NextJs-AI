const { default: mongoose } = require("mongoose");

const MONGODB_URI = process.env.MONGO_URI;

let isConnected = false; // track the connection

async function dbConnect() {
  if (isConnected) {
    console.log("MongoDb Connected");
    return;
  }

  try {
    const db = await mongoose.connect(MONGODB_URI);
    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Failed to connect to DB", error);
    throw error;
  }
}

export default dbConnect;
