const userDao = require("../models/userDao");

const createUser = async (email, password)=> await userDao.createUser(email, password)

module.exports = {
    createUser
}