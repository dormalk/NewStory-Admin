import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./theme";
import { ReactKeycloakProvider  } from "@react-keycloak/web";
import keycloak from './shared/keycloak';



const eventLogger = (event: unknown, error: unknown) => {
  console.log('onKeycloakEvent', event, error)
}

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens)
}

ReactDOM.render(
    <ReactKeycloakProvider       authClient={keycloak}
    onEvent={eventLogger}
    onTokens={tokenLogger}>
  <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
  </ThemeProvider>
  </ReactKeycloakProvider>,
  document.querySelector("#root")
);
