import * as React from 'react'
import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'

const LoginPage = () => {
  const location = useLocation<{ [key: string]: unknown }>()
  const currentLocationState = location.state || {
    from: { pathname: '/home' },
  }

  const { keycloak } = useKeycloak()

  const login = useCallback(() => {
    keycloak?.login()
  }, [keycloak])

  

  if (keycloak?.authenticated)
    console.log("authenticated!")

  return (
    <div>
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  )
}

export default LoginPage