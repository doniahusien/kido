"use client";
import React from "react";
import dynamic from "next/dynamic";
import ProductCardLoader from "../skeletons/ProductCardLoader";
const FeaturedProducts = ({ toys, handleAddToCart }) => {
    const ProductCard = dynamic(() => import('@/components/product/ProductCard'), {
        loading: () => <ProductCardLoader />,
        ssr: false,
    });
    return (
        <section className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">منتجاتنا المميزة</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {toys.slice(0, 12).map((toy, index) => (
                    <ProductCard
                        key={index}
                        toy={toy}
                        handleAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
