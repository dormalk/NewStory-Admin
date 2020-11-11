import React from "react";
import { BrowserRouter as Router, Route, Link, useLocation } from "react-router-dom";

export default function RightNav() {
    const location = useLocation();

    const routes = [
        {
            path: '/',
            label: 'בית אמיתי',
            childrenId: 'homePage',
            children: [
                {
                    path: '/abount',
                    label: 'אודות',    
                }
            ]
        },
        {
            path: '/profiling',
            label: 'פרופיילינג',
        }
    ]

    return(
        <nav id="sidebar">
        <div className="sidebar-header">
              <h3>New Story</h3>
        </div>
        
        <ul className="list-unstyled components">
            {
                routes.map(r => 
                    <li className={location.pathname == r.path? 'active':''}>
                        { r.childrenId != undefined ? (
                            <React.Fragment>
                                <a href={'#'+r.childrenId} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> {r.label} </a>
                                <ul className="collapse list-unstyled" id={r.childrenId}>
                                    {r.children.map(rchild => <li><Link to={rchild.path}>{rchild.label}</Link></li>)}
                                </ul>
                            </React.Fragment>
                        ) : <li><Link to={r.path}>{r.label}</Link></li>}
                    </li>
                    )
            }
         </ul>
      </nav>
    )
}