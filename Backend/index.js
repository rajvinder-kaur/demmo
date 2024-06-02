import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

//app config
const app = express();
const port = 8080;

//middleware
app.use(express.json());
app.use(cors());

//database
const url = ``;

//mongodb connection
mongoose.connect(url,{
    useNewUrlParser : true,
    useUnifiedTopology:true,
}).then((x)=>{
    console.log("connection sucessful !");
}).catch((err)=>{
    console.log(err);
})


//starting server
app.listen(port,()=>{
    console.log(`server running ! ${port}`);
})