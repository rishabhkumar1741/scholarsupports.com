import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("connection successfull");
      connection.on("error", () => {
        console.log("Error connection error,");
      });
    });
  } catch (error) {
    console.log("Error came in the  try block  may be  mongodb url is wrong ");
  }
}
