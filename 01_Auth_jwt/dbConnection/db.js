// const mongoose = require("mongoose");

// module.exports = async () => {
//     try {
//         const connectionParams = {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//         };
//         await mongoose.connect(process.env.DB, connectionParams);
//         console.log("connected to database.");
//     } catch (error) {
//         console.log("could not connect to database", error);
//     }
// };

// In case if you want to execute the code via the env file uncomment the above code and
// comment the below code

const mongoose = require("mongoose");
const config = require("../config/config"); 

module.exports = async () => {
    try {
        await mongoose.connect(config.dbConnectionString, config.connectionParams);
        console.log("Connected to the database.");
    } catch (error) {
        console.error("Could not connect to the database", error);
    }
};
