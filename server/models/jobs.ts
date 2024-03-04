import mongoose from 'mongoose'
import { Schema } from 'mongoose'

// Define the Job schema
const JobSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		salary: {
			type: String,
			required: true,
		},
		contact: {
			type: String,
			required: true,
		},
		date: {
			type: Date,
			default: Date.now,
		},
	},
	{
		versionKey: '__v',
	}
)

// Make the Job model out of the schema and export it
export const Job = mongoose.model('jobs', JobSchema)
