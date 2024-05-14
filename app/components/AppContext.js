//  "use client"

// // import { SessionProvider } from "next-auth/react"

// // export function AppProvider ({children}){
// //     return(
// //         <SessionProvider>
// //             {children}
// //         </SessionProvider>
// //     )
// // }


"use client"
import { createContext, useState } from "react";

 const AuthContext = createContext({})

export const AppProvider =({children})=>{
    const [auth, setAuth] = useState(null)
    console.log(auth)
    const setAuthData=(userData)=>{
        setAuth(userData)
    }

    const signOut= ()=>{
        localStorage.removeItem("foodify")
        setAuth(null)
    }

    const value ={
        auth,
        setAuthData,
        setAuth,
        signOut
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

