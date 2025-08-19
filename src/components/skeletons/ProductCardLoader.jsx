"use client";
import React from "react";

const ProductCardLoader = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 animate-pulse">
            {/* Image Placeholder */}
            <div className="h-56 bg-gray-200 rounded-md mb-4"></div>

            {/* Text placeholders */}
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>

            {/* Button placeholder */}
            <div className="h-10 bg-gray-200 rounded-full"></div>
        </div>
    );
};

export default ProductCardLoader;
