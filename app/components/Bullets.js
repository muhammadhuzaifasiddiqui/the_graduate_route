"use clients";
import React from "react";
import Image from "next/image";

const Bullets = ({ bullets = "null" }) => {
  return (
    <>
      <div className="flex items-center gap-1.5 mb-3">
        <Image
          src={"/images/Ellipse.png"}
          width={9}
          height={9}
          alt="Ellipse"
          unoptimized={true}
          className=""
        />
        <p className="font-semibold uppercase leading-[100%]">{bullets}</p>
      </div>
    </>
  );
};

export default Bullets;
