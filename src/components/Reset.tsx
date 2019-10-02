import React, { FunctionComponent } from 'react'
import Button from 'components/common/Button'
import { resetUserAction } from 'store/actions'
import { useDispatch } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const Reset: FunctionComponent<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch()

    const handleReset = () => {
        dispatch(resetUserAction())
        history.push('/')
    }

    return (
        <Button text="Reset" handleClick={handleReset}/>
    )
}

export default withRouter(Reset)