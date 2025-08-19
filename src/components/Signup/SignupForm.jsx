"use client"
import React from 'react'
import { signupUser } from '@/redux/features/auth/authThunk'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import FormInput from '@/components/Form/FormInput'
import FormButton from '@/components/Form/FormButton'
import FormContainer from '@/components/Form/FormContainer'
const SignUpForm = () => {

    const { loading, error } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            await dispatch(signupUser({ email: data.email, password: data.password, name: data.name })).unwrap();
            toast.success("تمت تسجيل الحساب", {
                duration: 2000,
                style: {
                    background: "#4caf50",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "bold",
                },
            });
            setTimeout(() => {
                router.push("/");
            }, 2000);
        } catch (err) {
            toast.error(" فشل التسجيل", {
                duration: 2000,
                style: {
                    background: "#f44336",
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "bold",
                },
            });
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-200 via-yellow-100 to-yellow-200">
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                    إنشاء حساب
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
                <FormInput
                    type="text"
                    placeholder="أدخل اسمك"
                    name="name"
                    register={register}
                    errors={errors}
                    validation={{ required: "الاسم مطلوب" }}
                    label="الاسم"/>
                <FormButton
                    loading={loading}
                    text="تسجيل الحساب"
                    textLoading="جاري التحميل..."
                />
                {error && (
                    <h1 className="text-red-500 text-center mt-4 font-semibold">
                        {error}
                    </h1>
                )}
            </FormContainer>
        </div >
    )
}

export default SignUpForm
