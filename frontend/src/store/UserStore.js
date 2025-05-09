import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useUser = create((set) => ({
    isLoggedIn: false,
    registerFunc: async(fullname, email, password) => {
        const url = import.meta.env.SERVER_URI ;
        try {
            const response = await axios.post(`https://intervuai-3id4.onrender.com/auth/register`,{fullname,email,password});
            console.log(response.data);
            toast.success("Registration Success")
        } catch (error) {
            console.log(error)
        }
    }
}))