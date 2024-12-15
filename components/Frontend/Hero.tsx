import React from "react";
import SearchBar from "./SearchBar";
import TransitionalText from "./TransitionalText";
import { Pill } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-blue-950">
      <div className="relative  pb-[110px] pt-[50px] dark:bg-dark lg:pt-[50px] max-w-6xl mx-auto xl:text-2xl">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <div className="hero-content">
                <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-blue-500 dark:text-white sm:text-[42px] lg:text-[30px] ">
                  <span>Уулзалтын цагаа</span>
                  <span className="mr-2">
                    {" "}
                    <TransitionalText />
                  </span>
                  <span>захиалаарай</span>
                </h1>
                <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-gray-100">
                  Танд эрүүл мэндийн үйлчилгээг цаг алдалгүй хурдан шуурхай
                  үзүүлэх болно.
                </p>
                {/* SEARCH BAR HERE*/}
                <SearchBar />
                {/* CTA BTNS*/}

                <ul className="flex flex-wrap items-center mt-6">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-700 lg:px-7"
                    >
                      яаралтай эмчийн тусламж
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#"
                      className=" inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-gray-50 hover:text-blue-500 dark:text-gray-500"
                    >
                      <span className="mr-2">
                        <Pill className="flex-shrink-0 h-4 w-4 text-blue-600  " />
                      </span>
                      эмчид дахин үзүүлэх
                    </a>
                  </li>
                </ul>
                <div className="py-4 pt-8 flex gar-4">
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-gray-50">50</span>
                    <span className="text-sm text-gray-400 mr-2">
                      Мэргэжлийн эмч
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-bold text-gray-50"> 1800</span>
                    <span className="text-sm text-gray-400 ">
                      Тогтмол эмчлүүлэгч
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-5/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <Image
                    src="/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                    layout="responsive"
                    width={400}
                    height={400}
                  />

                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
