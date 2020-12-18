import mongoose from "mongoose";

export async function connect() {
  if (!process.env.DB_MONGO_URI) {
    throw new Error("Cannot reach the database");
  }

  return mongoose.connect(process.env.DB_MONGO_URI, {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}

export const { connection } = mongoose;
