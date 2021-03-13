//build the handler functions module.exports { read, create, update, delete}
const crops = []
let id = 1;

module.exports = {
    getCrops: (req, res) => {
        res.status(200).send(crops)
    },
}