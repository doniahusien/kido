"use client";

import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "@/redux/store";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer";

export default function ClientProvider({ children }) {
  return (
    <Provider store={store}>
      <NavBar />
      <main className="flex-grow">
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </main>
      <Footer />
    </Provider>
  );
}
