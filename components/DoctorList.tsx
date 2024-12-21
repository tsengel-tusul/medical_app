import React from "react";
import SectionHeading from "./SectionHeading";
import ToggleButton from "./ToggleButton";
import Link from "next/link";
import DoctorListCarousel from "./DoctorsListCarousel";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export default function DoctorList({
  title = "Telehealth visit",
  isInPerson,
  className = "bg-pink-100 dark:bg-blue-800 py-8 lg:py-24",
}: {
  title?: string;
  isInPerson?: boolean;
  className?: string;
}) {
  const doctors = [
    {
      name: "John",
    },
    {
      name: "John",
    },
    {
      name: "John",
    },
    {
      name: "John",
    },
  ];
  return (
    <div className={className}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading title={title} />
        <div className="py-4 flex items-center justify-between">
          {isInPerson ? (
            <Link
              href=""
              className="text-sm flex items-center text-blue-700 font-semibold"
            >
              <span>Map View</span>
            </Link>
          ) : (
            <ToggleButton />
          )}
          <Button asChild>
            <Link
              className=""
              href="#"
            >
              See All
              <ArrowUpRight className="h-4 w-4 ms-2"/>
            </Link>
          </Button>
        </div>
        <div className="py-6">
          <DoctorListCarousel doctors={doctors} isInPerson={isInPerson} />
        </div>
      </div>
    </div>
  );
}
