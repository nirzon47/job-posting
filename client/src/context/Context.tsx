import { getData } from '@/lib/methods'
import { createContext, useState } from 'react'

const JobContext = createContext({})

const JobProvider = ({ children }: { children: React.ReactNode }) => {
	const data = getData()
	console.log(data)

	const [jobs, setJobs] = useState(data)

	return (
		<JobContext.Provider value={{ jobs, setJobs }}>
			{children}
		</JobContext.Provider>
	)
}

export { JobContext, JobProvider }
