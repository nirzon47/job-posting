import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { useContext, useState } from 'react'
import axios from 'axios'
import { JobContext } from '@/context/Context'

const FormDialog = ({
	formType,
	setDialogOpenState,
}: {
	formType: string
	setDialogOpenState: React.Dispatch<React.SetStateAction<boolean>>
}) => {
	let title
	let buttonTitle

	const [titleValue, setTitleValue] = useState('')
	const [desc, setDesc] = useState('')
	const [company, setCompany] = useState('')
	const [contact, setContact] = useState('')
	const [location, setLocation] = useState('')
	const [salary, setSalary] = useState('')

	const [loading, setLoading] = useState(false)

	const { getJobs } = useContext(JobContext)

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

	const handleSubmit = () => {
		if (formType === 'add') {
			addJob()
		} else if (formType === 'edit') {
			// Edit Job
		}
	}

	const addJob = async () => {
		setLoading(true)
		try {
			await axios.post(
				'https://job-posting-v1al.onrender.com/api/v1/jobs/',
				{
					title: titleValue,
					description: desc,
					company: company,
					contact: contact,
					location: location,
					salary: salary,
				}
			)

			setTitleValue('')
			setDesc('')
			setCompany('')
			setContact('')
			setLocation('')
			setSalary('')
			getJobs()
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
			setDialogOpenState(false)
		}
	}

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle className='mb-4'>{title}</DialogTitle>
				<DialogDescription className='space-y-4'>
					<span className='grid w-full items-center gap-1.5'>
						<Label htmlFor='title'>Title</Label>
						<Input
							type='text'
							id='title'
							placeholder='Enter Title'
							value={titleValue}
							onChange={(e) => setTitleValue(e.target.value)}
						/>
					</span>
					<span className='grid w-full items-center gap-1.5'>
						<Label htmlFor='desc'>Description</Label>
						<Input
							type='text'
							id='desc'
							placeholder='Enter Description'
							value={desc}
							onChange={(e) => setDesc(e.target.value)}
						/>
					</span>
					<span className='grid w-full items-center gap-1.5'>
						<Label htmlFor='cname'>Company Name</Label>
						<Input
							type='text'
							id='cname'
							placeholder='Enter Company Name'
							value={company}
							onChange={(e) => setCompany(e.target.value)}
						/>
					</span>
					<span className='grid w-full items-center gap-1.5'>
						<Label htmlFor='location'>Location</Label>
						<Input
							type='text'
							id='location'
							placeholder='Enter Location'
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						/>
					</span>
					<span className='grid w-full items-center gap-1.5'>
						<Label htmlFor='salary'>Salary</Label>
						<Input
							type='number'
							id='salary'
							placeholder='Enter Salary'
							value={salary}
							onChange={(e) => setSalary(e.target.value)}
						/>
					</span>
					<span className='grid w-full items-center gap-1.5'>
						<Label htmlFor='salary'>Contact</Label>
						<Input
							type='number'
							id='salary'
							placeholder='Enter Contact'
							value={contact}
							onChange={(e) => setContact(e.target.value)}
						/>
					</span>
				</DialogDescription>
			</DialogHeader>
			<Button onClick={handleSubmit} disabled={loading}>
				{!loading && buttonTitle} {loading && 'Processing'}
			</Button>
		</DialogContent>
	)
}

export default FormDialog
