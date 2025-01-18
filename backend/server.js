import express from 'express' ;
import dotenv from "dotenv" ;
import cookieParser from 'cookie-parser';
const app = express() ;
import authRoutes from "./routes/authroutes.js" ;
import messageRoutes from "./routes/message.routes.js" ;
import userRoutes from "./routes/user.routes.js" ;
import connectToMongoDB from './db/connectToMongoDB.js';



dotenv.config() ;
const PORT = process.env.PORT || 8000 ;


app.use(express.json()) ;
app.use(cookieParser()) ;

app.use("/api/auth" , authRoutes) ;
app.use("/api/messages" , messageRoutes) ;
app.use("/api/users" , userRoutes) ;

app.get("/",(req,res) =>{
    console.log("Hello world")
})


app.listen(PORT, () => {
    connectToMongoDB() ;
    console.log(`Server Running on port ${PORT}`) ;
}) 
