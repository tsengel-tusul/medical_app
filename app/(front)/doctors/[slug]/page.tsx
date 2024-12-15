import React from "react";
import Image from "next/image";
import DoctorDetails from "@/components/DoctorDetails";
import FixedBookButton from "@/components/FixedBookButton";

export default function page() {
  return (
    <div className="bg-slate-50 py-24 min-h-screen">
      <div className="bg-white max-w-4xl border border-gray-200 mx-auto shadow-md rounded-md">
        <div className="py-8 px-6">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex flex-col">
                <h2 className="uppercase font-bold text-2xl tracking-widest">
                  Battsengel, Batjargal
                </h2>
                <p className="text-gray-500 text-xs uppercase">Adult Health</p>
              </div>
              <p>In-person doctor visit</p>
              <p>Bayangol 6-r khoroo</p>
            </div>
            <Image
              src="/doc-profile.jpg"
              width={243}
              height={207}
              alt="Doctor"
              className="w-36 h-36 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="">
          <DoctorDetails />
        </div>
      </div>
     

      <FixedBookButton/>
    </div>
  );
}
