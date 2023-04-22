const express = require('express')
const app = express()
const cors = require('cors')

// View engine, looks in views folder
app.set('view engine', 'ejs')
app.set('views', './client/views') // enough with only 'client'?

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/chat', (req, res) => {
    res.render('chat')
})

app.get('/titles', (req, res) => {
    res.render('titles')
})

app.get('/titles/add', (req, res) => {
    res.render('add')
})

app.get('/index', (req, res) => {
    res.redirect('/')
})

app.use((req, res) => {
    res.status(404).render('404')
})

app.use(cors())
app.use(express.urlencoded({ extended: true }))

const port = 5421
app.listen(port, console.log('http://localhost:' + port))
