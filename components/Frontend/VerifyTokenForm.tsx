"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
// import { updateUserById } from "@/actions/users";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { updateUserById } from "@/actions/user";
import SubmitButton from "../FormInputs/SubmitButton";
import { UserRole } from "@prisma/client";

const FormSchema = z.object({
  token: z.string().min(6, {
    message: "Your Token must be 6 characters.",
  }),
});

export default function VerifyTokenForm({
  userToken,
  id,
  role,
}: {
  userToken: number | undefined;
  id: string;
  role: UserRole | undefined;
}) {
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      token: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    const userInputToken = parseInt(data.token);
    if (userInputToken === userToken) {
      setShowNotification(false);
      //Update User
      try {
        await updateUserById(id);
        setLoading(false);
        // reset();
        toast.success("Account Verified");
        if (role === "DOCTOR") {
          router.push(`/login?returnUrl=/onboarding`);
        } else {
          router.push("/login");
        }
        //OnBoarding Page
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      setShowNotification(true);
      setLoading(false);
    }
    console.log(userInputToken);
  }

  return (
    <Form {...form}>
      {showNotification && (
        <Alert color="failure" icon={HiInformationCircle}>
          <span className="font-medium">Буруу токен!</span> Токеныг шалгаад дахин оруулна уу
        </Alert>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="token"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Токеныг энд оруулна уу</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              {/* <FormDescription>
                Please enter the 6-figure pass code sent to your email.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />

        <SubmitButton
          title="Submit to Verify"
          isLoading={loading}
          loadingTitle="Verifying please wait..."
        />
      </form>
    </Form>
  );
}
