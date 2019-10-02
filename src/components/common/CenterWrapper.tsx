import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    min-height: 100%;
    align-items: center;
`

const CenterWrapper: FunctionComponent = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default CenterWrapper