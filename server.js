const express = require('express')

const app = express()
const PORT = 3100

// const bottleRoute = ('./model/bottle')
// const { createEngine } = require('jsx-view-engine')

// app.set('view engine', 'jsx')
// app.engine('jsx', createEngine())

// Global declaration of bottles variable
let mainNum = 99

// App routes

app.get('/', (req, res) => {
    // res.send(`<h2>Bottles of beer on the wall!</h2><br /><a href="/new/:number_of_bottles">Take one down, pass it around...</a>`) 
    res.send(`<h2>${mainNum} Pairs of sneakers on the wall!</h2><br />
    <a href="${mainNum}">Start game!</a>`)
})

// app.get('/', (req, res) => {
//     res.send('<a href="/new">Take one down, pass it around...</a>')
// })

app.get('/:number_of_bottles', (req, res) => {
    console.log(req.params)
    // res.send(req.params.number_of_bottles)
    let mainNum = req.params.number_of_bottles
    if(mainNum > 1 ){
        res.send(`<h2> ${mainNum} Pairs of sneakers on the wall!</h2><br/>
        <a href="${mainNum - 1} ">Take one down, pass it around..</a>`)  
    }else if(mainNum == 1){
        res.send(`<h2> ${mainNum} Pairs of sneakers on the wall!</h2><br/>
        <a href="${mainNum - 1} ">Take the last pair down, pass it around..</a>`)
    }else{
        res.send(`<h2>0 Pairs of sneakers on the wall!</h2><br />
        <a href="/">Play again?</a>`)
    }
})


app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})