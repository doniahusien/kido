"use client";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartThunk";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";

const AddToCartButton = ({ toy }) => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.user?._id);

    const handleAddToCart = () => {
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

    return (
        <button
            onClick={handleAddToCart}
            className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 
                bg-gradient-to-r from-pink-400 to-yellow-400 text-white 
                rounded-full shadow-md hover:from-pink-500 hover:to-yellow-500 
                hover:shadow-lg transition-all duration-300"
        >
            <ShoppingCart size={18} /> {/* icon */}
            <span>أضف إلى السلة</span>
        </button>
    );
};

export default AddToCartButton;
