const express = require('express')
const app = express()
const port = 3000

let dbUsers = [
    {
        username: "faru",
        password: "011018",
        name: "Fairuz",
        email: "faru@mail.com"
    },
    
    {
        username: "polobon",
        password: "010831",
        name: "Bon",
        email: "polobon@mail.com"
    },
    
    {
        username: "lengzaii",
        password: "011120",
        name: "Cheok",
        email: "lengzaii@mail.com"
    },
]


app.use(express.json()); //decode the json included in request

function login(username, password){
    console.log("someone tried to login with", username, password)
    
    let matched = dbUsers.find(element=>element.username == username)

    if(matched) {
        if(matched.password == password){
            return matched
        }         
        else {
            return "Password not matched"
        }
    }
    else {
        return "Username not found"
    }
}

function register(newusername, newpassword, newname, newemail){
    //TODO: Check if username exists
    let matched = dbUsers.find(element=>element.username == newusername)

    if(matched) {
        return "This user already exists"
    }

    else {
        dbUsers.push({
            username: newusername,
            password: newpassword,
            name : newname,
            email: newemail
        })

        return "new user is added"
    }
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/', (req, res) => {
    let data = req.body
    res.send('Post request ' + JSON.stringify(data))
})


app.post('/bye', (req, res) => {
    res.send('Bye Bye World!')
}) //this will not work as anything typed in the address bar will use GET method.

app.post('/login',(req,res)=>{
    let data = req.body
    res.send(
        login(data.username, data.password)
    )
})

app.post('/register',(req,res)=>{
    let data = req.body
    res.send(
        register(data.username, data.password, data.name, data.email)
    )
})


//create a POST route for user to login
// app.post('/login', (req,res)=>{
//     //get username and password from the request body
//     const {username, password} = req.body;

//     //find the user in database
//     const user = dbUsers.find(user=>user.username === username && user.password === password);

//     //if user is found
//     if(user){
//         res.send(user);
//     }
//     else{
//         //if user is not found
//         res.send({error:"User not found"});
//     }
// })

//start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})