"use client";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { withAuth } from "@/withAuth";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import { selectToys } from "@/redux/selectors/productSelector";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/products/productThunk";
import { addToCart } from "@/redux/features/cart/cartThunk";
import Banner from "@/components/Home/Banner";
import Services from "@/components/Home/Services";

const HomePage = () => {
  const toys = useSelector(selectToys);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.products?.status || "idle");
  const userId = useSelector((state) => state.auth.user?._id);
  const handleAddToCart = (toy, event) => {
    event.stopPropagation();
    dispatch(addToCart({ userId, item: toy }));
    toast.success(" تمت إضافة المنتج إلى السلة", {
      duration: 2000,
      style: {
        background: "#4caf50",
        color: "#fff",
        fontSize: "16px",
        fontWeight: "bold",
      },
    });
  };
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);
  const highlighted = toys.filter((p) => p.highlight);

  return (
    <>
      <main dir="rtl" className="w-full min-h-screen bg-gradient-to-r from-red-200 via-yellow-100 to-yellow-200">
        <Banner user={user} />
        <Services />
        <FeaturedProducts toys={highlighted} handleAddToCart={handleAddToCart} />
      </main>
    </>

  );
};

export default withAuth(HomePage);
