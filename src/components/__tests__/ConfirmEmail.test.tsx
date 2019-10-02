import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import configureMockStore from 'redux-mock-store'
import ConfirmEmail from '../ConfirmEmail'
import { HashRouter } from 'react-router-dom'

const mockstore = configureMockStore()
let store = mockstore({
    user: {
        email: 'test@test.com'
    }
})

afterEach(cleanup)

const renderComponent = () => {
    const { getByTestId } = render(<HashRouter><Provider store={store}><ConfirmEmail /></Provider></HashRouter>)
    return getByTestId
}

test('should render ConfirmEmail', () => {
    const getByTestId = renderComponent()
    expect(getByTestId('container')).toBeDefined
})

test('should render input', () => {
    const getByTestId = renderComponent()
    expect(getByTestId('input')).toBeDefined
})

test('should render button', () => {
    const getByTestId = renderComponent()
    expect(getByTestId('button')).toBeDefined
})



