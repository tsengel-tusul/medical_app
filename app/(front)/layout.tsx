import Footer from "@/components/Frontend/Footer/Footer";
//import Navbar from "@/components/Frontend/Navbar";
import { SiteHeader } from "@/components/site-header";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React, { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <div className="">
      <SiteHeader session={session}/>
      {children}
      <Footer />
    </div>
  );
}
