"use client";
import { withAuth } from "@/withAuth";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";
import { selectToys } from "@/redux/selectors/productSelector";
import AddToCartButton from "@/components/product/AddToCartButton";

const ToyDetailsPage = () => {
  const { id } = useParams();
  const toys = useSelector(selectToys);
  const toy = toys.find((t) => t._id === id);

  const [selectedImage, setSelectedImage] = useState(toy?.images?.[0] || null);
  const [isHoveringMain, setIsHoveringMain] = useState(false);

  if (!toy) {
    return (
      <p className="text-center text-red-600 text-2xl font-bold mt-10">
        اللعبة غير موجودة.
      </p>
    );
  }

  // Auto-slideshow
  useEffect(() => {
    if (!toy.images || toy.images.length <= 1) return;

    const interval = setInterval(() => {
      if (!isHoveringMain) {
        const currentIndex = toy.images.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % toy.images.length;
        setSelectedImage(toy.images[nextIndex]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedImage, toy.images, isHoveringMain]);

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-yellow-50 to-blue-50 py-12 px-6"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-8">
        <h1 className="text-5xl font-bold text-red-600 text-center mb-8">
          {toy.name}
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* معرض الصور */}
          <div className="flex flex-col md:flex-row gap-6 w-full md:w-1/2">
            {/* الصور الصغيرة على الجنب */}
            <div className="flex md:flex-col gap-1 md:w-20 w-full md:justify-start justify-center">
              {toy.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  onMouseEnter={() => setSelectedImage(img)}
                  className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-all duration-200 ${
                    selectedImage === img
                      ? "border-red-500 scale-105"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${toy.name} - ${index + 1}`}
                    width={60}
                    height={60}
                    className="object-cover w-20 h-20 md:w-16 md:h-16"
                  />
                </div>
              ))}
            </div>

            {/* الصورة الرئيسية */}
            <div
              className="flex-1 flex items-center justify-center relative"
              onMouseEnter={() => setIsHoveringMain(true)}
              onMouseLeave={() => setIsHoveringMain(false)}
            >
              <Image
                src={selectedImage}
                alt={toy.name}
                width={600}
                height={600}
                className="rounded-2xl shadow-md object-contain max-h-[500px] transition-all duration-500"
              />
            </div>
          </div>

          {/* تفاصيل اللعبة */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-right">
            <p className="text-2xl font-semibold text-gray-800">
              السعر: <span className="text-red-500">ج.م{toy.price}</span>
            </p>
            <p className="text-lg text-gray-600">
              {toy.description || "لا يوجد وصف متاح لهذه اللعبة."}
            </p>
            <AddToCartButton toy={toy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ToyDetailsPage);
