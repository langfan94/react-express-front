import { 
  BrowserRouter as Router,
  Route
 } from 'react-router-dom'


const routes = [{
    path: '/',
    exact: true,
    component: "Hello"
}, {
    path: '/login',
    exact: true,
    component: "Login"
}, {
    path: '/hello',
    exact: true,
    component: "Hello"
}]

const sidebarRouter = () => (
    <Router>
        {
        routes.map((route, index) => (
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
            />
        ))
        }
    </Router>
)

export default sidebarRouter;