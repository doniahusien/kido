"use client"
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function withAuth(Component) {
    return function ProtectedComponent(props) {
        const router = useRouter();
        const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

        useEffect(() => {
            if (!isAuthenticated) {
                router.replace("/login");
            }
        }, [isAuthenticated]);

        if (!isAuthenticated) return null;
        return <Component {...props} />;
    };
}
