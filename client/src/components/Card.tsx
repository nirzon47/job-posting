import { JobType } from '@/lib/types'
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog'
import { Edit } from 'lucide-react'
import FormDialog from './FormDialog'
import { useState } from 'react'

const Card = ({ job }: { job: JobType }) => {
	const [dialogOpenState, setDialogOpenState] = useState<boolean>(false)

	return (
		<div className='flex flex-col justify-between h-64 p-4 py-4 duration-200 rounded-lg shadow-md ring-1 ring-teal-200 hover:shadow-xl'>
			<h3 className='font-medium text-zinc-600'>{job.company}</h3>
			<h2 className='text-2xl font-medium text-teal-700'>{job.title}</h2>
			<p className='text-sm text-zinc-700'>{job.description}</p>
			<p className='text-zinc-700'>{job.location}</p>
			<div className='flex justify-between'>
				<p className='text-xl font-medium text-teal-600'>${job.salary}</p>
				<Dialog open={dialogOpenState} onOpenChange={setDialogOpenState}>
					<DialogTrigger>
						<span className='inline-block p-2 duration-150 bg-teal-800 rounded-lg cursor-pointer hover:bg-teal-700'>
							<Edit className='text-white' />
						</span>
					</DialogTrigger>
					<FormDialog
						formType='edit'
						setDialogOpenState={setDialogOpenState}
						job={job}
					/>
				</Dialog>
			</div>
		</div>
	)
}

export default Card
