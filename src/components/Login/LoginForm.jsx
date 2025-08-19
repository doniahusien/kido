"use client";
import { useForm } from "react-hook-form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/features/auth/authThunk";
import { useRouter } from "next/navigation";
import FormInput from "@/components/Form/FormInput";
import FormButton from "@/components/Form/FormButton";
import FormContainer from "@/components/Form/FormContainer";
const LoginForm = () => {
    
    const { handleSubmit,register,formState:{errors} } = useForm();
    const { error, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();


    const onSubmit = async (data) => {
        const resultAction = await dispatch(loginUser({ email: data.email, password: data.password }));
        if (loginUser.fulfilled.match(resultAction)) {
            router.push("/");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-200 via-yellow-100 to-yellow-200">
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-3xl font-bold text-red-600 text-center">
                    تسجيل الدخول
                </h2>
                <FormInput
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    name="email"
                    register={register}
                    errors={errors}
                    validation={{ required: "البريد الإلكتروني مطلوب" }}
                    label=" البريد الإلكتروني" />
                <FormInput
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    name="password"
                    register={register}
                    errors={errors}
                    validation={{ required: "كلمة المرور مطلوبة" }}
                    label="كلمة المرور" />
                <FormButton
                    loading={loading}
                    text="تسجيل الدخول"
                    textLoading="جاري التحميل..."
                />
            {error && (
                <h1 className="text-red-500 text-center mt-4 font-semibold">
                    {error}
                </h1>
            )}
            </FormContainer>

        </div >
    );
};

export default LoginForm;
