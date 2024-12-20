"use client";
import { type RegisterInputProps } from "@/types/types";
import Link from "next/link";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import { createUser } from "@/actions/user";
import { UserRole } from "@prisma/client";
import toast from "react-hot-toast";
import Logo from "../Frontend/Logo";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegisterWithBg({ role = "USER" }: { role?: UserRole }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  const router=useRouter();
  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
    setIsLoading(true);

    data.role = role;
    try {
      const user = await createUser(data);
      if (user && user.status === 200) {
        console.log("User Craeted successfully");
        reset();
        setIsLoading(false);
        toast.success("User Created successfully");
        router.push(`/verify-account/${user.data?.id}`)
        console.log(user.data);
      } else {
        console.log(user.error);
        toast.success("User Created Unsuccessfully");
        reset();
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full lg:grid h-96 lg:min-h-[600px] lg:grid-cols-2 relative">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6">
          <div className="absolute top-5 left-5">
            <Logo />
          </div>
          <div className="grid gap-2 text-center ">
            <h1 className="text-3xl font-bold">Бүртгүүлэх</h1>
            <p className="text-balance text-muted-foreground text-sm mb-4">
              enter your information to create an account
            </p>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Full Name"
              register={register}
              name="fullName"
              errors={errors}
              placeholder={"Enter your full name"}
            />
            <TextInput
              label="Имэйл хаяг"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Eg. johndoe@gmail.com"
            />
            <TextInput
              label="Phone number"
              register={register}
              name="phone"
              type="tel"
              errors={errors}
              placeholder={"9911..."}
            />
            <TextInput
              label="Нууц үг"
              register={register}
              name="password"
              type="password"
              errors={errors}
              placeholder="******"
            />

            <SubmitButton
              title="Бүртгүүлэх"
              isLoading={isLoading}
              loadingTitle="бүртгэж байна түр хүлээнэ үү..."
            />
          </form>
          <div className="mt-4 text-center text-sm">
            Аккаунт үүсгэсэн ?{" "}
            <Link href="/login" className="underline">
              Нэвтрэх
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
        {/* <SignupCarousel /> */}
      </div>
    </div>
  );
}
