import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { JobProvider } from './context/Context'

const App = () => {
	return (
		<JobProvider>
			<div className='min-h-screen p-4'>
				<h1 className='text-3xl font-bold text-center'>Job Posting App</h1>
				<div className='grid grid-cols-6'>
					<Sidebar />
					<Main />
				</div>
			</div>
		</JobProvider>
	)
}

export default App
