const axios = require("axios");

async function getDepots(token) {
    const response = await axios.get(
        "http://4.224.186.213/evaluation-service/depots",
        {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzaXJpc2hhcmVkZHlnb3R0YW1AZ21haWwuY29tIiwiZXhwIjoxNzgwNjM4NDQwLCJpYXQiOjE3ODA2Mzc1NDAsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIzZDc1MTQ5NC1lMTNjLTRjNzAtYjFjOS1jYzhlYWNiZWU1NzgiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJnb3R0YW0gc2lyaXNoYSIsInN1YiI6ImI1MmFkNjM4LWE4ZjQtNGYxNC05OTFiLTY2MTRiNDVhOGM4ZSJ9LCJlbWFpbCI6InNpcmlzaGFyZWRkeWdvdHRhbUBnbWFpbC5jb20iLCJuYW1lIjoiZ290dGFtIHNpcmlzaGEiLCJyb2xsTm8iOiIyM2JxMWE0OTEzIiwiYWNjZXNzQ29kZSI6IlFRZEVZeSIsImNsaWVudElEIjoiYjUyYWQ2MzgtYThmNC00ZjE0LTk5MWItNjYxNGI0NWE4YzhlIiwiY2xpZW50U2VjcmV0IjoidWh4SFdnbUZheG5IWXRTYSJ9.vEmVmFJJPoAb-EEtrOpZklP2blWff3CNy2tqQHQtgx8`
            }
        }
    );

    return response.data;
}

module.exports = getDepots;