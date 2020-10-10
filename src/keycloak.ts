import Keycloak from "keycloak-js";

const keycloak: any = Keycloak({
  url: process.env.REACT_APP_KEYCLOAK_URL as any,
  realm: process.env.REACT_APP_KEYCLOAK_REALM as any,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT as any,
});

export default keycloak;
