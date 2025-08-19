"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartQuantity } from "@/redux/features/cart/cartThunk";

import { Button, Card, CardContent, Typography, IconButton } from "@mui/material";
import { Plus, Minus, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.user?._id);

    const handleRemove = () => {
        dispatch(removeFromCart({ userId, productId: item._id }));
    };

    const handleIncrease = () => {
        dispatch(updateCartQuantity({ userId, productId: item._id, change: 1 }));
    };

    const handleDecrease = () => {
        if (item.quantity > 1) {
            dispatch(updateCartQuantity({ userId, productId: item._id, change: -1 }));
        } else {
            handleRemove();
        }
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-4"
        >
            <Card variant="outlined" className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-4">
                    {item?.images?.length > 0 ? (
                        <Image
                            src={item.images[0]}
                            alt={item?.name || "منتج"}
                            width={80}
                            height={80}
                            className="rounded-lg"
                        />
                    ) : (
                        <div className="w-20 h-20 bg-gray-300 rounded-lg flex items-center justify-center">
                            <Typography color="textSecondary">لا توجد صورة</Typography>
                        </div>
                    )}

                    <div>
                        <Typography variant="h6">{item?.name || "منتج بدون اسم"}</Typography>
                        <Typography color="textSecondary">الكمية: {item?.quantity || 1}</Typography>
                        <Typography fontWeight="bold">
                            السعر: ج.م {(item?.price || 0) * (item?.quantity || 1)}
                        </Typography>
                    </div>
                </div>

                <div className="flex items-center space-x-2">
                    <button onClick={handleDecrease} className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                        <Minus className="w-5 h-5" />
                    </button>
                    <span className="text-xl">{item?.quantity || 1}</span>
                    <button onClick={handleIncrease} className="p-2 bg-gray-200 rounded hover:bg-gray-300">
                        <Plus className="w-5 h-5" />
                    </button>
                    <button onClick={handleRemove} className="p-2 bg-red-500 rounded hover:bg-red-600 text-white">
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>
            </Card>
        </motion.div>
    );
};

export default CartItem;
