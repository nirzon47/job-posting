import { Request, Response } from 'express'
import { Job } from '../models/jobs'

// Controller for POST route of '/api/v1/jobs'
const createJob = async (req: Request, res: Response) => {
	// Save a new job entry
	try {
		// Using the data of req.body, creates a new job
		const newJob = Job.create(req.body)
		// Awaits the completion process of creating the new job and then stores the result in job
		const job = await newJob

		res.json({
			status: 'success',
			message: `New Job created successfully`,
			id: job._id,
		})
	} catch (err: any) {
		res.status(500).json({ status: 'error', message: err.message })
	}
}

// Controller for GET route of '/api/v1/jobs'
const getJobs = async (req: Request, res: Response) => {
	// Get all jobs
	try {
		const jobs = await Job.find()
		// Returns the result
		res.json({ status: 'success', data: jobs })
	} catch (err: any) {
		res.status(500).json({ status: 'error', message: err.message })
	}
}

// Controller for PATH route of '/api/v1/jobs'
const updateJob = async (req: Request, res: Response) => {
	try {
		const job = await Job.findByIdAndUpdate(
			req.params._id,
			{ $set: req.body }, // The $set operator replaces the value of a field with the specified value.
			{
				new: true, // Returns the modified document rather than the original. The default is false.
			}
		)

		res.json({ status: 'success', message: 'Job updated', data: job })
	} catch (err: any) {
		res.status(500).json({ status: 'error', message: err.message })
	}
}

// Controller for DELETE route of '/api/v1/jobs'
const deleteJob = async (req: Request, res: Response) => {
	try {
		const job = await Job.findOneAndDelete({ _id: req.params._id })

		res.json({ status: 'success', message: 'Job deleted', data: job })
	} catch (err: any) {
		res.status(500).json({ status: 'error', message: err.message })
	}
}

export const JobController = {
	createJob,
	getJobs,
	updateJob,
	deleteJob,
}
