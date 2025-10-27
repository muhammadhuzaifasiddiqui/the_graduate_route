"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blogs = ({ imgSrc = ``, imgAlt, title, para, date }) => {
  return (
    <>
      <Link href="#" className="bg-white blog-box-padding rounded-[20px]">
        <div className="image-wrapper">
          <Image
            src={imgSrc}
            width={375}
            height={246}
            alt={imgAlt}
            unoptimized={true}
            className="w-full!"
          />
        </div>
        <h5 className="mt-5 font-the-bold leading-28">{title}</h5>
        <p className="mt-1 md:mt-1.5 leading-20 text-black">{para}</p>
        <div className="flex items-center! gap-2  mt-4 md:mt-5">
          <Image
            src={"/images/blog.png"}
            width={21}
            height={21}
            alt="blog"
            unoptimized={true}
            className=""
          />
          <p className="font-medium">{date}</p>
        </div>
      </Link>
    </>
  );
};

export default Blogs;