"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../../utils/axios";

export const useFetchCategories = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/category/fetch-categories");
        setCategories(res.data.data);
        setLoading(false);
        setSuccess(true);
      } catch (error) {
        setLoading(false);
        setSuccess(false);
        toast.error(error.response.data.message);
      }
    };
    fetchCategories();
  }, []);

  return { loading, success, categories };
};
