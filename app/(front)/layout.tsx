
import Footer from "@/components/Frontend/Footer/Footer";
//import Navbar from "@/components/Frontend/Navbar";
import { SiteHeader } from "@/components/site-header";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <SiteHeader/>
      {children}
      <Footer/>
    </div>
  );
}
