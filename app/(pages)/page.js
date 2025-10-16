import React from "react";
import Navbar from "../components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <div className="hero-wrapper">
          <div className="container mx-auto">
            <div className="flex items-center pt-[90px] gap-2">
              <div className="col-1/2">
                <div className="relative">
                  <Image
                    src={"/images/Group.png"}
                    width={36}
                    height={36}
                    alt="heading"
                    unoptimized={true}
                    className="absolute top-0 right-0"
                  />
                  <h1 className="font-the-bold font-bold">
                    <span className="text-brown">Unlock</span>
                    Full Funding for
                    <span className="text-brown">Global Masters</span>
                  </h1>
                </div>
                <h6 className="fs-18 font-semibold mt-[15px] leading-[166%]">
                  At The Graduate Route, we guide future leaders to secure
                  scholarships and admission to world-class graduate schools —
                  then return home to build impact.
                </h6>
                <div className="flex gap-3 mt-[40px] relative">
                  <Image
                    src={"/images/arrow-vector.png"}
                    width={60}
                    height={60}
                    alt="arrow-vector"
                    unoptimized={true}
                    className="absolute right-0 top-[-20px]"
                  />
                  <Link href="#" className="btn btn-primary font-the-bold">
                    Take the Quiz → Find Your Path
                  </Link>
                  <Link href="#" className="btn btn-secondary font-the-bold">
                    Book a Strategy Call
                  </Link>
                </div>
                <p className="font-the-bold font-semibold text-dark-black mt-[50px] leading-[175%]">
                  Trusted By Trustpliot
                </p>
                <div className="mt-[10px]">
                  <Image
                    src={"/images/green-stars.png"}
                    width={99}
                    height={19}
                    alt="green-stars"
                    unoptimized={true}
                    className=""
                  />
                </div>
                <div className="relative">
                  <Image
                    src={"/images/plus Group.png"}
                    width={82}
                    height={55}
                    alt="plus Group"
                    unoptimized={true}
                    className="absolute bottom-[-40px] right-[40px]"
                  />
                  <p className="font-the-bold font-semibold text-dark-black mt-[24px] leading-[175%]">
                    Over 7,000 S-Start Customer Reviews
                  </p>
                  <div className="mt-[10px]">
                    <Image
                      src={"/images/black-stars.png"}
                      width={100}
                      height={20}
                      alt="black-stars"
                      unoptimized={true}
                      className=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-1/2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
