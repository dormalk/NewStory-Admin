import React from "react";
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";

export default function MainNav() {
    const location = useLocation();
    const routes = [
        {
            path: '/',
            label: 'דף אחד'
        },
        {
            path: '/',
            label: 'דף שני'
        },
        {
            path: '/',
            label: 'דף שלישי'
        },

    ]
    return(
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
                    {
                        routes.map((r,i) => <li key={i} className={`nav-item ${location.pathname == r.path? 'active':''}`}>
                            <Link to={r.path} className="nav-link">{r.label}</Link>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </nav>

    )
}