"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchAdminData } from "@/redux/features/admin/adminThunk";
import AdminProductForm from "@/components/admin/AdminProductForm";
import AdminProductTable from "@/components/admin/AdminProductTable";

export default function AdminProductsPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [editProduct, setEditProduct] = useState(null);
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    useEffect(() => {
        if (!isAuthenticated) {
            router.push("/login");
            return;
        }

        if (user?.role !== "admin") {
            router.push("/");
            return;
        }

        dispatch(fetchAdminData());
    }, [dispatch, router, user, isAuthenticated]);

    if (!isAuthenticated || user?.role !== "admin") {
        return <p className="text-center mt-10 text-gray-600">Checking access...</p>;
    }

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin: Products</h1>
            <div className="mb-6">
                <button
                    onClick={() => router.push("/admin/orders")}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow transition"
                >
                    View All Orders
                </button>
            </div>

            <AdminProductForm editProduct={editProduct} setEditProduct={setEditProduct} />
            <AdminProductTable setEditProduct={setEditProduct} />
        </div>
    );
}
