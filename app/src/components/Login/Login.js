import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Login() {

    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
            {isAuthenticated && <button onClick={() => logout()}>Log Out</button>}
        </div>
    )
}

export default Login