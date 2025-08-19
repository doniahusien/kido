"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {createOrder }from "@/redux/features/orders/orderThunk";
import { fetchCart } from "@/redux/features/cart/cartThunk";
import toast from "react-hot-toast";

const CheckoutForm = ({ totalPrice, setShowForm }) => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.user?._id);
    const cartItems = useSelector((state) => state.cart?.carts?.[userId] || []);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = () => {
        const order = {
            userId,
            name,
            address,
            phone,
            items: cartItems,
            total: totalPrice,
        };

        dispatch(createOrder(order)).then((res) => {
            if (res.meta.requestStatus === "fulfilled") {
                toast.success(" تم تأكيد الطلب بنجاح!");
                setName("");
                setAddress("");
                setPhone("");
                dispatch(fetchCart(userId));
                setShowForm(false)
            } else {
                toast.error(" فشل في تأكيد الطلب");
            }
        });
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md mt-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">تفاصيل الطلب</h2>
            <div className="space-y-4">
                <input
                    type="text"
                    placeholder="الاسم"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="العنوان"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="رقم الهاتف"
                    className="w-full px-4 py-2 border rounded-lg"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <p className="text-xl font-semibold">
                    الإجمالي: ج.م {totalPrice.toFixed(2)}
                </p>
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold"
                >
                    تأكيد الطلب
                </button>
            </div>
        </div>
    );
};

export default CheckoutForm;
