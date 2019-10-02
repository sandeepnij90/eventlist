import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

type ButtonProps = {
    background?: string
    color?: string
}

const ButtonWrapper = styled.button<ButtonProps>`
    border: 0;
    padding: 10px;
    min-width: 100px;
    background-color: ${props => props.background};
    color: ${props => props.color};
    &:hover {
        background-color: rgba(#000000, 0.6)
    }
    cursor: pointer;
`

type Props = {
    text: string
    handleClick?: any 
    color?: string,
    background?: string
}

const Button: FunctionComponent<Props> = ({ text, handleClick, color="#ffffff", background = "#769c4a" }) => {
    return (
        <ButtonWrapper data-testid="button" onClick={handleClick} color={color} background={background}>
            {text}
        </ButtonWrapper>
    )
}

export default Button