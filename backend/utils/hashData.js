const bcrypt = require("bcrypt");

const hashData = async (data, saltRounds = 10) => {
    try {
        const hasedData = await bcrypt.hash(data, saltRounds);
        return hasedData;
    } catch (error) {
        throw error;
    }
};

const verifyHashedData = async (unhashed, hashed) => {
    try {
         if (!unhashed || !hashed) {
            throw new Error("Missing data or hash for comparison");
         }
        const match = await bcrypt.compare(unhashed, hashed);
        return match;
    } catch (error) {
        throw error;
    }
}


module.exports = { hashData, verifyHashedData };