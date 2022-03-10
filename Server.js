const express = require('express')

const app = express()


const port = 5000

const Middleware=(req,res,next)=>{
    console.log('Sahla')
    next()
}

app.use(Middleware)

// app.get('/Sahla',Middleware,(req,res)=>{
//         res.send('Sofiene')
// })

app.get('/Sahla',(req,res)=>{
    res.send('Sofiene')
})

app.get('/Balise',(req,res)=>{
    res.send('<h1>Test Balise</h1>')
})

// app.get('/Gomycode',(req,res)=>{
//      res.sendFile(__dirname+'/Public/Users.html')
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+'/Public/style.css')
// })

// app.get('/Khalil',(req,res)=>{
//     res.sendFile(__dirname+'/Public/')
// })

app.use(express.static('Public'))

app.listen(port,console.log(`Server is running on the port ${port}`))











