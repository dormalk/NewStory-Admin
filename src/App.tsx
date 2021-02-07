import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {RightNav,MainNav} from './navs';
import {CommentForm} from './components';
import { useKeycloak } from '@react-keycloak/web';
import LoginPage from './components/LoginPage';
import {PrivateRoute,PublicRoute} from './components/commons';

function Index(){
  return <h2>Home</h2>
}


export default function App() {
  const {keycloak,initialized} = useKeycloak();


  return (
    initialized? 
    <Router>
      <div className="wrapper">
        <RightNav/>
        <div id="content">
          <MainNav/>
            <Container>
              <Switch>
                <Route path="/home" exact component={Index}/>
                <PrivateRoute path="/comments" exact component={CommentForm}/>
                <PublicRoute path="/login" component={LoginPage} />
              </Switch>
            </Container>
        </div>
      </div>
    </Router> : <div>Loading...</div>
  );
}
