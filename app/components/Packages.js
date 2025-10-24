"use clients";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Packages = ({ packageTitle, Para, liTitle1, liTitle2, liTitle3, liTitle4, liTitle5, btnText }) => {
  return (
    <>
      <div className="bg-white price-box price-box-padding rounded-[16px] hover:bg-[#6C8E69] group transition duration-300 ease-in-out">
        <div className="inline-block bg-dark-green rounded-[70px] px-[23px] py-[6px] group-hover:bg-white!">
          <span className="font-segoeUi font-semibold text-white group-hover:text-black">
            {packageTitle}
          </span>
        </div>
        <p className="fs-18 text-black group-hover:text-white leading-[145%] mt-7.5">
          {Para}
        </p>
        <hr className="mt-5 opacity-[0.4] group-hover:opacity-[0.5] group-hover:border-white" />
        <div className="flex flex-col gap-3 pt-3 md:pt-5">
          <ul className="flex flex-col gap-3 pb-2">
            <li className="flex items-center gap-3 group-hover:text-white!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="transition duration-150"
              >
                <g clipPath="url(#clip0_22_4943)">
                  <path
                    d="M7 12L12 17L22 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L7 17M12 12L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_22_4943">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h5 className="leading-[160%] text-black group-hover:text-white">
                {liTitle1}
              </h5>
            </li>
            <li className="flex items-center gap-3 group-hover:text-white!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="transition duration-150"
              >
                <g clipPath="url(#clip0_22_4943)">
                  <path
                    d="M7 12L12 17L22 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L7 17M12 12L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_22_4943">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h5 className="leading-[160%] text-black group-hover:text-white">
                {liTitle2}
              </h5>
            </li>
            <li className="flex items-center gap-3 group-hover:text-white!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="transition duration-150"
              >
                <g clipPath="url(#clip0_22_4943)">
                  <path
                    d="M7 12L12 17L22 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L7 17M12 12L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_22_4943">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h5 className="leading-[160%] text-black group-hover:text-white">
                {liTitle3}
              </h5>
            </li>
            <li className="flex items-center gap-3 group-hover:text-white!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="transition duration-150"
              >
                <g clipPath="url(#clip0_22_4943)">
                  <path
                    d="M7 12L12 17L22 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L7 17M12 12L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_22_4943">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h5 className="leading-[160%] text-black group-hover:text-white">
                {liTitle4}
              </h5>
            </li>
            <li className="flex items-center gap-3 group-hover:text-white!">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="transition duration-150"
              >
                <g clipPath="url(#clip0_22_4943)">
                  <path
                    d="M7 12L12 17L22 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L7 17M12 12L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_22_4943">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h5 className="leading-[160%] text-black group-hover:text-white">
                {liTitle5}
              </h5>
            </li>
          </ul>
          <Link
            href="#"
            className="btn btn-md btn-secondary font-the-bold group-hover:text-white! text-center group-hover:rounded-[6px] group-hover:border! group-hover:border-black! 
                    group-hover:bg-[#6C8E69]! group-hover:shadow-[0_4px_0_0_#1E1E1E] group-hover:hover:shadow-[0_2px_0_0_#1E1E1E] 
                    group-hover:hover:translate-y-[2px]"
          >
            {btnText}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Packages;
