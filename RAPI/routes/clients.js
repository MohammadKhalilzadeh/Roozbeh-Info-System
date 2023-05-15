const express = require('express')
const router = express.Router()
const Client = require('../models/client')

// Get all clients
router.get('/', async(req, res) => {
    try {
        const allclients = await Client.find()
        res.status(200).json(allclients)
    } catch (error) {
        res.json({ message: error.message })
    }
})

// Post a client
router.post('/', async(req, res) => {
    console.log(req.body);
    try {
        const client = await Client(req.body)
        await client.save()
        res.status(200).json(client)
    } catch (error) {
        res.json(error)
    }
})

router.post('/boss/search', async(req, res) => {
    try {
        let search = req.body.search
        console.log(search);
        let find = await Client.find({ nationalno: { $regex: new RegExp('.*' + search + '.*', 'i') } }).limit(10).exec()
        res.send(find)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router