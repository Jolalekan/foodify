"use client";

import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import axios from "../../utils/axios";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const login = useCallback(async (payload) => {
    setLoading(true);
    try {
      const res = await axios.post("/auth/login", { ...payload });
      setLoading(false);
      setSuccess(true);
      localStorage.setItem("foodify", res.data.data.token);
      toast.success(res.data.message);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      toast.error(error.response.data.message);
    }
  }, []);

  return { login, loading, success };
};
