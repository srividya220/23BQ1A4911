async function Log(stack, level, packageName, message) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyM2JxMWE0OTExQHZ2aXQubmV0IiwiZXhwIjoxNzgwNjM1NzA4LCJpYXQiOjE3ODA2MzQ4MDgsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxYjBjY2Y1Yi0xYzA3LTQyZWUtOTJhNi02Nzk0NWU0OGEzMDAiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJnYWRkYW0gdmVua2F0YSB2aWpheWEgbGFrc2htaSIsInN1YiI6Ijg0NTQzMDA2LTE2NzgtNDk3Ni1iZTg3LTcwNWE0Y2E1ZmFhYiJ9LCJlbWFpbCI6IjIzYnExYTQ5MTFAdnZpdC5uZXQiLCJuYW1lIjoiZ2FkZGFtIHZlbmthdGEgdmlqYXlhIGxha3NobWkiLCJyb2xsTm8iOiIyM2JxMWE0OTExIiwiYWNjZXNzQ29kZSI6IlFRZEVZeSIsImNsaWVudElEIjoiODQ1NDMwMDYtMTY3OC00OTc2LWJlODctNzA1YTRjYTVmYWFiIiwiY2xpZW50U2VjcmV0IjoiSmJ5R0VhS3VRc25aa2V6SCJ9.ADh81_NiV9yGMGhgMLqkC3QvYT18Vz63RLn73U2NQvE";

    try {
        const response = await fetch(
            "http://4.224.186.213/evaluation-service/logs",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    stack: stack,
                    level: level,
                    package: packageName,
                    message: message
                })
            }
        );

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Logging failed:", error);
    }
}

module.exports = Log;