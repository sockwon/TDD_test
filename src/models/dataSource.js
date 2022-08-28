const { DataSource } = require("typeorm");
const {logger}  = require("../logs/config/winston");

const appDataSource = new DataSource({
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE
})

appDataSource.initialize()
.then(()=>{
    logger.info("DB init")
})
.catch((err)=>{
    logger.error("DB connect failed")
    appDataSource.destroy();
});

module.exports = {
    appDataSource
}
   