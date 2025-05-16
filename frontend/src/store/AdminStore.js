import axios from "axios";
import { create } from "zustand";

export const useAdmin = create((set) => ({
    isAdmin: false,
    checkAdmin: async () => {
        const userid = localStorage.getItem("userid");
        const response = await axios.post("https://intervuai-3id4.onrender.com/admin/checkAdmin", { userid });
        const data = response.data;
        console.log(data)
        set({ isAdmin: true});
    },
}))