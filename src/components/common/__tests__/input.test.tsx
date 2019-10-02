import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from '../Input'
afterEach(cleanup)

test('input renders', () => {
    const { getByTestId } = render(<Input type="text" handleChange={null}/>)
    expect(getByTestId('input')).toBeDefined
})

test('displays placeholder', () => {
    const { getByPlaceholderText } = render(<Input type="text" handleChange={null} placeholder="some text"/>)
    expect(getByPlaceholderText('some text')).toBeDefined
})

test('handles change in text', () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(<Input type="text" handleChange={handleChange} />)
    fireEvent.change(getByTestId('input'), { target: { value: 'testing new input'}})
    expect(handleChange).toBeCalled()
})