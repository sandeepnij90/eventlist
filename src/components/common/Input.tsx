import React, { FunctionComponent } from 'react'
import styled from 'styled-components' 

const InputWrapper = styled.input`
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
    `

type Props = {
    type: string
    placeholder?: string
    handleChange: any
    defaultValue?: string
}



const Input: FunctionComponent<Props> = ({ type, placeholder, handleChange, defaultValue }) => {
    return (
        <InputWrapper data-testid="input" placeholder={placeholder} type={type} onChange={e =>handleChange(e.target.value)} defaultValue={defaultValue}/>
    )
}

export default Input