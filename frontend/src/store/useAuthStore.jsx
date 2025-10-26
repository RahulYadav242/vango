import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";


export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],
  socket: null,

  checkAuth: async () => {
  try {
    const res = await axiosInstance.get("/auth/check");
    set({ authUser: res?.data });
    // get().connectSocket();
  } catch (error) {
    // Silently handle 401 errors - this is expected when not logged in
    if (error?.response?.status !== 401) {
      console.log("Error in checkAuth:", error);
    }
    set({ authUser: null });
  } finally {
    set({ isCheckingAuth: false });
  }
},

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      console.log('hello')
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res?.data });
      toast.success("Account created successfully");
      get().connectSocket();
    } catch (error) {
      console.log("Signup error:", error);
      toast.error(error?.response?.data?.message || "Signup failed");
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res?.data });
      toast.success("Logged in successfully");

      get().connectSocket();
    } catch (error) {
      console.log("Login error:", error);
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
      get().disconnectSocket();
    } catch (error) {
      console.log("Logout error:", error);
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  },
   updateProfile : async (data) => {
  console.log("📤 Calling updateProfile with:", data);
  set({ isUpdatingProfile: true });
  try {
    const res = await axiosInstance.put("/auth/update-profile", data);
    set({ authUser: res?.data });
    toast.success("Profile updated successfully");
    console.log("✅ Server responded:", res?.data);
  } catch (error) {
    console.log("❌ Error in updateProfile:", error?.response?.data || error.message);
    toast.error(error?.response?.data?.message || "Update failed");
  } finally {
    set({ isUpdatingProfile: false });
  }
},


  // updateProfile: async (data) => {
  //   set({ isUpdatingProfile: true });
  //   try {
  //     const res = await axiosInstance.put("/auth/update-profile", data);
  //     set({ authUser: res.data });
  //     toast.success("Profile updated successfully");
  //   } catch (error) {
  //     console.log("error in update profile:", error);
  //     toast.error(error.response.data.message);
  //   } finally {
  //     set({ isUpdatingProfile: false });
  //   }
  // }

  connectSocket: () => {
    // Socket connection logic can be added here if needed
    console.log("Socket connection requested");
  },

  disconnectSocket: () => {
    // Socket disconnection logic can be added here if needed
    console.log("Socket disconnection requested");
  }
}));
