"use client";

import { Toaster } from "react-hot-toast";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import store from "@/redux/store";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer";
import { loadUserFromStorage } from "@/redux/features/auth/authThunk";

// Wrapper component to load user on client
function AuthLoader({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromStorage());
  }, [dispatch]);

  return children;
}

export default function ClientProvider({ children }) {
  return (
    <Provider store={store}>
      <AuthLoader>
        <NavBar />
        <main className="flex-grow">
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </main>
        <Footer />
      </AuthLoader>
    </Provider>
  );
}
