"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAdminProduct } from "@/redux/features/admin/adminThunk";

export default function AdminProductForm({ editProduct, setEditProduct }) {
    const dispatch = useDispatch();
    const { categories, loading } = useSelector((state) => state.admin);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        categoryId: "",
        image: null,
    });

    useEffect(() => {
        if (editProduct) {
            setFormData({
                name: editProduct.name,
                price: editProduct.price,
                categoryId: editProduct.categoryId,
                image: null,
            });
        }
    }, [editProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveAdminProduct({ formData, editProductId: editProduct?._id }));
        setFormData({ name: "", price: "", categoryId: "", image: null });
        setEditProduct(null);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-lg p-6 mb-10 space-y-4 border border-gray-200"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border p-2 rounded-md w-full"
                />
                <input
                    placeholder="Price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                    className="border p-2 rounded-md w-full"
                />
            </div>

            <select
                value={formData.categoryId}
                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                required
                className="border p-2 rounded-md w-full"
            >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={String(cat.id)}>
                        {cat.name}
                    </option>
                ))}
            </select>

            <input
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow font-medium"
                disabled={loading}
            >
                {loading ? "Saving..." : editProduct ? "Update Product" : "Add Product"}
            </button>
        </form>
    );
}
