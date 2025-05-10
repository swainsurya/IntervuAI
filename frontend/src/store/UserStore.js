import axios from "axios";
import { create } from "zustand";

export const useUser = create((set) => ({
    isLoggedIn: false,
    loading: false,
    registerFunc: async (fullname, email, password) => {
        set({ loading: true });
        try {
            const response = await axios.post(`https://intervuai-3id4.onrender.com/auth/register`, { fullname, email, password });
            if (response.data?.success) {
                return {
                    success: true,
                    message: "Registration Success"
                }
            }
        } catch (error) {
            return {
                success: false,
                message: error.response.data.message
            }
        }
        finally {
            set({ loading: false })
        }
    },
    loginFunc: async (email, password) => {
        set({ loading: true })
        try {
            const response = await axios.post(`https://intervuai-3id4.onrender.com/auth/login`,
                { email, password });
            if (response.data?.success) {
                return {
                    success: true,
                    message: response.data?.message,
                    username: response.data?.user?.name,
                    userid: response.data?.user?.userid
                }
            }
        } catch (error) {
            return {
                success: false,
                message: error.response.data.message
            }
        }
        finally {
            set({ loading: false })
        }
    },
    checkAuth: () => {
        const userid = localStorage.getItem("userid");
        if (!userid) return false;
        else return true;
    }
}))