import { Router } from 'express'
import { JobController } from '../controllers/jobs'

const router = Router()

// Post a new job
router.post('/', (req, res) => JobController.createJob(req, res))

// Get all jobs
router.get('/', (req, res) => JobController.getJobs(req, res))

// Patch job
router.patch('/:_id', (req, res) => JobController.updateJob(req, res))

// Delete job
router.delete('/:_id', (req, res) => JobController.deleteJob(req, res))

export default router
