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
import { toast } from 'react-toastify'
import { JobType } from '@/lib/types'

const FormDialog = ({
	formType,
	setDialogOpenState,
	job,
}: {
	formType: string
	setDialogOpenState: React.Dispatch<React.SetStateAction<boolean>>
	job: JobType | null
}) => {
	// Dynamic form title and button title
	let title
	let buttonTitle

	// States for form fields
	const [titleValue, setTitleValue] = useState('')
	const [desc, setDesc] = useState('')
	const [company, setCompany] = useState('')
	const [contact, setContact] = useState('')
	const [location, setLocation] = useState('')
	const [salary, setSalary] = useState('')

	// Loading state
	const [loading, setLoading] = useState(false)

	// Getting getJobs() from JobContext
	const { getJobs } = useContext(JobContext)

	// Switch statement to set title and button title
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

	// Function to handle form submission depending on formType
	const handleSubmit = async () => {
		setLoading(true)

		try {
			// If form is not valid, return
			if (!checkForm()) {
				toast.error('Please fill in all fields')
				return
			}

			if (formType === 'edit') {
				await axios.patch(
					`https://job-posting-v1al.onrender.com/api/v1/jobs/${job?._id}`,
					{
						title: titleValue,
						description: desc,
						company: company,
						contact: contact,
						location: location,
						salary: salary,
					}
				)
			} else if (formType === 'add') {
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
			}

			// Reset form fields
			setTitleValue('')
			setDesc('')
			setCompany('')
			setContact('')
			setLocation('')
			setSalary('')

			toast.success(
				`Job ${formType === 'add' ? 'Added' : 'Edited'} successfully`
			)
			setDialogOpenState(false) // Close dialog

			getJobs() // Get updated jobs
		} catch (error) {
			toast.error(
				`Job could not be ${formType === 'add' ? 'Added' : 'Edited'}`
			)
		} finally {
			setLoading(false)
		}
	}

	// Function to check if form is valid
	const checkForm = () => {
		if (titleValue === '') {
			return false
		} else if (desc === '') {
			return false
		} else if (company === '') {
			return false
		} else if (contact === '') {
			return false
		} else if (location === '') {
			return false
		} else if (salary === '') {
			return false
		} else {
			return true
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
