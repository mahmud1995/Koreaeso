// Architectural Pattern & Design Pattern
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB is connected!");
    const PORT = process.env.PORT ?? 3011;
    app.listen(PORT, function () {
      console.log(`-- The server is running successfully on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("Error on connection with MongoDB", err));
