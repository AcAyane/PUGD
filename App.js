import React, { useState } from 'react'
import { useQuery, useApolloClient } from '@apollo/client'
import {USER_QUERY} from "./queries/user.query";
import PersonForm from "./PersonForm";



const Notify = ({ errorMessage }) => {
    if ( !errorMessage ) {
        return null
    }

    return (
        <div style={{color: 'red'}}>
            {errorMessage}
        </div>
    )
}

const App = () => {
    const [token, setToken] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const result = useQuery(USER_QUERY)
    //const client = useApolloClient()

    if (result.loading)  {
        return <div>loading...</div>
    }

    const logout = () => {
        setToken(null)
        localStorage.clear()
      //  client.resetStore()
    }

    const notify = (message) => {
        setErrorMessage(message)
        setTimeout(() => {
            setErrorMessage(null)
        }, 5000)
    }

    if (!token) {
        return (
            <div>
                <Notify errorMessage={errorMessage} />
                <h2>Login</h2>
                <LoginForm
                    setToken={setToken}
                    setError={notify}
                />
            </div>
        )
    }

    return (
        <div>
            <button onCLick={logout} >logout</button>
            <Notify errorMessage={errorMessage} />

        </div>
    )
}

export default App
