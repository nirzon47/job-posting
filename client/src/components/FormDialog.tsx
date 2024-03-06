import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'

const FormDialog = ({ formType }: { formType: string }) => {
	let title
	let buttonTitle

	switch (formType) {
		case 'add':
			title = 'Add Job'
			buttonTitle = 'Add'
			break
		case 'edit':
			title = 'Edit Job'
			buttonTitle = 'Edit'
			break
	}
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle className='mb-4'>{title}</DialogTitle>
				<DialogDescription className='space-y-4'>
					<div className='grid w-full items-center gap-1.5'>
						<Label htmlFor='title'>Title</Label>
						<Input type='text' id='title' placeholder='Enter Title' />
					</div>
					<div className='grid w-full items-center gap-1.5'>
						<Label htmlFor='desc'>Description</Label>
						<Input
							type='text'
							id='desc'
							placeholder='Enter Description'
						/>
					</div>
					<div className='grid w-full items-center gap-1.5'>
						<Label htmlFor='cname'>Company Name</Label>
						<Input
							type='text'
							id='cname'
							placeholder='Enter Company Name'
						/>
					</div>
					<div className='grid w-full items-center gap-1.5'>
						<Label htmlFor='location'>Location</Label>
						<Input
							type='text'
							id='location'
							placeholder='Enter Location'
						/>
					</div>
					<div className='grid w-full items-center gap-1.5'>
						<Label htmlFor='salary'>Salary</Label>
						<Input type='number' id='salary' placeholder='Enter Salary' />
					</div>
					<div className='grid w-full items-center gap-1.5'>
						<Label htmlFor='salary'>Contact</Label>
						<Input
							type='number'
							id='salary'
							placeholder='Enter Contact'
						/>
					</div>
				</DialogDescription>
			</DialogHeader>
			<Button>{buttonTitle}</Button>
		</DialogContent>
	)
}

export default FormDialog
