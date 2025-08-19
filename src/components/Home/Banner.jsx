"use client";
import React from "react";

const Banner = ({ user }) => {
    return (
        <section
            style={{ backgroundImage: "url('/ban.png')" }}
            className="relative w-full h-[400px] bg-[url('/ban.png')] bg-cover bg-center text-white flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative p-8 z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 animate-bounce">
                    مرحبًا بعودتك، {user?.name}!
                </h1>
                <p className="text-lg md:text-xl">استكشف مجموعتنا الحصرية لأطفالك.</p>
            </div>
        </section>
    );
};

export default Banner;
