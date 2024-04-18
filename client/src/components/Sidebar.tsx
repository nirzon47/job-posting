import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import FormDialog from './FormDialog'
import { useState } from 'react'

const Sidebar = () => {
	const [dialogOpenState, setDialogOpenState] = useState<boolean>(false)

	return (
		<div className='flex flex-col items-center col-span-2 mb-12 md:col-span-1'>
			<Dialog open={dialogOpenState} onOpenChange={setDialogOpenState}>
				<DialogTrigger>
					<span className='px-8 py-3 font-medium duration-200 rounded-lg shadow hover:shadow-lg hover:bg-teal-50 shadow-teal-150'>
						Add Job
					</span>
				</DialogTrigger>
				<FormDialog
					formType='add'
					setDialogOpenState={setDialogOpenState}
					job={null}
				/>
			</Dialog>
		</div>
	)
}

export default Sidebar
