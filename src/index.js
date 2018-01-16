import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css';
import { fakeAuth } from './components/common/fakeAuth'

// import registerServiceWorker from './registerServiceWorker';
import Login from './components/login/index'

import { 
    BrowserRouter as Router,
    Route,
    Redirect
   } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest }) => (
<Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
    <Component {...props}/>
    ) : (
    <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
    }}/>
    )
)}/>
)

ReactDOM.render(
    <Router>
        <div>
            <PrivateRoute path="/" exact component={App}/>
            <Route path="/login" component={Login}/>
        </div>
    </Router> 
    ,document.getElementById('root')
);
// registerServiceWorker();