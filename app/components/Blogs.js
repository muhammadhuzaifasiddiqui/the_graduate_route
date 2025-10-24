"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Blogs = ({ imgSrc = ``, imgAlt, title, para, date }) => {
  return (
    <>
      <Link href="#" className="bg-white blog-box-padding rounded-[20px]">
        <div className="imaege-wrapper">
          <Image
            src={imgSrc}
            width={375}
            height={246}
            alt={imgAlt}
            unoptimized={true}
            className="w-full!"
          />
        </div>
        <h5 className="xl:mt-5 mt-3 font-the-bold leading-[140%]">{title}</h5>
        <p className="mt-1 leading-[131%]">{para}</p>
        <div className="flex items-center! gap-2 xl:mt-5 lg:mt-4 mt-3">
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