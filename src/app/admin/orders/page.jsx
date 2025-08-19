"use client";
import { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { fetchAdminOrders } from "@/redux/features/admin/adminThunk";

export default function AdminOrdersPage() {
    const dispatch = useDispatch();
    const router = useRouter();

    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const { orders, ordersStatus, ordersError } = useSelector((state) => state.admin);

    useEffect(() => {
        if (!isAuthenticated || user?.role !== "admin") {
            router.push("/login");
            return;
        }
        dispatch(fetchAdminOrders());
    }, [dispatch, isAuthenticated, user, router]);

    if (ordersStatus === "loading") {
        return (
            <div className="flex items-center justify-center h-64 space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                <span className="ml-3 text-lg font-medium text-gray-600">Loading orders...</span>
            </div>
        );
    }

    if (ordersStatus === "failed") {
        return <p className="text-red-600 text-center">{ordersError}</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">إدارة الطلبات</h1>
            <table className="w-full border text-sm">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border p-2">رقم الطلب</th>
                        <th className="border p-2">المستخدم</th>
                        <th className="border p-2">الهاتف</th>
                        <th className="border p-2">العنوان</th>
                        <th className="border p-2">التاريخ</th>
                        <th className="border p-2">العناصر</th>
                        <th className="border p-2">المجموع</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id} className="border-b">
                            <td className="border p-2">{order._id}</td>
                            <td className="border p-2">{order.name || "غير معروف"}</td>
                            <td className="border p-2">{order.phone || "—"}</td>
                            <td className="border p-2">{order.address || "—"}</td>
                            <td className="border p-2">
                                {order.date ? new Date(order.date).toLocaleDateString("ar-EG") : "—"}
                            </td>
                            <td className="border p-2">
                                {Array.isArray(order.items) && order.items.length > 0 ? (
                                    <ul className="list-disc pl-4">
                                        {order.items.map((item, i) => (
                                            <li key={i}>
                                                <div className="flex items-center justify-between gap-2">
                                                    {item.name} × {item.quantity}
                                                    <Image
                                                        src={item.images?.[0] || "/no-image.png"}
                                                        alt={item.name}
                                                        width={48}
                                                        height={48}
                                                        className="w-28 h-28 object-cover border rounded"
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <span>لا يوجد عناصر</span>
                                )}
                            </td>
                            <td className="border p-2">{order.total || 0} ج.م</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
