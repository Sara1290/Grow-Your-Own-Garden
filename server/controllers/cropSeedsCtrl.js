//this controller is for bringing my crops' data into the picture so we can use it
const axios = require('axios');


module.exports = {
    getCropSeeds: (req, res) => {
        const cropsArray = [];

        axios.get('./api/data')
        .then(res => {
            cropsArray.push(res.data);
        })
        .catch(err => console.log(err));
    }
}