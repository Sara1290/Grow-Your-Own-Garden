//build a server, the 4 steps, the endpoints
const express = require ('express')
// const cropCtrl = require('./controllers/cropCtrl')
const cropSeedsCtrl = require('./controllers/cropSeedsCtrl')
const app = express()
app.use(express.json())

//my base url is in the package.json, keep in mind. all i need is end points here.
app.get('/api/cropSeeds', cropSeedsCtrl.getCropSeeds)
app.post('/api/cropSeeds', cropSeedsCtrl.addToGarden)
app.put('/api/cropSeeds/:id', cropSeedsCtrl.updateGarden)
app.delete('/api/cropSeeds', cropSeedsCtrl.deleteGarden)

app.listen(4242, () => console.log('Server is running on 4242'))