const express = require('express')
const router = express.Router()
const Staff = require('../models/staff')

// Getting All
router.get('/', async(req, res) => {
    try {
        const staff = await Staff.find()
        res.status(200).json(staff)
    } catch (error) {
        res.json({ message: error.message })
    }
})

// Getting One
router.get('/:id', async(req, res) => {
    try {
        console.log(req.params.id);
        const staff = await Staff.findById(req.params.id)
        res.status(200).json(staff)
    } catch (error) {
        res.json(error)
    }
})

// Creating One
router.post('/', async(req, res) => {
    console.log(req.body);
    const staff = await Staff(req.body)
    try {
        await staff.save()
        res.status(200).json(staff)
    } catch (error) {
        res.json(error)
    }
})

// Login
router.post('/login/:username', async(req, res) => {
    const staff = await Staff.find().where("username").equals(req.params.username)
    let result = staff[0]
    try {
        if (result) {
            if (result.password == req.body.password) {
                res.status(200).json(result)
            } else {
                res.status(401).json({ message: 'Wrong Password' })
            }
        } else {
            res.status(404).json({ message: 'Not Found' })
        }
    } catch (err) {
        res.json(err)
    }
})

// Updating One
router.patch('/:id', async(req, res) => {
    console.log('Update');
})

// Deleting One
router.delete('/:id', async(req, res) => {
    console.log(req.params.id);
    try {
        const staff = await Staff.findByIdAndDelete(req.params.id)
        res.status(200).json(staff)
    } catch (error) {
        res.json(error)
    }
})
module.exports = router