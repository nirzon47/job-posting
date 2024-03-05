import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { JobProvider } from './context/Context'

const App = () => {
	return (
		<JobProvider>
			<div className='min-h-screen p-4'>
				<h1 className='mt-4 mb-8 text-3xl font-light text-center text-teal-800'>
					Job Posting App
				</h1>
				<div className='grid grid-cols-6'>
					<Sidebar />
					<Main />
				</div>
			</div>
		</JobProvider>
	)
}

export default App
