import express from 'express'

const app = express()

app.use(express.json())

app.get('/', () => {
    console.log('Olá Mundo!')
})

app.listen(/*porta*/3000, /*callback*/() => {

})