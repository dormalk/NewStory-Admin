import { Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {RightNav,MainNav} from './navs';
import {CommentForm} from './components';
import queryString from 'query-string';
import {refresh_token} from './shared/keyclock_api';
import { useKeycloak } from '@react-keycloak/web';
import LoginPage from './components/LoginPage';
function Index(){
  return <h2>Home</h2>
}


export default function App() {
  const {keycloak,initialized} = useKeycloak();


  useEffect(() => {
    console.log(initialized)
    console.log(keycloak.authenticated)

    let {code} = queryString.parse(window.location.search);
    if(code){
      refresh_token(code)
    }
    console.log(code)
  },[initialized,keycloak])
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
                <Route path="/comments" exact component={CommentForm}/>
                <Route path="/login" component={LoginPage} />
              </Switch>
            </Container>
        </div>
      </div>
    </Router> : <div>Loading...</div>
  );
}
