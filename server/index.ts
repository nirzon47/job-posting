import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import cors from 'cors'

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

// Middleware for handling CORS
app.use(cors())

// Middleware for logging requests
app.use(morgan(':method | Endpoint - :url | :date[web] | :response-time ms'))

// Routes
app.use('/api/v1/jobs', jobRoutes)

// Invalid route handler
app.use((req: any, res: any) => {
	res.status(404).json({ status: 'error', message: 'Invalid route' })
})

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
	console.log(err)
	res.status(500).json({ status: 'error', message: err.message })
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`)
})
