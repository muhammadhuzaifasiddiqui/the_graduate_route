"use client";
import React from "react";
import Image from "next/image";
const Bullet = ({ Para = "null" }) => {
  return (
    <>
      <div className={`flex items-center bg-white rounded-[16px] p-20 gap-4`}>
        <div className="image-wrapper">
          <Image
            src={"/images/ellipse-circle.png"}
            width={9}
            height={9}
            alt="ellipse-circle"
            unoptimized={true}
            className=""
          />
        </div>
        <p className={`font-the-bold leading-[120%] sm:leading-[175%]`}>
          {" "}
          {Para}{" "}
        </p>
      </div>
    </>
  );
};

export default Bullet;