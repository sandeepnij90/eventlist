import React from 'react'
import { render } from 'react-dom'
import EventAttendeeList from 'components/EventAtendeeList'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Reducer } from 'store/Reducer'
import App from 'components/App'
let store = createStore(Reducer, composeWithDevTools(applyMiddleware(reduxThunk)))


render(<Provider store={store}><App/></Provider>, document.getElementById('root'))