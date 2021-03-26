import React, {useContext} from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import { Context } from './Context/AuthContext';

import Signup from './pages/SignUp';
import Signin from './pages/SignIn';
import Main from './pages/Main'

export default function Routes(){
    const { authenticated } = useContext(Context);  
    return(
        <BrowserRouter>
            <Switch>
                {!authenticated && <>
                    <Route exact path = '/' component={Signin}/>
                    <Route exact path = '/signin' component={Signin} /> 
                    <Route exact path = '/signup' component={Signup} />
                    <Redirect to="/"/>
                    </>
                }
                {authenticated && <>
                    <Route exact path = '/dashboard' component={Main} />
                    <Redirect to="/dashboard"/>
                    </>
                }
            </Switch>
        </BrowserRouter>
    );
}