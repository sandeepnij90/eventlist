import React, { FunctionComponent } from 'react'
import styled from 'styled-components' 

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 15px auto;
    grid-column-gap: 8px;
    align-items: center;
`

type Props = {
    handleChange: any
    defaultValue?: string
    label: string
    id: string
}

const Input: FunctionComponent<Props> = ({ handleChange, label, defaultValue, id}) => {
    return (
        <Wrapper>
            <input data-testid="checkbox" id={id} type="checkbox" onChange={e => handleChange(e.target.checked)} defaultValue={defaultValue}  />
            <label  htmlFor={id}>{label}</label>
        </Wrapper>
    )
}

export default Input