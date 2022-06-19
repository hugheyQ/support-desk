const express = require('express')
const colors = require('colors')
require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000

// Connect to database
connectDB()

const userRoutes = require('./routes/userRoutes')
const ticketRoutes = require('./routes/ticketRoutes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Welcome to the Support Desk API' })
})

//Routes
app.use('/api/users', userRoutes)
app.use('/api/tickets', ticketRoutes)

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
