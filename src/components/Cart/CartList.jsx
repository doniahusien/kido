"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "@/redux/features/cart/cartThunk";
import CartItem from "./CartItem";

const CartList = () => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.user?._id);
    const cartItems = useSelector((state) => state.cart?.carts?.[userId] || []);

    useEffect(() => {
        if (userId) {
            dispatch(fetchCart(userId));
        }
    }, [dispatch, userId]);

    if (!cartItems || cartItems.length === 0) {
        return <p className="text-center text-gray-600 text-xl">سلتك فارغة.</p>;
    }

    return (
        <>
            {cartItems.filter(Boolean).map((item) => (
                <CartItem key={item._id} item={item} />
            ))}
        </>
    );
};

export default CartList;
