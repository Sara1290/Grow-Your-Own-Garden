//build a server, the 4 steps, the endpoints
const express = require ('express')
const cropCtrl = require('./controllers/cropCtrl')
const app = express()
app.use(express.json())

//my base url is in the package.json keep in mind. all i need is end points here.
app.get('/api/crops', cropCtrl.getCrops )
app.post('/api/crops',)
app.put('/api/crops/:id',)
app.delete('/api/crops/:id',)

app.listen(4242, () => console.log('Server is running on 4242'))