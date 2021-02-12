import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';



import Layout from './layout/Layout';
import Alerts from './layout/Alerts';
import Footer from './layout/Footer';
import NotFound from './layout/NotFound'
import DashbordArtical from './articals/Dashbord';
import DashbordCours from './cours/Dashbord';
import Cours from './cours/Cours';
import UpdateArtical from './articals/UpdateArtical';
import CoursEdit from './cours/CoursEdit';

import Form from './articals/Form';
import Home from './home/Home';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import Quiz from './quizzes/Quiz'

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from 'react-redux';
import store from '../store';
import Artical from './articals/Artical';
import { loadUser, getuser } from '../actions/auth'


//alert options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
};



class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
        store.dispatch(getuser());

    }
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate}
                    {...alertOptions} >
                    <Router>
                        <Fragment>

                            <Layout />
                            <div>
                                <Alerts />
                            </div>
                            <Switch>

                                <Route exact path="/"> <Home /></Route>
                                <PrivateRoute exact path="/posts" component={DashbordArtical} />
                                <PrivateRoute exact path="/form" component={Form} />
                                <PrivateRoute exact path="/post/update/:id" component={UpdateArtical} />
                                <PrivateRoute exact path="/post/:id" component={Artical} />

                                <PrivateRoute path="/cours/:id" component={Cours} />
                                <PrivateRoute path="/cours" component={DashbordCours} />
                                <PrivateRoute path="/quiz/:id" component={Quiz} />
                                <Route path="/register"> <Register /> </Route>
                                <Route path="/login"> <Login /> </Route>
                                {/*  <Route path="/edit/cours/:id"> <CoursEdit /> </Route>
                                <Route path="/create/cours"> <CreateCours /> </Route> */}
                                <Route path=""> <NotFound /> </Route>
                            </Switch>




                            <Footer />

                        </Fragment>

                    </Router>
                </AlertProvider>
            </Provider >
        );
    }
}
ReactDOM.render(<App />, document.getElementById('app'));