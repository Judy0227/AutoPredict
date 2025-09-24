const  mongoose  = require("mongoose");

require("dotenv").config();

const { MONGODB_URL } = process.env;

// connect to db
const connectToDB = async () => {
    try {
        await mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("connected to db")
        
    } catch (error) {
        console.log("Failed to connect to db " + error)
    };
};

connectToDB();



