import { useContext } from "react"
import AuthContext from "../app/components/AppContext"

const useAuth=()=>{
    const authContext = useContext(AuthContext)
    console.log(authContext)

    if(!authContext){
        throw new Error("UseAuth must be used within an AuthProvider")
    }
    return authContext
}

export default useAuth