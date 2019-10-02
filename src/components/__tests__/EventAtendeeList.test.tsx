import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HashRouter } from 'react-router-dom'
import EventAtendeeList from '../EventAtendeeList'
import configureMockStore from 'redux-mock-store'

const mockstore = configureMockStore()
let store = mockstore({})

afterEach(cleanup)

test('should render eventAtendee list', () => {
    const { getByTestId } = render(<HashRouter><Provider store={store}><EventAtendeeList /></Provider></HashRouter>)
    expect(getByTestId('container')).toBeDefined
    expect(getByTestId('table')).toBeDefined
})


