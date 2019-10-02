import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HashRouter } from 'react-router-dom'
import Marketing from '../Marketing'
import configureMockStore from 'redux-mock-store'

const mockstore = configureMockStore()
let store = mockstore({
    user: {
        name: 'testing',
        email: 'test',
        optedIn: true,
        postcode: ''
    }
})


afterEach(cleanup)

const renderComponent = () => {
    const { getByTestId } = render(<HashRouter><Provider store={store}><Marketing /></Provider></HashRouter>)
    return getByTestId
}

test('should render Marketing page', () => {
    const getByTestId = renderComponent()
    expect(getByTestId('container')).toBeDefined
})

test('should render poscode field', () => {
    const getByTestId = renderComponent()
    expect(getByTestId('input')).toBeDefined
})

test('Input field should have placeholder', () => {
    const { getByPlaceholderText } = render(<HashRouter><Provider store={store}><Marketing /></Provider></HashRouter>)
    expect(getByPlaceholderText('postcode')).toBeDefined
})

test('should a button', () => {
    const getByTestId = renderComponent()
    expect(getByTestId('button')).toBeDefined
})



