const express = require('express')
const router = express.Router()
const controller = require('../controllers/titleController')

router.get('/all', async (req, res) => {
    controller.get(req, res)
})
router.post('/create', async (req, res) => {
    controller.add(req, res)
    console.log(req.body)
})

module.exports = router
