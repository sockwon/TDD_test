const dotenv = require("dotenv");
dotenv.config();
const { createApp } = require("./app");

const startServer = async ()=>{
    try{
        const PORT = process.env.PORT
        const app = createApp();
        app.get("/ping", (req,res,next)=>{
    res.status(200).json({message : "pong"});
})
        app.listen(PORT, ()=>{
           console.log(`listening on PORT : ${PORT}`)
        });
    } catch(err){
        console.log(err);
    }
}
startServer();