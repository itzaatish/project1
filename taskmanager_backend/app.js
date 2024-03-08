require('dotenv').config()
const express = require("express")
const app = express()
const tasks = require("./Routes/task")
const connectDatabase = require("./db/database")
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send("we are now live")
})

app.use("/", tasks)

const port = 5000;
// console.log(process.env.MONGO_URL);
const start = async() =>{
    try{
        await connectDatabase(process.env.MONGO_URL)
        app.listen(port, ()=>{console.log(`Server is listening at port :${port}`)})
    }
    catch(error){
        console.log(error)
    }
}
start()