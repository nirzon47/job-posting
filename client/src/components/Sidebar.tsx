import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import FormDialog from './FormDialog'

const Sidebar = () => {
	return (
		<div className='flex flex-col items-center col-span-1'>
			<Dialog>
				<DialogTrigger>
					<span className='px-8 py-3 font-medium duration-200 rounded-lg shadow hover:shadow-lg hover:bg-teal-50 shadow-teal-150'>
						Add Job
					</span>
				</DialogTrigger>
				<FormDialog formType='add' />
			</Dialog>
		</div>
	)
}

export default Sidebar
