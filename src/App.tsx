import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {RightNav,MainNav} from './navs';
import {CommentForm} from './components';

function Index(){
  return <h2>Home</h2>
}


export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <RightNav/>
        <div id="content">
          <MainNav/>
            <Container>
              <Route path="/" exact component={Index}/>
              <Route path="/comments" exact component={CommentForm}/>
            </Container>
        </div>
      </div>
    </Router>
  );
}
