require("dotenv").config();
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const path = require("path");
const quizRoutes=require("./routes/quizRoutes");
const answereRoutes=require("./routes/answereRoute")
const PORT=process.env.PORT||3500;
const app=express();
const dbConn=require("./config/dbConn");
// const corsOptions = require("./config/corsOptions");

app.use(express.static(path.join(__dirname,"./public")));
app.use(express.static(path.join(__dirname,"./client/build")));

dbConn();


app.use(cors())

app.use(express.json())

app.use("/",require("./routes/root"));
app.use("/quiz",quizRoutes);
app.use("/answere",answereRoutes);

app.all("*",(req,res)=>{
    res.status(404);
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    }else if(req.accepts('json')){
        res.json({
            message:'404 not found'
        });
    }else{
        res.type('txt').send('404 not found');
    }
})


mongoose.connection.once("open",()=>{
    console.log("Connected to DB");
    app.listen(PORT,()=>console.log(`Listning on PORT:${PORT}`));
})

mongoose.connection.on("error",err=>{
    console.log(err);
})

