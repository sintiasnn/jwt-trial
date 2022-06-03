const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

exports.connect = () => {
    //connect to databases
    mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then( () => {
            console.log("successfully connected to databases");
        })
        .catch( (error) => {
            console.log("connection failed");
            console.error(error);
            process.exit(1);
        });
};