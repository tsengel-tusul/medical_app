// "use client";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import SubmitButton from "../FormInputs/SubmitButton";
// import { useState } from "react";
// import toast from "react-hot-toast";
// import { useForm } from "react-hook-form";
// import { LoginInputProps } from "@/types/types";
// import { useRouter } from "next/navigation";
// import { Alert } from "flowbite-react";
// import { HiInformationCircle } from "react-icons/hi";
// import TextInput from "../FormInputs/TextInput";
// import { signIn } from "next-auth/react";
// import  Image  from "next/image";

// export default function LoginFormWithBg({
//   className,
//   ...props
// }: React.ComponentPropsWithoutRef<"form">) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [showNotification, setShowNotification] = useState(false);
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<LoginInputProps>();
//   async function onSubmit(data: LoginInputProps) {
//     try {
//       setIsLoading(true);
//       console.log("Attempting to sign in with credentials:", data);
//       const loginData = await signIn("credentials", {
//         ...data,
//         redirect: false,
//       });
//       console.log("SignIn response:", loginData);
//       if (loginData?.error) {
//         setIsLoading(false);
//         toast.error("Sign-in error: Check your credentials!");
//         setShowNotification(true);
//       } else {
//         // Sign-in was successful
//         setShowNotification(false);
//         reset();
//         setIsLoading(false);
//         toast.success("Login Successful");
//         router.push("/dashboard");
//       }
//     } catch (error) {
//       setIsLoading(false);
//       console.error("Network Error:", error);
//       toast.error("Its seems something is wrong with your Network");
//     }
//   }
//   return (
//     <form className={cn("flex flex-col gap-6", className)} {...props}>
//       <div className="flex flex-col items-center gap-2 text-center">
//         <h1 className="text-2xl font-bold">Login to your account</h1>
//         <p className="text-balance text-sm text-muted-foreground">
//           Enter your email below to login to your account
//         </p>
//       </div>
//       <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
//         {showNotification && (
//           <Alert color="failure" icon={HiInformationCircle}>
//             <span className="font-medium">Sign-in error!</span> Please Check
//             your credentials
//           </Alert>
//         )}
//         <TextInput
//           label="Password"
//           register={register}
//           name="password"
//           type="password"
//           errors={errors}
//           placeholder="********"
//         />
        
//         <SubmitButton
//           title="Login"
//           isLoading={isLoading}
//           loadingTitle="Logging please wait..."
//         />
//         <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
//           <span className="relative z-10 bg-background px-2 text-muted-foreground">
//             Or continue with
//           </span>
//         </div>
//         <Button variant="outline" className="w-full">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//             <path
//               d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
//               fill="currentColor"
//             />
//           </svg>
//           Login with GitHub
//         </Button>
//       </form>
//       <div className="text-center text-sm">
//         Don&apos;t have an account?{" "}
//         <a href="/register" className="underline underline-offset-4">
//           Sign up
//         </a>
//       </div>
//       <div className="hidden bg-muted lg:block">
//          <Image
//           src="/doctor.jpg"
//           alt="Image"
//           width="1500"
//           height="1000"
//           className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
//         /> 
//       </div>
//     </form>
//   );
// }
"use client";
import Link from "next/link";
import TextInput from "../FormInputs/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginInputProps } from "@/types/types";
import SubmitButton from "../FormInputs/SubmitButton";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
//import SignupCarousel from "../Frontend/SignupCarousel";
import Image from "next/image";
import Logo from "../Frontend/Logo";

export default function LoginFormWithBg() {
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
        // Sign-in was successful
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
        {/* <SignupCarousel /> */}
      </div>
    </div>
  );
}
