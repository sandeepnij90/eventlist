import React, { FunctionComponent } from 'react'
import Container from 'components/common/Container'
import Reset from 'components/Reset'
import CenterWrapper from 'components/common/CenterWrapper'
const Thanks: FunctionComponent = () => {

    return (
        <CenterWrapper>
            <Container>
                <h3>Thanks for signing up</h3>
                <Reset />
            </Container>
        </CenterWrapper>
    )
}

export default Thanks