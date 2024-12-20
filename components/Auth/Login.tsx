"use client";
import Link from "next/link";
import TextInput from "../FormInputs/TextInput";
import { useState, Suspense } from "react";
import { useForm } from "react-hook-form";
import { LoginInputProps } from "@/types/types";
import SubmitButton from "../FormInputs/SubmitButton";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import Image from "next/image";
import Logo from "../Frontend/Logo";

function LoginFormWithBgContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/dashboard";
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputProps>();

  async function onSubmit(data: LoginInputProps) {
    try {
      setIsLoading(true);
      console.log("Attempting to sign in with credentials:", data);
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        setIsLoading(false);
        toast.error("Sign-in error: Check your credentials");
        setShowNotification(true);
      } else {
        setShowNotification(false);
        reset();
        setIsLoading(false);
        toast.success("Амжилттай нэвтэрлээ");
        router.push(returnUrl);
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Network Error:", error);
      toast.error("Таны сүлжээнд ямар нэг зүйл буруу байгаа бололтой");
    }
  }

  return (
    <div className="w-full lg:grid h-96 lg:min-h-[600px] lg:grid-cols-2 relative">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6">
          <div className="absolute top-5 left-5">
            <Logo />
          </div>
          <div className="grid gap-2 ">
            <h1 className="text-3xl font-bold">Бүртгэлээрээ нэвтэрнэ үү</h1>
            <p className="text-balance text-muted-foreground text-sm mb-4">
              Асуух Doc-д тавтай морил
            </p>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            {showNotification && (
              <Alert color="failure" icon={HiInformationCircle}>
                <span className="font-medium">Нэвтрэх үед алдаа гарлаа!</span> Бүртгэлээ шалгана уу
              </Alert>
            )}
            <TextInput
              label="Имэйл хаяг"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Eg. johndoe@gmail.com"
            />
            <TextInput
              label="Нууц үг"
              register={register}
              page="login"
              name="password"
              type="password"
              errors={errors}
              placeholder="******"
            />
            <SubmitButton
              title="Нэвтрэх"
              isLoading={isLoading}
              loadingTitle="нэвтэрч байна түр хүлээнэ үү..."
            />
          </form>
          <div className="mt-4 text-center text-sm">
            Аккаунт байхгүй ?{" "}
            <Link href="/register" className="underline">
              Бүртгүүлэх
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/doctor.jpg"
          alt="Image"
          width="1500"
          height="1000"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}

export default function LoginFormWithBg() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginFormWithBgContent />
    </Suspense>
  );
}
