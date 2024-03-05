import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

const JobContext = createContext({})

const JobProvider = ({ children }: { children: React.ReactNode }) => {
	const [jobs, setJobs] = useState()

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
		<JobContext.Provider value={{ jobs, setJobs }}>
			{children}
		</JobContext.Provider>
	)
}

export { JobContext, JobProvider }
