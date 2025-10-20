import React from "react";
import Navbar from "../components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* HERO-SECTION */}
      <section className="hero-section relative">
        <Image
          src={"/images/H3.png"}
          width={645}
          height={610}
          alt="H3"
          unoptimized={true}
          className="w-full h-auto absolute right-0 top-[200px]"
        />
        <div className="hero-wrapper">
          <div className="container mx-auto">
            <div className="flex items-center pt-[100px] gap-5">
              <div className="w-[50%]">
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
                    className="absolute bottom-[-35px] right-[40px]"
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
              <div className="w-[50%] relative">
                <div className="image-wrapper ml-auto mr-0">
                  <Image
                    src={"/images/hero.png"}
                    width={645}
                    height={610}
                    alt="hero"
                    unoptimized={true}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute p-16 bg-white rounded-[13px] bottom-[35px] left-[110px]">
                  <p className="fs-19 font-the-bold">Get ready to join</p>
                  <p className="">60k+ Users</p>
                  <Image
                    src={"/images/users.png"}
                    width={152}
                    height={44}
                    alt="users"
                    unoptimized={true}
                    className="w-full h-auto mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* STATISTICS-SECTION */}
      <section className="statistics-section relative">
        <Image
          src={"/images/edged-Shape.png"}
          width={645}
          height={610}
          alt="edged-Shape"
          unoptimized={true}
          className="w-full h-auto absolute right-0 top-[55px]"
        />
        <div className="statistics-wrapper py-120">
          <div className="container mx-auto">
            <div className="bg-white p-46 rounded-[20px]">
              <h3 className="font-the-bold text-center">
                Our <span className="text-brown">Statistics</span>
              </h3>
              <div className="flex justify-between gap-15 mt-[44px]">
                <div className="flex flex-col items-center">
                  <h4 className="font-the-bold">
                    6.4 million<span className="text-brown">+</span> USD
                  </h4>
                  <p className="mt-2 text-center font-medium">
                    Securing fully funded scholarships across five countries
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-the-bold">
                    900<span className="text-brown">+</span> clients
                  </h4>
                  <p className="mt-2 text-center font-medium">
                    One-on-one mentoring with personalized strategy and success
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-the-bold">
                    175<span className="text-brown">+</span> Scholarships
                  </h4>
                  <p className="mt-2 text-center font-medium">
                    From Chevening to DAAD and Erasmus — our results speak for
                    themselves.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-the-bold">
                    98<span className="text-brown">%</span> Satisfaction
                  </h4>
                  <p className="mt-2 text-center font-medium">
                    Strategic, personalized impact trusted by 98% clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHAT-WE-DO-SECTION */}
      <section className="what-we-do-section">
        <div className="what-we-do-wrapper">
          <div className="container mx-auto">
            <div className="flex items-center gap-1.5">
              <Image
                src={"/images/Ellipse.png"}
                width={9}
                height={9}
                alt="Ellipse"
                unoptimized={true}
                className=""
              />
              <p className="font-semibold">WHAT WE DO</p>
            </div>
            <h2 className="font-the-bold">
              What We <span className="text-brown mt-3">Help</span> You{" "}
              <span className="text-brown">Do</span>
            </h2>
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-5 w-[50%] pr-5 mt-[50px]">
                <div className="flex items-center bg-white rounded-[16px] p-20 gap-4">
                  <Image
                    src={"/images/ellipse-circle.png"}
                    width={9}
                    height={9}
                    alt="ellipse-circle"
                    unoptimized={true}
                    className=""
                  />
                  <p className="font-the-bold leading-[175%]">
                    Stand out among a competitive applicant pool
                  </p>
                </div>
                <div className="flex items-center bg-white rounded-[16px] p-20 gap-4">
                  <Image
                    src={"/images/ellipse-circle.png"}
                    width={9}
                    height={9}
                    alt="ellipse-circle"
                    unoptimized={true}
                    className=""
                  />
                  <p className="font-the-bold leading-[175%]">
                    Secure high-value scholarships & fellowships
                  </p>
                </div>
                <div className="flex items-center bg-white rounded-[16px] p-20 gap-4">
                  <Image
                    src={"/images/ellipse-circle.png"}
                    width={9}
                    height={9}
                    alt="ellipse-circle"
                    unoptimized={true}
                    className=""
                  />
                  <p className="font-the-bold leading-[175%]">
                    Craft essays, research proposals, and applications that
                    highlight your unique impact
                  </p>
                </div>
                <div className="flex items-center bg-white rounded-[16px] p-20 gap-4">
                  <Image
                    src={"/images/ellipse-circle.png"}
                    width={9}
                    height={9}
                    alt="ellipse-circle"
                    unoptimized={true}
                    className=""
                  />
                  <p className="font-the-bold leading-[175%]">
                    Build a compelling narrative around your goals and mission
                  </p>
                </div>
                <div className="flex items-center bg-white rounded-[16px] p-20 gap-4">
                  <Image
                    src={"/images/ellipse-circle.png"}
                    width={9}
                    height={9}
                    alt="ellipse-circle"
                    unoptimized={true}
                    className=""
                  />
                  <p className="font-the-bold leading-[175%]">
                    Navigate admissions, interview prep, funding, and post-grad
                    planning
                  </p>
                </div>
              </div>
              <div className="w-[50%]">
                <Image
                  src={"/images/what-we-do.png"}
                  width={600}
                  height={515}
                  alt="what-we-do"
                  unoptimized={true}
                  className="ml-auto mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PROCESS-SECTION */}
      <section className="process-section">
        <div className="process-wrapper py-120 relative">
          <Image
            src={"/images/excel.png"}
            width={125}
            height={124}
            alt="excel"
            unoptimized={true}
            className="absolute left-0 top-[60px]"
          />
          <div className="container mx-auto ">
            <div className="bg-white process-box-padding rounded-[20px]">
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <Image
                    src={"/images/Ellipse.png"}
                    width={9}
                    height={9}
                    alt="Ellipse"
                    unoptimized={true}
                    className=""
                  />
                  <p className="font-semibold">PROCESS</p>
                </div>
                <h3 className="text-center justify-center font-the-bold">
                  HOW IT <span className="text-brown">WORKS</span>
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-5 mt-10">
                <div className="bg-primary p-25 rounded-[20px]">
                  <div className="bg-white rounded-[13px] p-18 inline-block">
                    <Image
                      src={"/images/not-found.png"}
                      width={32}
                      height={32}
                      alt="not-found"
                      unoptimized={true}
                      className=""
                    />
                  </div>
                  <h5 className="font-the-bold mt-6">
                    Discovery & Profile Assessment
                  </h5>
                  <p className="font-semibold leading-[187%] mt-4 uppercase">
                    We evaluate your background, goals, strengths & gaps.
                  </p>
                </div>
                <div className="bg-primary p-25 rounded-[20px]">
                  <div className="bg-white rounded-[13px] p-18 inline-block">
                    <Image
                      src={"/images/not-found.png"}
                      width={32}
                      height={32}
                      alt="not-found"
                      unoptimized={true}
                      className=""
                    />
                  </div>
                  <h5 className="font-the-bold mt-6">
                    Discovery & Profile Assessment
                  </h5>
                  <p className="font-semibold leading-[187%] mt-4 uppercase">
                    We evaluate your background, goals, strengths & gaps.
                  </p>
                </div>
                <div className="bg-primary p-25 rounded-[20px]">
                  <div className="bg-white rounded-[13px] p-18 inline-block">
                    <Image
                      src={"/images/not-found.png"}
                      width={32}
                      height={32}
                      alt="not-found"
                      unoptimized={true}
                      className=""
                    />
                  </div>
                  <h5 className="font-the-bold mt-6">
                    Strategic Planning & Roadmap
                  </h5>
                  <p className="font-semibold leading-[187%] mt-4 uppercase">
                    Together we design a timeline choice of programs,
                    application components.
                  </p>
                </div>
                <div className="bg-primary p-25 rounded-[20px]">
                  <div className="bg-white rounded-[13px] p-18 inline-block">
                    <Image
                      src={"/images/not-found.png"}
                      width={32}
                      height={32}
                      alt="not-found"
                      unoptimized={true}
                      className=""
                    />
                  </div>
                  <h5 className="font-the-bold mt-6">
                    Interview & Scholarship Prep
                  </h5>
                  <p className="font-semibold leading-[187%] mt-4 uppercase">
                    Mock interviews, funding pitch coaching, mindset support.
                  </p>
                </div>
                <div className="bg-primary p-25 rounded-[20px]">
                  <div className="bg-white rounded-[13px] p-18 inline-block">
                    <Image
                      src={"/images/not-found.png"}
                      width={32}
                      height={32}
                      alt="not-found"
                      unoptimized={true}
                      className=""
                    />
                  </div>
                  <h5 className="font-the-bold mt-6">Decision & Next Steps</h5>
                  <p className="font-semibold leading-[187%] mt-4 uppercase">
                    You accept an offer, we help with visa, transitions, and
                    visionary next steps.
                  </p>
                </div>
                <div className="bg-dark-green p-46 rounded-[20px]">
                  <div className="flex flex-col gap-3 mt-[40px]">
                    <Link
                      href="#"
                      className="btn btn-primary font-the-bold text-center"
                    >
                      Take the Quiz → Find Your Path
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-tertiary font-semibold text-center"
                    >
                      Book a Free consult
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BLOG-SECTION */}
      <section className="blog-section relative">
        <Image
          src={"/images/flower.png"}
          width={114}
          height={120}
          alt="flower"
          unoptimized={true}
          className="absolute right-0 top-[-55px]"
        />
        <div className="blog-wrapper">
          <div className="container mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Image
                  src={"/images/Ellipse.png"}
                  width={9}
                  height={9}
                  alt="Ellipse"
                  unoptimized={true}
                  className=""
                />
                <p className="font-semibold">PROCESS</p>
              </div>
              <h3 className="text-center justify-center font-the-bold">
                HOW IT <span className="text-brown">WORKS</span>
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-10">
              <div className="bg-white blog-box-padding rounded-[20px]">
                <div className="imaege-wrapper">
                  <Image
                    src={"/images/Rectangle.png"}
                    width={375}
                    height={246}
                    alt="Rectangle"
                    unoptimized={true}
                    className="w-full!"
                  />
                </div>
                <h5 className="mt-5 font-the-bold leading-[140%]">
                  Lorem ipsum dolor amet consectetur adipiscing justo sit amet
                </h5>
                <p className="mt-1 leading-[131%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex gap-2 mt-5 items-center">
                  <Image
                    src={"/images/blog.png"}
                    width={21}
                    height={21}
                    alt="blog"
                    unoptimized={true}
                    className=""
                  />
                  <p className="font-medium">15 Sep, 2023</p>
                </div>
              </div>
              <div className="bg-white blog-box-padding rounded-[20px]">
                <div className="imaege-wrapper">
                  <Image
                    src={"/images/Rectangle.png"}
                    width={375}
                    height={246}
                    alt="Rectangle"
                    unoptimized={true}
                    className="w-full!"
                  />
                </div>
                <h5 className="mt-5 font-the-bold leading-[140%]">
                  Lorem ipsum dolor amet consectetur adipiscing justo sit amet
                </h5>
                <p className="mt-1 leading-[131%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex gap-2 mt-5 items-center">
                  <Image
                    src={"/images/blog.png"}
                    width={21}
                    height={21}
                    alt="blog"
                    unoptimized={true}
                    className=""
                  />
                  <p className="font-medium">15 Sep, 2023</p>
                </div>
              </div>
              <div className="bg-white blog-box-padding rounded-[20px]">
                <div className="imaege-wrapper">
                  <Image
                    src={"/images/Rectangle.png"}
                    width={375}
                    height={246}
                    alt="Rectangle"
                    unoptimized={true}
                    className="w-full!"
                  />
                </div>
                <h5 className="mt-5 font-the-bold leading-[140%]">
                  Lorem ipsum dolor amet consectetur adipiscing justo sit amet
                </h5>
                <p className="mt-1 leading-[131%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex gap-2 mt-5 items-center">
                  <Image
                    src={"/images/blog.png"}
                    width={21}
                    height={21}
                    alt="blog"
                    unoptimized={true}
                    className=""
                  />
                  <p className="font-medium">15 Sep, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PRICE-SECTION */}
      <section className="price-section">
        <div className="price-wrapper py-120">
          <div className="container mx-auto relative">
            <Image
              src={"/images/Vector-box.png"}
              width={86}
              height={86}
              alt="Vector-box"
              unoptimized={true}
              className="absolute left-[75px] top-[-86px]"
            />
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Image
                  src={"/images/Ellipse.png"}
                  width={9}
                  height={9}
                  alt="Ellipse"
                  unoptimized={true}
                  className=""
                />
                <p className="font-semibold">PACKAGES</p>
              </div>
              <h3 className="text-center justify-center font-the-bold">
                PRICING <span className="text-brown">PLANS</span>
              </h3>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-12.5">
              <div className="bg-white price-box price-box-padding rounded-[16px] hover:bg-[#6C8E69] group transition duration-300 ease-in-out">
                <div className="inline-block bg-dark-green rounded-[70px] px-[23px] py-[6px] group-hover:bg-white!">
                  <span className="font-segoeUi font-semibold text-white group-hover:text-black">
                    Basic
                  </span>
                </div>
                {/* Text color remains black (already black in the default state) */}
                <p className="fs-18 text-black group-hover:text-white leading-[145%] mt-7.5">
                  Get 100 headshots with 10 unique backdrops and outfits.
                </p>
                {/* HR color changes to white with 50% opacity on hover */}
                <hr className="mt-5 opacity-[0.4] group-hover:opacity-[0.5] group-hover:border-white" />
                <div className="flex flex-col gap-3 py-5">
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      2 hours turnaround time
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      100 headshots
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      Choice of 10 backdrops
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      Choice of 10 outfits
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      10 edit credits
                    </h5>
                  </div>
                  {/* Button style changes on hover of the parent div */}
                  <Link
                    href="#"
                    className="btn btn-secondary font-the-bold group-hover:text-white! text-center group-hover:rounded-[6px] group-hover:border! group-hover:border-black! 
                    group-hover:bg-[#6C8E69]! group-hover:shadow-[0_4px_0_0_#1E1E1E] group-hover:hover:shadow-[0_2px_0_0_#1E1E1E] 
                    group-hover:hover:translate-y-[2px]"
                  >
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
              <div className="bg-white price-box price-box-padding rounded-[16px] hover:bg-[#6C8E69] group transition duration-300 ease-in-out">
                <div className="inline-block bg-dark-green rounded-[70px] px-[23px] py-[6px] group-hover:bg-white!">
                  <span className="font-segoeUi font-semibold text-white group-hover:text-black">
                    Professional
                  </span>
                </div>
                {/* Text color remains black (already black in the default state) */}
                <p className="fs-18 text-black group-hover:text-white leading-[145%] mt-7.5">
                  Get 100 headshots with 10 unique backdrops and outfits.
                </p>
                {/* HR color changes to white with 50% opacity on hover */}
                <hr className="mt-5 opacity-[0.4] group-hover:opacity-[0.5] group-hover:border-white" />
                <div className="flex flex-col gap-3 py-5">
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      2 hours turnaround time
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      100 headshots
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      Choice of 10 backdrops
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      Choice of 10 outfits
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      10 edit credits
                    </h5>
                  </div>
                  {/* Button style changes on hover of the parent div */}
                  <Link
                    href="#"
                    className="btn btn-secondary font-the-bold group-hover:text-white! text-center group-hover:rounded-[6px] group-hover:border! group-hover:border-black! 
                    group-hover:bg-[#6C8E69]! group-hover:shadow-[0_4px_0_0_#1E1E1E] group-hover:hover:shadow-[0_2px_0_0_#1E1E1E] 
                    group-hover:hover:translate-y-[2px]"
                  >
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
              <div className="bg-white price-box price-box-padding rounded-[16px] hover:bg-[#6C8E69] group transition duration-300 ease-in-out">
                <div className="inline-block bg-dark-green rounded-[70px] px-[23px] py-[6px] group-hover:bg-white!">
                  <span className="font-segoeUi font-semibold text-white group-hover:text-black">
                    Executive
                  </span>
                </div>
                {/* Text color remains black (already black in the default state) */}
                <p className="fs-18 text-black group-hover:text-white leading-[145%] mt-7.5">
                  Get 100 headshots with 10 unique backdrops and outfits.
                </p>
                {/* HR color changes to white with 50% opacity on hover */}
                <hr className="mt-5 opacity-[0.4] group-hover:opacity-[0.5] group-hover:border-white" />
                <div className="flex flex-col gap-3 py-5">
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      2 hours turnaround time
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      100 headshots
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      Choice of 10 backdrops
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      Choice of 10 outfits
                    </h5>
                  </div>
                  <div className="flex items-center gap-3 group-hover:text-white!">
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
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
                          strokeWidth="2" /* Converted stroke-width to strokeWidth */
                          strokeLinecap="round" /* Converted stroke-linecap to strokeLinecap */
                          strokeLinejoin="round" /* Converted stroke-linejoin to strokeLinejoin */
                        />
                        <path
                          d="M2 12L7 17M12 12L17 7"
                          stroke="currentColor" /* Replace with {color} or currentColor for dynamic styling */
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
                    {/* Text color remains black */}
                    <h5 className="leading-[160%] text-black group-hover:text-white">
                      10 edit credits
                    </h5>
                  </div>
                  {/* Button style changes on hover of the parent div */}
                  <Link
                    href="#"
                    className="btn btn-secondary font-the-bold group-hover:text-white! text-center group-hover:rounded-[6px] group-hover:border! group-hover:border-black! 
                    group-hover:bg-[#6C8E69]! group-hover:shadow-[0_4px_0_0_#1E1E1E] group-hover:hover:shadow-[0_2px_0_0_#1E1E1E] 
                    group-hover:hover:translate-y-[2px]"
                  >
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS-SECTION */}
      <section className="faqs-section relative">
        <Image
          src={"/images/Shape-shape.png"}
          width={86}
          height={86}
          alt="Shape-shape"
          unoptimized={true}
          className="absolute left-0 right-auto"
        />
        <div className="faqs-wrapper">
          <div className="container px-120 mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Image
                  src={"/images/Ellipse.png"}
                  width={9}
                  height={9}
                  alt="Ellipse"
                  unoptimized={true}
                  className=""
                />
                <p className="font-semibold">FAQS</p>
              </div>
              <h3 className="text-center uppercase justify-center font-the-bold">
                Frequently <span className="text-brown">asked </span>questions
              </h3>
            </div>

            <div className="flex flex-col mt-50 gap-5">
              <div className="faq-drawer p-24 rounded-[12px] hover:bg-[#6C8E69]! group transition-colors duration-300">
                <input
                  className="faq-drawer__trigger"
                  id="faq-drawer"
                  type="checkbox"
                />
                <label
                  className="faq-drawer__title fs-18 font-the-bold group-hover:text-white! transition-colors duration-300"
                  htmlFor="faq-drawer"
                >
                  Q: Can you help with US applications / non-UK?{" "}
                </label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="mt-5 group-hover:text-white transition-colors duration-300">
                      Our A+ talent goes through a no-joke vetting process. Only
                      the top 1% make it through. Once we’ve got three
                      rockstars, we’ll line up interviews so you can pick your
                      fave—easy peasy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="faq-drawer p-24 rounded-[12px] hover:bg-[#6C8E69]! group transition-colors duration-300">
                <input
                  className="faq-drawer__trigger"
                  id="faq-drawer-2"
                  type="checkbox"
                />
                <label
                  className="faq-drawer__title fs-18 font-the-bold group-hover:text-white! transition-colors duration-300"
                  htmlFor="faq-drawer-2"
                >
                  Q: Can you help with US applications / non-UK?
                </label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="mt-5 group-hover:text-white transition-colors duration-300">
                      Our A+ talent goes through a no-joke vetting process. Only
                      the top 1% make it through. Once we’ve got three
                      rockstars, we’ll line up interviews so you can pick your
                      fave—easy peasy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="faq-drawer p-24 rounded-[12px] hover:bg-[#6C8E69]! group transition-colors duration-300">
                <input
                  className="faq-drawer__trigger"
                  id="faq-drawer-3"
                  type="checkbox"
                />
                <label
                  className="faq-drawer__title fs-18 font-the-bold group-hover:text-white! transition-colors duration-300"
                  htmlFor="faq-drawer-3"
                >
                  Q: What’s your refund or guarantee policy?
                </label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="mt-5 group-hover:text-white transition-colors duration-300">
                      Our A+ talent goes through a no-joke vetting process. Only
                      the top 1% make it through. Once we’ve got three
                      rockstars, we’ll line up interviews so you can pick your
                      fave—easy peasy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="faq-drawer p-24 rounded-[12px] hover:bg-[#6C8E69]! group transition-colors duration-300">
                <input
                  className="faq-drawer__trigger"
                  id="faq-drawer-4"
                  type="checkbox"
                />
                <label
                  className="faq-drawer__title fs-18 font-the-bold group-hover:text-white! transition-colors duration-300"
                  htmlFor="faq-drawer-4"
                >
                  Q: How soon should I start?
                </label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="mt-5 group-hover:text-white transition-colors duration-300">
                      Our A+ talent goes through a no-joke vetting process. Only
                      the top 1% make it through. Once we’ve got three
                      rockstars, we’ll line up interviews so you can pick your
                      fave—easy peasy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT-SECTION */}
      <section className="contact-section">
        <div className="contact-section-wrapper py-120">
          <div className="container mx-auto p-70 bg-white rounded-[16px]">
            <div className="flex gap-5">
              <div className="flex flex-col w-[55%]">
                <h2 className="font-the-bold text-black">
                  Ready to Launch Your Global Grad Journey?
                </h2>
                <div className="flex gap-3 mt-[40px] relative">
                  <Link
                    href="#"
                    className="btn btn-transparent shadow-[0_4px_0_0_#1e1e1e] font-the-bold"
                  >
                    Take the Quiz Now
                  </Link>
                  <Link href="#" className="btn btn-transparent font-semibold">
                    Schedule a Free Call”
                  </Link>
                </div>
                <p className="fs-12 mt-4 text-black">
                  (Optional small print: “Spots are limited. 2026 intake
                  applications open now.”)
                </p>
              </div>
              <div className="flex flex-col w-[45%]">
                <form className="">
                  <div className="flex flex-col gap-5">
                    {/* Username */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="username"
                        className="block text-black font-medium"
                      >
                        Full name
                        <span className="mt-[-10px] text-[#FB2C36] text-[20px] leading-0">
                          *
                        </span>
                      </label>
                      <input
                        id="username"
                        type="text"
                        name="username"
                        placeholder="John Smith"
                        className="block mt-2.5 fs-14 w-full placeholder-[#000] bg-[#F5F5F5] p-[15px] rounded-[8px] focus:outline-none"
                      />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="block text-black font-medium"
                      >
                        Email
                        <span className="mt-[-10px] text-[#FB2C36] text-[20px] leading-0">
                          *
                        </span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="john.smith@gmail.com"
                        className="block mt-2.5 fs-14 bg-[#F5F5F5] placeholder-[#000] text-black p-[15px] rounded-[8px] focus:outline-none"
                      />
                    </div>

                    {/* Cover Photo */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="cover-photo"
                        className="block text-black font-medium"
                      >
                        Upload your CV
                        <span className="mt-[-10px] text-[#FB2C36] text-[20px] leading-0">
                          *
                        </span>
                      </label>
                      <div className="mt-2.5 flex justify-center rounded-[8px] bg-[#F5F5F5] text-black border border-dashed border-[#D4D4D4] p-[46px]">
                        <div className="flex flex-col items-center justify-center text-center">
                          <Image
                            src={"/images/upload.png"}
                            width={86}
                            height={86}
                            alt="upload"
                            unoptimized={true}
                            className=""
                          />
                          <div className="mt-4 flex">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer rounded-md"
                            >
                              <span className="font-helvetica-now fs-14">
                                Upload your CV
                              </span>
                              <input
                                id="file-upload"
                                type="file"
                                name="file-upload"
                                className="sr-only"
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quiry */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="about"
                        className="block text-black font-medium"
                      >
                        Your Quiry
                        <span className="mt-[-10px] text-[#FB2C36] text-[20px] leading-0">
                          *
                        </span>
                      </label>
                      <textarea
                        id="about"
                        name="about"
                        rows="3"
                        placeholder="How can we assist you?"
                        className="block w-full fs-14 mt-2.5 bg-[#F5F5F5] placeholder-[#000] p-[15px] rounded-[8px] focus:outline-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="mt-6 flex">
                    <Link
                      href="#"
                      className="btn btn-md btn-transparent shadow-[0_4px_0_0_#1e1e1e] font-the-bold"
                    >
                      SUBMIT
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
