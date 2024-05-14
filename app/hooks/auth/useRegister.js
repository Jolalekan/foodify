import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

export const useRegister = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)
    const [userCreated, setUserCreated] = useState(false)

    const login = async (payload) => {
        console.log("payload :", payload)
        setLoading(true)
        setUserCreated(false)
        try {
            const res = await axios.post("/api/register", payload,

                { headers: { "Content-Type": "application/json" }, }

            )
            console.log("response:", res)
            setSuccess(true);
            setLoading(false);
            setUserCreated(true)
            // toast.success("User account created succesfully")
            router.push("/login");
            console.log(router)
        } catch (error) {
            setLoading(false)
            setSuccess(false)
            // toast.error(error.message)
        }
        finally {
            setLoading(false)
        }
    }
    return { login, loading, success, userCreated, error }
}


// export const useRegister = () => {
//     const router = useRouter();
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [error, setError] = useState(null);
//     const [userCreated, setUserCreated] = useState(false);

//     const login = async (payload) => {
//         setLoading(true);
//         setUserCreated(false);
//         try {
//             const res = await axios.post("/api/register", payload);

//             if (res.status === 200) {
//                 setSuccess(true);
//                 setLoading(false);
//                 setUserCreated(true);
//                 router.push("/login");
//             } else {
//                 // Handle error response
//                 if (res.data && res.data.error) {
//                     setError(res.data.error);
//                 } else {
//                     setError("An error occurred during registration");
//                 }
//                 setLoading(false);
//             }
//         } catch (error) {
//             // Handle network error or other exceptions
//             setError(error.message || "Error during registration");
//             setLoading(false);
//         }
//     };

//     return { login, loading, success, userCreated, error };
// };