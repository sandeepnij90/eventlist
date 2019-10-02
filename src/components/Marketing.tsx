import React, { FunctionComponent, useState } from 'react'
import Input from 'components/common/Input'
import Button from 'components/common/Button'
import Checkbox from 'components/common/Checkbox'
import Container from 'components/common/Container'
import { withRouter, RouteComponentProps} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveUserAction, dispatchEmailAction } from 'store/actions'
import { getUser } from 'store/Reducer'
import CenterWrapper from 'components/common/CenterWrapper'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    max-width: 480px;
    width: 100%;
    grid-template-columns: 1fr auto;
`

const CheckboxWrapper = styled.div`
    margin-top: 24px;
    align-items: center;
`

const Marketing: FunctionComponent<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch()
    const [postcode, setPostcode] = useState('')
    const [optedIn, setOptedIn] = useState(false)
    const { email, name, } = useSelector(getUser)

    const onChange = (postcode: string) => {
        setPostcode(postcode)
    }

    const handleCheckbox = (value: boolean) => {
        setOptedIn(value)
    }

    const handleSave = () => {
        dispatch(saveUserAction({postcode, optedIn}))
        dispatch(dispatchEmailAction({name, email, postcode, optedIn}, history))
    }

    return (
        <CenterWrapper>
            <Container>
                <Wrapper>
                    <Input placeholder="postcode" type="text" handleChange={onChange} />
                    <Button text="Save" handleClick={handleSave} />
                </Wrapper>
                <CheckboxWrapper>
                    <Checkbox label="I would like to receive markerting emails" id="CB" handleChange={handleCheckbox}/>
                </CheckboxWrapper>
            </Container>
        </CenterWrapper>
    )
    
}

export default withRouter(Marketing)