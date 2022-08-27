const userService = require("../services/userService");

const createUser =(req, res)=>{
    try{
        const {email, password} = req.body;
        userService.createUser(email, password);
        res.status(201).json({message : "success"})
    }catch(err){
        res.status(400).json({message : "failed"})
    }
}
module.exports = {
    createUser
}