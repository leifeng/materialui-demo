import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Index from './routes/Index';
import My from './routes/My';
import Login from './routes/Login';
import Setting from './routes/setting'
import fakeAuth from './store'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        fakeAuth.isAuthenticated ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
    )} />
)

const FooterRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        const url = props.location.pathname;
        return url === '/index' || url === '/my' || url === '/list' ? <Component {...props} /> : null
    }} />
}

const App = () => {

    return <Router>
        <div>
            <Header />
            <Route path='/index' component={Index} />
            <Route path='/login' component={Login} />
            <Route path='/my/setting' component={Setting} />
            <PrivateRoute exact  path='/my' component={My} />
            <FooterRoute component={Footer} />
        </div>
    </Router>
}

export default App;