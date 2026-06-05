const axios = require("axios");
require("dotenv").config();

const getToken = require("./auth");

async function test() {

    const token = await getToken();

    const endpoints = [
        "/vehicles",
        "/tasks",
        "/maintenance",
        "/jobs"
    ];

    for (const ep of endpoints) {

        try {

            const response = await axios.get(
                `http://4.224.186.213/evaluation-service${ep}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log("\nSUCCESS:", ep);
            console.log(response.data);

        } catch (err) {

            console.log("\nFAILED:", ep);
            console.log(err.response?.data || err.message);

        }
    }
}

test();