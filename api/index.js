const express = require('express')
const app = express()
const port = 9001

app.get('/', (req, res) => {
    res.send('Nice Job')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})