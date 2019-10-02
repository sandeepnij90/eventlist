import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Checkbox from '../Checkbox'
afterEach(cleanup)

const renderComponent = () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(<Checkbox id="test" handleChange={handleChange} label="my checkbox" />)
    return getByTestId
}

test('Checkbox renders', () => {
    const getByTestId = renderComponent()
    expect(getByTestId('checkbox')).toBeDefined
})


//broken test which needs fixing
test.skip('handles change in value', () => {
    const handleChange = jest.fn()
    const { getByTestId } = render(<Checkbox id="test" handleChange={handleChange} label="my label" />)
    fireEvent.change(getByTestId('checkbox'), { target: { checked: true } })
    expect(handleChange).toBeCalled()
})