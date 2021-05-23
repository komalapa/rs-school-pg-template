const Sequelize = require('sequelize');
console.log("DB processing...");
                                //database username   password
const sequelize = new Sequelize('gamedb', 'task3', 'psqlpass', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5433'
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
);
module.exports = sequelize;