import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import route from "./routes/userRoute.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 8001
const MONGOURL = process.env.MONGO_URL

mongoose
.connect(MONGOURL)
.then(() => {
    console.log("DB connected successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`);
    })
})
.catch((error) => {
    console.log(error)
})

app.use("/api", route)