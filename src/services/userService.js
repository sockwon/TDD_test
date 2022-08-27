const userDao = require("../models/userDao");

const createUser = (email, password)=> userDao.createUser(email, password)

module.exports = {
    createUser
}