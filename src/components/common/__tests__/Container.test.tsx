import React from 'react'
import {render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Container from '../Container'

afterEach(cleanup)

test('should render container', () => {
    const { getByTestId } = render(<Container />)
    expect(getByTestId('container')).toBeDefined
})

