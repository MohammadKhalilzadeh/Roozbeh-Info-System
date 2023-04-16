const express = require('express')
const router = express.Router()
const Staff = require('../models/staff')

// Getting All
router.get('/', async(req, res) => {
    try {
        const staff = await Staff.find()
        res.json(staff)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Getting One
router.get('/:id', async(req, res) => {
    try {
        const staff = await Staff.findById(req.params.id)
        res.json(staff)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Creating One
router.post('/', async(req, res) => {
    console.log(req.body);
    const staff = await Staff(req.body)
    try {
        await staff.save()
        res.json(staff)
    } catch (error) {
        res.status(500).json({ message: error.message })
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
                res.status(400).json({ message: 'Wrong Password' })
            }
        } else {
            res.status(404).json({ message: 'Not Found' })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', async(req, res) => {
    console.log('Update');
})

// Deleting One
router.delete('/:id', async(req, res) => {
    console.log('Delete');
})

module.exports = router