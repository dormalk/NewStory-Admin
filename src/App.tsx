import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

import ProTip from "./ProTip";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  const { keycloak, initialized }: any = useKeycloak();

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example with TypeScript (Newstory)
        </Typography>
        {initialized && !keycloak?.authenticated && (
          <a href="/#" className="btn-link" onClick={() => keycloak.login()}>
            Login
          </a>
        )}
        {keycloak?.authenticated && (
          <a href="/#" className="btn-link" onClick={() => keycloak.logout()}>
            Logout ({(keycloak?.tokenParsed as any)?.preferred_username})
          </a>
        )}
        {initialized ? (
          keycloak?.authenticated && (
            <pre className="json">{JSON.stringify(keycloak, undefined, 2)}</pre>
          )
        ) : (
          <h2>keycloak initializing ....!!!!</h2>
        )}
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
