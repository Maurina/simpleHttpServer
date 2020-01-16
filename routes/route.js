const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

router.use('/api', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'info.json'))
})

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'))
})



module.exports = router
