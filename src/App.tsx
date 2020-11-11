import { Container } from "@material-ui/core";
import React from "react";
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";
import TableDemo from './TableDemo';
import RightNav from './RightNav';

function Index(){
  return <h2>Home</h2>
}

function Product(){
  return <h2>Products</h2>
}


export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <RightNav/>
        <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Container>
              <Route path="/" exact component={Index}/>
              <Route path="/profiling" exact component={TableDemo}/>
            </Container>
        </div>
      </div>
    </Router>
  );
}
