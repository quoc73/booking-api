import express from "express"
import dotenv from"dotenv"
import mongoose from"mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import attractionRoute from "./routes/attraction.js"
import detailedRoute from "./routes/detailed.js"
const app = express()
dotenv.config()

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongodb.")
  } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected")})

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")});

app.use(express.json())

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/attraction",attractionRoute);
app.use("/api/detailed",detailedRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.errorStatus || 500
    const errorMessage = err.errorMessage || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack: err.stack,

    });

}); 

app.listen(8800, () => {
    connect()
    console.log("Connected to backend.");
});