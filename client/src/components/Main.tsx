import { JobContext } from '@/context/Context'
import React, { useContext } from 'react'
import Card from './Card'
import { JobType } from '@/lib/types'

const Main = () => {
	const jobsContext = useContext(JobContext) as {
		jobs: JobType[]
		setJobs: React.Dispatch<React.SetStateAction<JobType[]>>
	}
	const jobs = jobsContext.jobs

	return (
		<div className='grid grid-cols-1 col-span-5 gap-4 px-6 md:grid-cols-2 lg:grid-cols-3'>
			{jobs.length === 0 && (
				<p className='mt-8 text-xl text-center'>
					Loading... Server is spinning up.
				</p>
			)}

			{jobs && jobs.map((job) => <Card key={job._id} job={job} />)}
		</div>
	)
}

export default Main
