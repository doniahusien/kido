"use client";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function ContactInfo() {
    const info = [
        { title: "📧 البريد الإلكتروني", value: "Kiddo.Kingdom.Store@gmail.com" },
        { title: "📞 الهاتف", value: "01559840993", dir: "ltr" },
        { title: "🏢 العنوان", value: "عبدالسلام عارف" },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {info.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: idx * 0.2, duration: 0.6, type: "spring" }}
                >
                    <Card sx={{ bgcolor: "#fee2e2", borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h6" color="error" fontWeight="bold" gutterBottom>
                                {item.title}
                            </Typography>
                            <Typography variant="body1" color="text.primary" dir={item.dir || "rtl"}>
                                {item.value}
                            </Typography>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
