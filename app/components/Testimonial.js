"use client";
import React from "react";
import Image from "next/image";

const Testimonials = ({ imgSrc = ``, Para, ClinetName, ClientPaltform }) => {
  return (
    <>
      <div className="flex flex-col p-25 bg-white rounded-[18px]">
        <div className="image-wrapper">
          <Image
            src={imgSrc || "/images/default-avatar.png"}
            width={52}
            height={52}
            alt={`Testimonial from ${ClinetName || "client"}`}
            unoptimized={true}
            className="w-full! h-full! object-cover"
          />
        </div>
        <div>
          <p className="line-clamp-6 fs-18 font-semibold xl:mt-7 lg:mt-6 mt-5">
            {Para}
          </p>
        </div>
        <div className="flex justify-between items-center xl:mt-15 lg:mt-10 md:mt-7.5 mt-5">
          <div className="flex flex-col">
            <p className="font-the-bold leading-[100%]">{ClinetName}</p>
            <p className="fs-14 text-[#737373] mt-1 leading-[100%]">
              {ClientPaltform}
            </p>
          </div>
          <div className="image-wrapper">
            <Image
              src={"/images/quotation.png"}
              width={36}
              height={36}
              alt="quotation"
              unoptimized={true}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;