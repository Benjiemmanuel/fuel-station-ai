exports.getPumps = (req, res) => {

    res.json([
        {
            pumpNumber: 1,
            fuelType: "PMS",
            status: "Online"
        },
        {
            pumpNumber: 2,
            fuelType: "AGO",
            status: "Offline"
        }
    ]);

};