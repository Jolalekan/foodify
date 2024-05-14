"use client";

import { useCallback, useState, useContext } from "react";
import toast from "react-hot-toast";
import axios from "../../utils/axios";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


export const useLogin = () => {
  const router= useRouter()
    
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const login = useCallback(async (payload) => {
    setLoading(true);
    try {
        const res = await axios.post("/api/login", { ...payload });
        //this below is sign in for useAuth
      //  await signIn('credentials', {...payload, callbackUrl: '/'});
      console.log("response", res.data)
      setLoading(false);
      setSuccess(true);
      const token = res.data.token
   
      if(token){
        localStorage.setItem("foodify", res.data?.token)
        const userData={
          id: res.data.email
        }
      }     
      else{
        console.error("Token not found in response", res.data)
      }
      localStorage.setItem("foodify", res.data.token);
      router.push("/")
      toast.success(res.data.message);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      console.log("error", error)
      toast.error(error.message);
    }
  }, []);

  return { login, loading, success };
};

