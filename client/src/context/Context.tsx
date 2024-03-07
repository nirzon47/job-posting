import { JobType } from '@/lib/types'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const JobContext = createContext<{
	jobs: JobType[]
	setJobs: React.Dispatch<React.SetStateAction<JobType[]>>
	getJobs: () => void
}>({
	jobs: [],
	setJobs: () => {},
	getJobs: () => {},
})

const JobProvider = ({ children }: { children: React.ReactNode }) => {
	const [jobs, setJobs] = useState<JobType[]>([])

	const getJobs = async () => {
		const { data } = await axios.get(
			'https://job-posting-v1al.onrender.com/api/v1/jobs/'
		)

		setJobs(data.data)
	}

	useEffect(() => {
		getJobs()
	}, [])

	return (
		<JobContext.Provider value={{ jobs, setJobs, getJobs }}>
			{children}
		</JobContext.Provider>
	)
}

export { JobContext, JobProvider }
