const express = require('express')
const router = express.Router()
const Form = require('../models/form')

// Getting All User's Forms
router.get('/:nationalid', async(req, res) => {
    console.log(req.params.nationalid);
    try {
        const userforms = await Form.find().where('nationalno').equals(req.params.nationalid)
        res.status(200).json(userforms)
    } catch (error) {
        res.json(error)
    }
})

// Getting a single form
router.get('/single/:id', async(req, res) => {
    console.log(req.params.id);
    try {
        const form = await Form.findById(req.params.id)
        res.status(200).json(form)
    } catch (error) {
        res.json(error)
    }
})

// Getting MadadKari Forms
router.get('/madadkari/:nationalid', async(req, res) => {
    console.log(req.params.nationalid);
    try {
        const userforms = await Form.find({
            $or: [{
                'formcode': [
                    'FQ12-01-00',
                    'FQ12-02-00',
                    'FQ12-03-00',
                    'FQ12-05-00',
                    'FQ12-06-00',
                    'FQ12-07-00',
                    'FQ12-08-00',
                    // 'FQ12-10-00',
                    'FQ12-11-00',
                    'FQ12-12-00',
                    'FQ12-13-00',
                    'FQ12-14-00',
                    'FQ12-15-00',
                    'FQ12-16-00',
                    'FQ12-17-00',
                    'FQ12-18-00',
                    'FQ12-20-00',
                    'LQ12-04-00',
                    'LQ12-03-00',
                    'LQ12-02-00',
                ],
            }, ],
        }).where('nationalno').equals(req.params.nationalid)
        res.status(200).json(userforms)
    } catch (error) {
        res.json(error)
    }
})

// Getting Counsultant Forms
router.get('/counsuling/:nationalid', async(req, res) => {
    console.log(req.params.nationalid);
    try {
        const userforms = await Form.find({
            $or: [{
                'formcode': [
                    'FQ12-04-00',
                ],
            }, ],
        }).where('nationalno').equals(req.params.nationalid)
        res.status(200).json(userforms)
    } catch (error) {
        res.json(error)
    }
})

// Getting Educators Forms
router.get('/educator/:nationalid', async(req, res) => {
    console.log(req.params.nationalid);
    try {
        const userforms = await Form.find({
            $or: [{
                'formcode': [
                    'FQ12-24-00',
                    'FQ12-22-00',
                    'LQ12-01-00',
                ],
            }, ],
        }).where('nationalno').equals(req.params.nationalid)
        res.status(200).json(userforms)
    } catch (error) {
        res.json(error)
    }
})

// Getting Health Dep. Forms
router.get('/health/:nationalid', async(req, res) => {
    console.log(req.params.nationalid);
    try {
        const userforms = await Form.find({
            $or: [{
                'formcode': [
                    'FQ12-09-00',
                    'FQ12-21-00',
                    'FQ12-23-00',
                ],
            }, ],
        }).where('nationalno').equals(req.params.nationalid)
        res.status(200).json(userforms)
    } catch (error) {
        res.json(error)
    }
})

// Getting Health Dep. Forms
router.get('/boss/:nationalid', async(req, res) => {
    console.log(req.params.nationalid);
    try {
        const userforms = await Form.find({
            $or: [{
                'formcode': [
                    'FQ12-13-00',
                    'FQ12-14-00',
                ],
            }, ],
        }).where('nationalno').equals(req.params.nationalid)
        res.status(200).json(userforms)
    } catch (error) {
        res.json(error)
    }
})

// Post a form
router.post('/', async(req, res) => {
    console.log(req.body);
    try {
        const form = await Form(req.body)
        await form.save()
        res.json(form)
    } catch (error) {
        res.json(error)
    }
})

// updating the form

// deleting the form
router.delete('/:id', async(req, res) => {
    try {
        const form = await Form.findByIdAndDelete(req.params.id)
        res.status(200).json(form)
    } catch (error) {
        res.json(error)
    }
})

module.exports = router