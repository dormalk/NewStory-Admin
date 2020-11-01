import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TableDemo from './TableDemo';

function Index(){
  return <h2>Home</h2>
}

function Product(){
  return <h2>Products</h2>
}


export default function App() {

  return (
    <Router>
      <nav>
      <ul style={{display: 'flex', justifyContent: 'start', flexDirection: 'row'}}>
        <li style={{listStyleType: 'none', color: 'black', padding: '0.5rem 1rem'}}><Link to="/">Home</Link></li>
        <li style={{listStyleType: 'none', color: 'black', padding: '0.5rem 1rem'}}><Link to="/table">Tables</Link></li>

      </ul>
      </nav>
      <Container>
      <Route path="/" exact component={Index}/>
      <Route path="/table" exact component={TableDemo}/>
      </Container>

    </Router>
  );
}
