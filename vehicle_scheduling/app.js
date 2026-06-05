require("dotenv").config();

const getToken = require("./auth");
const getDepots = require("./depotService");
const getVehicles = require("./vehicleService");
const scheduleTasks = require("./scheduler");

async function main() {

    const token = await getToken();

    const depotData = await getDepots(token);
    const vehicles = await getVehicles(token);

    for (const depot of depotData.depots) {

        const result = scheduleTasks(
            vehicles,
            depot.MechanicHours
        );

        console.log("\n=================");
        console.log("Depot:", depot.ID);
        console.log("Hours:", depot.MechanicHours);
        console.log("Max Impact:", result.maxImpact);
        console.log(
            "Tasks Selected:",
            result.selectedTasks.length
        );
    }
}

main();