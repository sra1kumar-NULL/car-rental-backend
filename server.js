const express=require('express')
const cors=require('cors')
const { cars } = require('./data')
const server= express()

server.use(express.urlencoded({extended: false}))
server.use(express.json())
server.use(cors())

require('dotenv').config()

const PORT= process.env.PORT || 3000

server.listen(PORT,()=>{
    console.log('listening on the Port : ',PORT)
})

const bookingsRouter = require('./routes/bookings-router')

server.use('/bookings',bookingsRouter)

// cars endpoint

server.get('/cars',(req,res)=>{
  const status={
    'status':true,
    'data':cars
  }
  res.send(status)
})


