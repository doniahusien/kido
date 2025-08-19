import Link from "next/link";
const UserActions = ({ isAuthenticated, handleLogOut, isMobile = false }) => {
    const btnClass = "px-4 py-2 rounded-lg transition text-sm";
    return isAuthenticated ? (
        <>
            <Link href="/cart" className={`${btnClass} ${isMobile ? "mb-2 block" : "hidden md:block"} bg-yellow-400 text-red-700 hover:bg-yellow-500`}>
                عرض السلة
            </Link>
            <button onClick={handleLogOut} className={`${btnClass} ${isMobile ? "block" : "hidden md:block"} bg-red-700 text-white hover:bg-red-800`}>
                تسجيل الخروج
            </button>
        </>
    ) : (
        <>
            <Link href="/login" className={`${btnClass} ${isMobile ? "mb-2 block" : "hidden lg:block"} bg-blue-500 text-white hover:bg-blue-600`}>
                تسجيل الدخول
            </Link>
            <Link href="/signup" className={`${btnClass} ${isMobile ? "block" : "hidden lg:block"} bg-green-500 text-white hover:bg-green-600`}>
                إنشاء حساب
            </Link>
        </>
    );
};
export default UserActions;