import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TableDemo from './TableDemo';
import RightNav from './navs/rightNav';
import MainNav from './navs/mainNav';

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
              <Route path="/profiling" exact component={TableDemo}/>
            </Container>
        </div>
      </div>
    </Router>
  );
}
