import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'

import jobRoutes from './routes/jobs'

const PORT = process.env.PORT || 5000
const MONGO_URI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`

const app = express()

// Connect to MongoDB
mongoose
	.connect(MONGO_URI, { dbName: 'jobs' })
	.then(() => {
		console.log('Connected to MongoDB')
	})
	.catch((err) => {
		console.log(err)
	})

// Middleware for parsing JSON request bodies
app.use(express.json())

// Middleware for logging requests
app.use(morgan(':method | Endpoint - :url | :date[web] | :response-time ms'))

// Routes
app.use('/api/v1/jobs', jobRoutes)

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})