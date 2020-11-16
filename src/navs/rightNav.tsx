import React from "react";
import { Link, useLocation } from "react-router-dom";

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
                routes.map((r,i) => 
                    <li className={location.pathname == r.path? 'active':''} key={i}>
                        { r.childrenId != undefined ? (
                            <React.Fragment>
                                <a href={'#'+r.childrenId} data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"> {r.label} </a>
                                <ul className="collapse list-unstyled" id={r.childrenId}>
                                    {r.children.map((rchild,i2) => <div key={i2}><Link to={rchild.path}>{rchild.label}</Link></div>)}
                                </ul>
                            </React.Fragment>
                        ) : <Link to={r.path}>{r.label}</Link>}
                    </li>
                    )
            }
         </ul>
      </nav>
    )
}