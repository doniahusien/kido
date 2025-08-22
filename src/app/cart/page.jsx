"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartList from "@/components/Cart/CartList";
import CheckoutForm from "@/components/Cart/CheckoutForm";
import Link from "next/link";
import { withAuth } from "@/withAuth";
const CartPage = () => {
    const userId = useSelector((state) => state.auth.user?._id);
    const cartItems = useSelector((state) => state.cart?.carts?.[userId] || []);
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const [showForm, setShowForm] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 py-10" dir="rtl">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
                سلة التسوق
            </h1>

            <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
                <CartList />
                <Link href="/orders">ملخص الطلبات</Link>
            </div>

            {cartItems.length > 0 && !showForm && (
                <div className="max-w-4xl mx-auto text-center mt-6">
                    <button
                        onClick={() => setShowForm(true)}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-xl font-semibold"
                    >
            المتابعة للتأكيد
                    </button>
                </div>
            )}

            {showForm && <CheckoutForm totalPrice={totalPrice}  setShowForm={setShowForm} />}
        </div>
    );
};

export default withAuth(CartPage) ;
