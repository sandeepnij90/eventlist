import React from 'react'
import '@testing-library/jest-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Table from '../Table'
import { TableData, TableHeader } from '../__mocks__/tableData'

afterEach(cleanup)

const renderComponent = () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(<Table header={TableHeader} rows={TableData} rowClick={handleClick} />)
    return getByTestId
}

test('Table should render', () => {
    const  getByTestId  = renderComponent()
    expect(getByTestId('table')).toBeDefined
})

test('Table should have header', () => {
    const getByTestId = renderComponent()
    expect(getByTestId('header')).toBeDefined
})

test('Table should have body', () => {
    const getByTestId = renderComponent()
    expect(getByTestId('body')).toBeDefined
})

test('Table should render header with data', () => {
    const getByTestId = renderComponent()
    const header = getByTestId('header')
    expect(header.innerHTML).toEqual("<tr><th>Name</th><th>Email</th></tr>")
})

test('Table should render body with data', () => {
    const handleClick = jest.fn
    const { getAllByTestId } = render(<Table header={TableHeader} rows={TableData} rowClick={handleClick}/>)
    const cell = getAllByTestId('cell')
    const row = getAllByTestId('row')
    expect(row.length).toEqual(3)
    expect(cell.length).toEqual(5)
})

test('Table should render header with data', () => {
    const getByTestId = renderComponent()
    const header = getByTestId('header')
    expect(header.innerHTML).toEqual("<tr><th>Name</th><th>Email</th></tr>")
})