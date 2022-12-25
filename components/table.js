import { useState } from 'react'
import { CSVLink } from 'react-csv'

import {
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

export default function ({ data, columns }) {
	const table = useReactTable({
		data,
		columns,
		columnResizeMode: 'onChange',
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
	})

	return (
		<div>
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
								<th
									key={header.id}
									className="font-semibold text-sm uppercase p-2"
									style={{
										width: header.getSize(),
									}}
								>
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
									<div
										{...{
											onMouseDown: header.getResizeHandler(),
											onTouchStart: header.getResizeHandler(),
											className: `resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`,
											// style: {
											// 	transform: header.column.getIsResizing()
											// 		? `translateX(${table.getState().columnSizingInfo.deltaOffset}px)`
											// 		: '',
											// },
										}}
									/>
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
		</div>
	)
}
