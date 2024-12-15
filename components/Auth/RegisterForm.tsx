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

export default function RegisterForm({ role = "USER" }: { role?: UserRole }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
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
        console.log(user.data);

      }else{
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
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Full Name"
            register={register}
            name="fullName"
            errors={errors}
          />

          <TextInput
            label="Email address"
            register={register}
            name="email"
            type="email"
            errors={errors}
          />
          <TextInput
            label="Phone number"
            register={register}
            name="phone"
            type="tel"
            errors={errors}
          />
          <TextInput
            label="Password"
            register={register}
            name="password"
            type="password"
            errors={errors}
          />
          <div>
            <SubmitButton
              title="Create Account"
              isLoading={isLoading}
              loadingTitle="Creating please wait..."
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have Account?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
