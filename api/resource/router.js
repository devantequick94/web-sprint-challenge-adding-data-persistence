// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()
const {checkName} = require('./middleware')

router.get('/', async (req, res) => {
    const resources = await Resource.find()
    res.json(resources)
})

router.post('/', checkName, async (req, res) => {
    const resource = req.body
    const newResource = await Resource.create(resource)
    res.status(201).json(newResource)

})

module.exports = router