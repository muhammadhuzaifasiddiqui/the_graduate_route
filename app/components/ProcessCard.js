"use client";
import React from "react";
import Image from "next/image";

const ProcessCards = ({ Title = "null", Para = "null" }) => {
  return (
    <>
      <div className="bg-primary p-25 rounded-[20px]">
        <div className="bg-white rounded-[13px] p-18 inline-block">
          <div className="image-wrapper">
            <Image
              src={"/images/not-found.png"}
              width={32}
              height={32}
              alt="not-found"
              unoptimized={true}
              className="w-full! h-full! object-cover"
            />
          </div>
        </div>
        <h5 className="font-the-bold xl:mt-6 lg:mt-5 md:mt-4 mt-3">{Title}</h5>
        <p className="font-semibold leading-[130%] sm:leading-[187%] xl:mt-4 lg:mt-3 mt-2 uppercase">
          {Para}
        </p>
      </div>
    </>
  );
};

export default ProcessCards;
