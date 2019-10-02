import React from 'react'
import '@testing-library/jest-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Button from '../Button'

afterEach(cleanup)

const renderComponent = (text: string, action?: Function) => {
    const buttonAction = jest.fn()
    const { getByTestId } = render(<Button text={text} handleClick={action ? action : buttonAction}/>)
    return getByTestId
}   

test('Renders Button', () => {
    const getByTestId = renderComponent('my button')
    expect(getByTestId('button')).toBeDefined
})

test('Displays button text', () => {
    const getByTestId = renderComponent('my new button')
    expect(getByTestId('button').textContent).toEqual('my new button')
})

test('Handles click', () => {
    const handleClick = jest.fn()
    const getByTestId = renderComponent('my button', handleClick)
    fireEvent.click(getByTestId('button'))
    expect(handleClick).toBeCalled()
})
