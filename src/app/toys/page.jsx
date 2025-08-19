"use client";

import React, { useEffect } from "react";
import ProductCard from "@/components/product/ProductCard";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/features/products/productThunk";
import { selectToys } from "@/redux/selectors/productSelector";
import { withAuth } from "@/withAuth";
const ToysPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const status = useSelector((state) => state.products?.status || "idle");
    const toys = useSelector(selectToys);
    const userId = useSelector((state) => state.auth.user?._id);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);



    return (
        <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-blue-100 py-10" dir="rtl">
            <h1 className="text-5xl font-extrabold text-red-600 text-center mb-10">
                مجموعة ألعابنا
            </h1>

            {status === "loading" && (
                <p className="text-center text-gray-700 text-xl">جارٍ تحميل الألعاب...</p>
            )}

            {status === "succeeded" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {toys.length === 0 ? (
                        <p className="text-center text-red-500 text-2xl">
                            لا توجد ألعاب متاحة حاليًا.
                        </p>
                    ) : (
                        toys.map((toy, index) => (
                            <ProductCard
                                key={index}
                                toy={toy}
                                
                            />
                        ))
                    )}
                </div>
            )}

            {status === "failed" && (
                <p className="text-center text-red-700 text-2xl">فشل في تحميل الألعاب.</p>
            )}
        </div>
    );
};

export default withAuth(ToysPage);
