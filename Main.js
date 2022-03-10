const express = require('express')

const app = express()

const port = 5000


var users = [
    {name : 'Sahla', age : 25,id : 1},
    {name : 'Mohamed', age : 30,id : 2},
    {name : 'Sofiene', age : 27,id : 3}
]

app.use(express.json())

// Read
app.get('/ReadUsers',(req,res)=>{
    res.send(users)
})
//Create
app.post('/CreateUser',(req,res)=>{
    users = [...users,req.body]
    res.send(users)
})

//Delete
app.delete('/DeleteUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.filter(user=> user.id != id)
    res.send(users)
})
//Update
app.put('/UpdateUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.map(user=> user.id == id ? {...user,...req.body} : user)
    res.send(users)
})

app.listen(port,console.log(`Server is running on ${port}`))