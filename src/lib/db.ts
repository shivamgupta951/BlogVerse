import { connect } from "mongoose";

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  throw new Error("MongoDB Url not found!");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDb = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = connect(mongoUrl).then((c) => c.connection);
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    throw error;
  }
  return cached.conn;
};

export default connectDb;
