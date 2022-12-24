import Head from 'next/head'
import { useState } from 'react'
import { CSVLink } from 'react-csv'

import {
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	useReactTable,

	// Column,
	// Table,
	// ColumnFiltersState,
	// getFilteredRowModel,
	// getFacetedRowModel,
	// getFacetedUniqueValues,
	// getFacetedMinMaxValues,
	getSortedRowModel,
	// FilterFn,
	// FilterFns,
} from '@tanstack/react-table'

import { H1 } from '../components/headings'

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

const columnHelper = createColumnHelper()

const columns = [
	columnHelper.accessor('firstName', {
		cell: info => info.getValue(),
	}),
	columnHelper.accessor(row => row.lastName, {
		id: 'lastName',
		cell: info => <i>{info.getValue()}</i>,
		header: () => <span>Last Name</span>,
	}),
	columnHelper.accessor('age', {
		header: () => 'Age',
		cell: info => info.renderValue(),
	}),
	columnHelper.accessor('visits', {
		header: () => <span>Visits</span>,
	}),
	columnHelper.accessor('status', {
		header: 'Status',
	}),
	columnHelper.accessor('progress', {
		header: 'Profile Progress',
	}),
]

export default function Table() {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
	})

	return (
		<div>
			<Head>
				<title>Tailwind CSS Test</title>
			</Head>
			<main>
				<SectionTitle>React Table</SectionTitle>
				<div className="mb-2">
					<CSVLink
						data={data}
						filename="export.csv"
						className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded text-xs"
					>
						Export CSV
					</CSVLink>
				</div>
				<div className='overflow-x-auto w-full border-2 border-gray-200'>
					<table className='w-full table-auto whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden'>
						<thead className="bg-gray-50">
							{table.getHeaderGroups().map(headerGroup => (
								<tr key={headerGroup.id} className="text-gray-600 text-left">
								{headerGroup.headers.map(header => (
									<th key={header.id} className="font-semibold text-sm uppercase p-2">
										{header.isPlaceholder
											? null
											: (
												<div
													{...{
														className: header.column.getCanSort()
															? 'cursor-pointer select-none'
															: '',
														onClick: header.column.getToggleSortingHandler(),
													}}
												>
													{flexRender(
														header.column.columnDef.header,
														header.getContext()
													)}
													{{
														asc: ' 🔼',
														desc: ' 🔽',
													}[header.column.getIsSorted()] ?? null}
												</div>
											)}
									</th>
								))}
								</tr>
							))}
						</thead>
						<tbody className="divide-y divide-gray-200">
							{table.getRowModel().rows.map(row => (
								<tr key={row.id}>
									{row.getVisibleCells().map(cell => (
										<td key={cell.id} className="p-2">
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</main>
		</div>
	)
}
