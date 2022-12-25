import Head from 'next/head'
import { useState } from 'react'

import { H1 } from '../components/headings'
import Table from '../components/table'

const SectionTitle = ({ children }) => <H1 className="mt-4">{children}</H1>

const data = [
	{
		firstName: 'tanner',
		lastName: 'linsley',
		age: 24,
		visits: 100,
		status: 'In Relationship',
		progress: 50,
	},
	{
		firstName: 'tandy',
		lastName: 'miller',
		age: 40,
		visits: 40,
		status: 'Single',
		progress: 80,
	},
	{
		firstName: 'joe',
		lastName: 'dirte',
		age: 45,
		visits: 20,
		status: 'Complicated',
		progress: 10,
	},
]

const columns = [
	{
		accessorKey: 'firstName',
	},
	{
		accessorKey: 'lastName',
		cell: info => <i>{info.getValue()}</i>,
		header: () => <span>Last Name</span>,
	},
	{
		accessorKey: 'age',
		header: () => 'Age',
		cell: info => info.renderValue(),
	},
	{
		accessorKey: 'visits',
		header: () => <span>Visits</span>,
	},
	{
		accessorKey: 'status',
		header: 'Status',
	},
	// {
	// 	accessorKey: 'progress', 
	// 	header: 'Profile Progress',
	// },
]

export default function ExampleTable() {
	return (
		<div>
			<Head>
				<title>Tailwind CSS Test</title>
			</Head>
			<main>
				<SectionTitle>React Table</SectionTitle>
				<Table
					data={data}
					columns={columns}
				/>
			</main>
		</div>
	)
}
