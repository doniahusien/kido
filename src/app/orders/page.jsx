"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withAuth } from "@/withAuth";
import { fetchOrders } from "@/redux/features/orders/orderThunk";
import { motion } from "framer-motion";

const OrderSummaryPage = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.user?._id);
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (userId) dispatch(fetchOrders(userId));
  }, [userId, dispatch]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.03, transition: { duration: 0.3 }, boxShadow: "0 10px 20px rgba(255, 0, 0, 0.1)" },
  };

  return (
    <div className="max-w-5xl mx-auto mt-12 p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-green-600 text-center">📦 ملخص الطلبات</h1>

      {loading ? (
        <p className="text-gray-500 text-center">جارٍ تحميل الطلبات...</p>
      ) : error ? (
        <p className="text-red-500 text-center">حدث خطأ: {error}</p>
      ) : orders.length === 0 ? (
        <p className="text-gray-600 text-center">لا توجد طلبات حالياً.</p>
      ) : (
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {orders.map((order) => (
            <motion.div
              key={order._id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div><strong>الاسم:</strong> {order.name}</div>
                <div><strong>رقم الهاتف:</strong> {order.phone}</div>
                <div><strong>العنوان:</strong> {order.address}</div>
                <div><strong>إجمالي السعر:</strong> {order.total.toLocaleString("ar-EG")} جنيه</div>
                <div className="md:col-span-2"><strong>تاريخ الطلب:</strong> {new Date(order.date).toLocaleString("ar-EG")}</div>
              </div>
              <div>
                <strong>المنتجات:</strong>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - {item.quantity} × {item.price.toLocaleString("ar-EG")} = {(item.quantity * item.price).toLocaleString("ar-EG")} جنيه
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default withAuth(OrderSummaryPage);
