import { JobType } from '@/lib/types'

const Card = ({ job }: { job: JobType }) => {
	return (
		<div className='flex flex-col justify-between h-64 p-4 py-4 duration-200 rounded-lg shadow-md ring-1 ring-teal-200 hover:shadow-xl'>
			<h3 className='font-medium text-zinc-600'>{job.company}</h3>
			<h2 className='text-2xl font-medium text-teal-700'>{job.title}</h2>
			<p className='text-sm text-zinc-700'>{job.description}</p>
			<p className='text-zinc-700'>{job.location}</p>
			<p className='text-xl font-medium text-teal-600'>${job.salary}</p>
		</div>
	)
}

export default Card
