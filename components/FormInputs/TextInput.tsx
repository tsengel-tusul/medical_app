/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from "@/components/ui/input";
import React from "react";
import { Label } from "../ui/label";
import Link from "next/link";
type TextInputProps = {
  label: string;
  register: any;
  name: string;
  errors: any;
  type?: string;
  page?: string;
  placeholder?: string;
};

export default function TextInput({
  label,
  register,
  name,
  errors,
  type = "text",
  page,
  placeholder,
}: TextInputProps) {
  return (
    <div className="grid gap-2">
      {type === "password" && page === "login" ? (
        <div className="flex items-center">
          <Label htmlFor={`${name}`}>{label}</Label>
          <Link
            href="/forgot-password"
            className="ml-auto text-sm underline-offset-4 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
      ) : (
        <Label htmlFor={`${name}`}>{label}</Label>
      )}

      <Input
        {...register(`${name}`, { required: true })}
        id={`${name}`}
        name={`${name}`}
        type={type}
        autoComplete="name"
        placeholder={placeholder}
        required
      />
      {errors[`${name}`] && (
        <span className="text-red-600 text-sm">{label} is required</span>
      )}
    </div>
  );
}
