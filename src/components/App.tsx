import React, { FunctionComponent } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import EventAtendeeList from 'components/EventAtendeeList'
import ConfirmEmail from 'components/ConfirmEmail'
import Marketing from 'components/Marketing'
import Thanks from 'components/Thanks'

const App: FunctionComponent = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={EventAtendeeList} />
                <Route exact path="/confirm-email" component={ConfirmEmail} />
                <Route exact path="/marketing" component={Marketing} />
                <Route exact path="/thanks" component={Thanks} />
            </Switch>
        </HashRouter>
    )
}

export default App