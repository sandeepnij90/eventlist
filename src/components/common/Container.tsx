import React, { FunctionComponent, Children } from 'react'
import styled from 'styled-components'

type Props = {
    maxWidth?: number
}

const Wrapper = styled.div<Props>`
    ${props => props.maxWidth && `
        max-width: ${props.maxWidth}px
    `}
    margin: auto;
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    display:grid;
    align-items: center;
    justify-items: center;
`

const Container: FunctionComponent<Props> = ({ children, maxWidth = 960 }) => {
    return (
        <Wrapper data-testid="container" maxWidth={maxWidth}>
            {children}
        </Wrapper>
    )
}

export default Container