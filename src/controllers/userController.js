const userService = require("../services/userService");

const createUser =(req, res)=>{
    const {email, password} = req.body;
    userService.createUser(email, password);
}
module.exports = {
    createUser
}