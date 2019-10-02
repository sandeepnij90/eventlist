import React, { FunctionComponent, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Container from 'components/common/Container'
import Input from 'components/common/Input'
import Button from 'components/common/Button'
import { sendEmailAction } from 'store/actions'
import { getUser } from 'store/Reducer'
import CenterWrapper from 'components/common/CenterWrapper'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    max-width: 480px;
    width: 100%;
    grid-template-columns: 1fr auto;
`

const ConfirmEmail: FunctionComponent<RouteComponentProps> = ({ history }) => {

    const [email, setEmail] = useState('')
    const defaultEmail = useSelector(getUser).email
    const dispatch = useDispatch()

   const onChange = (email: string) => {
        setEmail(email)
    }

    const confirmEmail = () => {
        dispatch(sendEmailAction(email))
        history.push('/marketing')
    }

    useEffect(() => {
        setEmail(defaultEmail)
    },[defaultEmail])

    return (
        <CenterWrapper>
            <Container>
                <h1>Confirm your email address</h1>
                <Wrapper>
                <Input placeholder="Email"  type="text" handleChange={onChange} defaultValue={defaultEmail} />
                <Button text="confirm" handleClick={confirmEmail} />
                </Wrapper>
            </Container>
        </CenterWrapper>
    )
}

export default withRouter(ConfirmEmail)