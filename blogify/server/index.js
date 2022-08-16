import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))

app.use(cors());


app.get("/",(req,res)=>{
    res.json({
        author:"bayram fatih kubaşıkkkkkkkkkkkkkkkkkkk",
        version:"0.0.1"

    });
});

const PORT =process.env.PORT || 5000;
const CONNECTION_URL = "mongodb+srv://fatihcluster:fatih123_@cluster0.fz1q9mc.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port:${PORT}`);
    });
})
.catch((error)=> {
    console.log("mesajınız  "+error.message);
});