import React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import {  Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {
    component: any,
    exact?: boolean,
    path: string
}



export default function PublicRoute(props: PrivateRouteProps){
    const {keycloak,initialized} = useKeycloak();

    if(!keycloak.authenticated){
        return <Route {...props}/>
    } else {
        return <Redirect to='/'/>
    }
}