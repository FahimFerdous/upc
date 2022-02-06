import React, { useState, useContext, useEffect } from 'react'
import { firebase } from "../../firebaseConfig"

const AuthContext = React.createContext();

const auth = firebase.auth();

export function useAuth() {
    return useContext(AuthContext)
}


export function AuthProvider({ children }) {
    const [currentUser, setcurrentUser] = useState()

    function loginUser(email, password) {

        return auth.signInWithEmailAndPassword(email, password)
    }

    function logoutUser() {
        return auth.signOut()
    }

    useEffect(() => {

        const unsubscribe = auth.onAuthStateChanged(user => {
            setcurrentUser(user)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        loginUser,
        logoutUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

