const express = require("express")
const dotenv=require('dotenv')
const cors=require('cors')
const routers=require('./Routes/AuthRoutes')


dotenv.config()
const app = express()

app.use('/',routers)

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' })
})

const PORT=process.env.P0RT
app.listen(PORT,()=>{
    console.log('Server running at 5500 port');
})

