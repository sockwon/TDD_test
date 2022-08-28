const userService = require("../services/userService");
const { logger } = require("../logs/config/winston");

const createUser = async (req, res)=>{
    try{
        const {email, password} = req.body;
        await userService.createUser(email, password);
        logger.info("POST / signup")
        res.status(201).json({message : "success"})
    }catch(err){
        logger.error("POST / signup")
        res.status(400).json({message : "failed"})
    }
}
module.exports = {
    createUser
}