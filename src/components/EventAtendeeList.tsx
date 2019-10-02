import React, { FunctionComponent } from 'react'
// import { Container, Table } from 'components/common' this is not working because of jest - need to fix
import Container from 'components/common/Container'
import Table from 'components/common/Table'
import CenterWrapper from 'components/common/CenterWrapper'
import { EventList } from 'components/EventList'
import { useDispatch } from 'react-redux'
import { sendUserAction } from 'store/actions'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const EventAtendeeList: FunctionComponent<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch()

    const rowClick = (row: any) => {
        dispatch(sendUserAction({ name: row.name || '', email: row.email || '' }))
        history.push('/confirm-email')
    }

    return (
        <CenterWrapper>
            <Container>
                <h1>Welcome to the exhibition</h1>
                <h2>Event attendee list</h2>
                <Table
                    header={[{ accessor: 'name', value: 'Name' }, { accessor: 'email', value: 'Email' }]}
                    rows={EventList}
                    rowClick={rowClick}>
                </Table>
            </Container>
        </CenterWrapper>
    )
}

export default withRouter(EventAtendeeList)