const axios = require("axios");

async function getToken() {
    try {
        const response = await axios.post(
            "http://4.224.186.213/evaluation-service/auth",
            {
                email: process.env.EMAIL,
                name: process.env.NAME,
                rollNo: process.env.ROLLNO,
                accessCode: process.env.ACCESS_CODE,
                clientID: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET
            }
        );

        console.log("AUTH RESPONSE:");
        console.log(response.data);

        return response.data.access_token;

    } catch (error) {
        console.log("AUTH ERROR:");
        console.log(error.response?.data || error.message);
    }
}

module.exports = getToken;