import axios from 'axios'

const getData = async () => {
	try {
		const { data } = await axios.get(
			'https://nirzon-jobs.up.railway.app/api/v1/jobs/'
		)

		return data
	} catch (error) {
		return undefined
	}
}

export { getData }
