const { response } = require('express');
const { crops } = require('../data');
const data = require('../data')


module.exports = {
    getCropSeeds: (req, res) => {
        res.status(200).send(data)   
    },


    addToGarden: (req, res) => {
        //pulling veggies sent from front end off of the request object 
        let veggie = req.body
        //getting garden array to store veggie in.
        let garden = data.garden
        
        //we need each veggie to have a unique id so that later we can remove individual items.
        garden.length
        ? id = garden[garden.length-1].id+1
        : id = 0
        
        //adding key of id to the veggie object, and pushing veggie in to the garden array.
        veggie.id = id
        garden.push(veggie)
        
        res.status(200).send(data)
    },

    updateGarden: (req, res) => {
        const {id} = req.params
        
        let garden = req.body
        data.garden = garden 
        
        const harvestedVeggie = garden.findIndex(veggie => veggie.id === +id);
        data.garden.splice(harvestedVeggie, 1);
        res.status(200).send(data.garden)
    },
    deleteGarden: (req, res) => {
        let garden = data.garden
        garden.splice(0)
        res.status(200).send(data)
    }
}