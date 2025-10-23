"use client";
import React from "react";
import Navbar from "../components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("option1"); // Default selected

  const options = [
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" },
    { id: "option4", label: "Option 4" },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <>
      <Navbar />

      {/* HERO-SECTION */}
      <section className="hero-section relative">
        <Image
          src={"/images/H3.png"}
          width={69}
          height={69}
          alt="H3"
          unoptimized={true}
          className="absolute right-0 xl:top-[200px] lg:top-[120px] sm:top-[550px] top-[600px] w-[68px]! lg:w-[75px]!"
        />
        <div className="hero-wrapper">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center px-fixed-20  gap-5">
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <Image
                    src={"/images/Group.png"}
                    width={36}
                    height={36}
                    alt="heading"
                    unoptimized={true}
                    className="absolute top-0 right-0"
                  />
                  <h1 className="font-the-bold font-bold leading-[100%]">
                    <span className="text-brown">Unlock </span>
                    Full Funding for
                    <span className="text-brown"> Global Masters</span>
                  </h1>
                </div>
                <p className="fs-18 font-semibold mt-[15px] leading-[166%]">
                  At The Graduate Route, we guide future leaders to secure
                  scholarships and admission to world-class graduate schools —
                  then return home to build impact.
                </p>
                <div className="flex flex-col md:flex-row text-center gap-3 xl:mt-10 lg:mt-8 md:mt-6 mt-5 relative">
                  <Image
                    src={"/images/arrow-vector.png"}
                    width={60}
                    height={60}
                    alt="arrow-vector"
                    unoptimized={true}
                    className="absolute right-0 lg:top-[-20px] top-[-65px] -z-10"
                  />
                  <div className="flex group">
                    <Link
                      href="#"
                      className="btn btn-primary w-full! font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
                    group-hover:hover:translate-y-[2px]!"
                    >
                      Take the Quiz → Find Your Path
                    </Link>
                  </div>

                  <div className="flex group">
                    <Link
                      href="#"
                      className="btn btn-secondary w-full! font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E] group-hover:hover:shadow-[0_2px_0_0_#1E1E1E] 
                    group-hover:hover:translate-y-[2px]"
                    >
                      Book a Strategy Call
                    </Link>
                  </div>
                </div>
                <p className="font-the-bold font-semibold text-dark-black xl:mt-12.5 lg:mt-11 mt-10 leading-[175%]">
                  Trusted By Trustpliot
                </p>
                <div className="mt-[10px] cursor-pointer">
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
                    className="absolute lg:bottom-[-35px] bottom-[50] right-[40px]"
                  />
                  <p className="font-the-bold font-semibold text-dark-black xl:mt-6 lg:mt-5 mt-4 leading-[175%]">
                    Over 7,000 S-Start Customer Reviews
                  </p>
                  <div className="mt-2.5 cursor-pointer">
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
              <div className="w-full lg:w-1/2 relative">
                <Image
                  src={"/images/hero.png"}
                  width={645}
                  height={610}
                  alt="hero"
                  unoptimized={true}
                  className="w-auto! lg:ml-auto lg:mr-0 mx-auto"
                />
                <div className="users absolute p-16">
                  <p className="fs-19 font-the-bold">Get ready to join</p>
                  <p className="">60k+ Users</p>
                  <Image
                    src={"/images/users.png"}
                    width={152}
                    height={44}
                    alt="users"
                    unoptimized={true}
                    className="mt-2 md:mt-4"
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
          width={85}
          height={85}
          alt="edged-Shape"
          unoptimized={true}
          className="absolute -z-10 right-0 xl:top-[55px] lg:top-[30px] md:top-[10px] top-[5] w-[85px]! lg:w-[100px]!"
        />
        <div className="statistics-wrapper py-120">
          <div className="container mx-auto px-fixed-20">
            <div className="bg-white p-46 rounded-[20px]">
              <h3 className="font-the-bold text-center leading-[100%]">
                Our <span className="text-brown">Statistics</span>
              </h3>
              <div className="grid grid-flow-row lg:grid-flow-col grid-cols-2 lg:grid-cols-4 justify-center lg:justify-between gap-5 md:gap-3 lg:gap-1 xl:mt-11 lg:mt-9.5 mt-7.5">
                <div className="flex flex-col items-center">
                  <h4 className="font-the-bold text-center">
                    6.4 million<span className="text-brown">+</span> USD
                  </h4>
                  <p className="mt-2 text-center font-medium line-clamp-3">
                    Securing fully funded scholarships across five countries
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-the-bold text-center">
                    900<span className="text-brown"> +</span> clients
                  </h4>
                  <p className="mt-2 text-center font-medium line-clamp-3">
                    One-on-one mentoring with personalized strategy and success
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-the-bold text-center">
                    175<span className="text-brown"> +</span> Scholarships
                  </h4>
                  <p className="mt-2 text-center font-medium line-clamp-3">
                    From Chevening to DAAD and Erasmus — our results speak for
                    themselves.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-the-bold text-center">
                    98<span className="text-brown"> %</span> Satisfaction
                  </h4>
                  <p className="mt-2 text-center font-medium line-clamp-3">
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
          <div className="container mx-auto px-fixed-20">
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
            <h2 className="font-the-bold leading-[100%]">
              What We <span className="text-brown mt-3">Help</span> You{" "}
              <span className="text-brown">Do</span>
            </h2>
            <div className="flex flex-col lg:flex-row items-center gap-7.5 lg:gap-5 mt-50">
              <div className="flex flex-col xl:gap-5 lg:gap-4 gap-3 w-full lg:w-1/2 pr-5">
                <div className="flex items-center bg-white rounded-[16px] p-20 gap-4">
                  <Image
                    src={"/images/ellipse-circle.png"}
                    width={9}
                    height={9}
                    alt="ellipse-circle"
                    unoptimized={true}
                    className=""
                  />
                  <p className="font-the-bold leading-[120%] sm:leading-[175%]">
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
                  <p className="font-the-bold leading-[120%] sm:leading-[175%]">
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
                  <p className="font-the-bold leading-[120%] sm:leading-[175%]">
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
                  <p className="font-the-bold leading-[120%] sm:leading-[175%]">
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
                  <p className="font-the-bold leading-[120%] sm:leading-[175%]">
                    Navigate admissions, interview prep, funding, and post-grad
                    planning
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
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
            className="absolute -z-10 left-0 xl:top-[80px] lg:top-[40px] top-[10px] w-[75px]! lg:w-[100px]!"
          />
          <div className="container mx-auto px-fixed-20">
            <div className="bg-white process-box-padding rounded-[20px]">
              <div className="flex flex-col items-center gap-2 lg:gap-3">
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
                <h2 className="text-center justify-center font-the-bold leading-[100%]">
                  HOW IT <span className="text-brown">WORKS</span>
                </h2>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-4 gap-3 xl:mt-10 lg:mt-8 md:mt-6 mt-4">
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
                  <h5 className="font-the-bold xl:mt-6 lg:mt-5 md:mt-4 mt-3">
                    Discovery & Profile Assessment
                  </h5>
                  <p className="font-semibold leading-[130%] sm:leading-[187%] xl:mt-4 lg:mt-3 mt-2 uppercase">
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
                  <h5 className="font-the-bold xl:mt-6 lg:mt-5 md:mt-4 mt-3">
                    Discovery & Profile Assessment
                  </h5>
                  <p className="font-semibold leading-[130%] sm:leading-[187%] xl:mt-4 lg:mt-3 mt-2 uppercase">
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
                  <h5 className="font-the-bold xl:mt-6 lg:mt-5 md:mt-4 mt-3">
                    Strategic Planning & Roadmap
                  </h5>
                  <p className="font-semibold leading-[130%] sm:leading-[187%] xl:mt-4 lg:mt-3 mt-2 uppercase">
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
                  <h5 className="font-the-bold xl:mt-6 lg:mt-5 md:mt-4 mt-3">
                    Interview & Scholarship Prep
                  </h5>
                  <p className="font-semibold leading-[130%] sm:leading-[187%] xl:mt-4 lg:mt-3 mt-2 uppercase">
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
                  <h5 className="font-the-bold xl:mt-6 lg:mt-5 md:mt-4 mt-3">
                    Decision & Next Steps
                  </h5>
                  <p className="font-semibold leading-[130%] sm:leading-[187%] xl:mt-4 lg:mt-3 mt-2 uppercase">
                    You accept an offer, we help with visa, transitions, and
                    visionary next steps.
                  </p>
                </div>
                <div className="bg-dark-green p-46 rounded-[20px]">
                  <div className="flex flex-col text-center gap-3 lg:mt-8.5 md:mt-9 sm:mt-5.5 mt-1.5">
                    <div className="flex group">
                      <Link
                        href="#"
                        className="btn btn-primary w-full! font-the-bold text-center group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
                    group-hover:hover:translate-y-[2px]!"
                      >
                        Take the Quiz → Find Your Path
                      </Link>
                    </div>
                    <div className="flex group">
                      <Link
                        href="#"
                        className="btn btn-tertiary  w-full! font-semibold text-center group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
                    group-hover:hover:translate-y-[2px]!"
                      >
                        Book a Free consult
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL-SECTION */}
      <section className="testimonial-section">
        <div className="testimonial-wrapper">
          <div className="container mx-auto px-fixed-20">
            {/* Title and Header Area */}
            <div className="flex items-center gap-1.5 mb-3">
              <Image
                src={"/images/Ellipse.png"}
                width={9}
                height={9}
                alt="Ellipse"
                unoptimized={true}
                className=""
              />
              <p className="font-semibold">SUCCESS STORIES</p>
            </div>

            {/* Header and Custom Navigation Buttons Container */}
            <div className="flex relative">
              <div className="w-[75%] md:w-[60%] lg:w-[40%]">
                <h2 className="font-the-bold uppercase leading-[100%]">
                  Client <span className="text-brown">Experiences</span> – What
                  People Are
                  <span className="text-brown"> Saying</span>
                </h2>
              </div>
              <Image
                src={"/images/Shape.png"}
                width={48}
                height={48}
                alt="Ellipse"
                unoptimized={true}
                className="absolute xl:left-[60%] lg:left-[70%] left-[80%] top-[-50px] w-[40px]! lg:w-[60px]!"
              />

              {/* Navigation Buttons - Added z-10 and cursor-pointer */}
              <div className="flex gap-2.5 absolute right-0 bottom-0 z-10">
                <div
                  onClick={handlePrev}
                  className="bg-white slide-btn rounded-[100px] cursor-pointer"
                >
                  <Image
                    src={"/images/slide-left.png"}
                    width={8}
                    height={16}
                    alt="slide-left"
                    unoptimized={true}
                    className=""
                  />
                </div>
                <div
                  onClick={handleNext}
                  className="bg-white slide-btn rounded-[100px] cursor-pointer"
                >
                  <Image
                    src={"/images/slide-right.png"}
                    width={8}
                    height={16}
                    alt="slide-right"
                    unoptimized={true}
                    className=""
                  />
                </div>
              </div>
            </div>

            {/* Swiper Slider */}
            <div className="testimonial-slider-wrapper w-full overflow-hidden">
              <Swiper
                // 3. Use onSwiper to save the instance to the ref
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                // 4. Include the modules being used
                spaceBetween={12}
                slidesPerView={4}
                centeredSlides={true}
                breakpoints={{
                  1399.97: {
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween: 20,
                  },
                  1199.97: {
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween: 16,
                  },
                  1023.97: {
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween: 16,
                  },
                  767.97: {
                    slidesPerView: 2,
                    centeredSlides: true,
                    spaceBetween: 12,
                  },
                  575.97: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 12,
                  },
                  399.97: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 12,
                  },
                  319.97: {
                    slidesPerView: 1,
                    centeredSlides: true,
                    spaceBetween: 12,
                  },
                }}
              >
                {/* Swiper Slides */}
                <SwiperSlide>
                  <div className="flex flex-col xl:mt-12.5 lg:mt-9 md:mt-7 mt-5 p-25 bg-white rounded-[18px]">
                    <div className="image-wrapper">
                      <Image
                        src={"/images/testimonial-clara.png"}
                        width={52}
                        height={52}
                        alt="testimonial-clara"
                        unoptimized={true}
                        className=""
                      />
                    </div>
                    <div>
                      <p className="line-clamp-8 fs-18 font-semibold xl:mt-7 lg:mt-6 mt-5">
                        &quot;Thank you for educating me and my Spotify
                        colleague today. You were amazing. We area pretty
                        engaged community but I have rarely seen such a positive
                        response to a lecture. I don&apos;t know if you saw the
                        internal comments but there were lots of them. &quot;
                      </p>
                    </div>
                    <div className="flex justify-between items-center xl:mt-15 lg:mt-10 md:mt-7.5 mt-5">
                      <div className="flex flex-col">
                        <p className="font-the-bold">Gabriella</p>
                        <p className="fs-14 text-[#737373] mt-1">Spotify</p>
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col xl:mt-12.5 lg:mt-9 md:mt-7 mt-5 p-25 bg-white rounded-[18px]">
                    <div className="image-wrapper">
                      <Image
                        src={"/images/testimonial-james.png"}
                        width={52}
                        height={52}
                        alt="testimonial-james"
                        unoptimized={true}
                        className=""
                      />
                    </div>
                    <div>
                      <p className="line-clamp-8 fs-18 font-semibold xl:mt-7 lg:mt-6 mt-5">
                        &quot;Thank you for educating me and my Spotify
                        colleague today. You were amazing. We area pretty
                        engaged community but I have rarely seen such a positive
                        response to a lecture. I don&apos;t know if you saw the
                        internal comments but there were lots of them. &quot;
                      </p>
                    </div>
                    <div className="flex justify-between items-center xl:mt-15 lg:mt-10 md:mt-7.5 mt-5">
                      <div className="flex flex-col">
                        <p className="font-the-bold">Gabriella</p>
                        <p className="fs-14 text-[#737373] mt-1">Spotify</p>
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col xl:mt-12.5 lg:mt-9 md:mt-7 mt-5 p-25 bg-white rounded-[18px]">
                    <div className="image-wrapper">
                      <Image
                        src={"/images/testimonial-jessi.png"}
                        width={52}
                        height={52}
                        alt="testimonial-jessi"
                        unoptimized={true}
                        className=""
                      />
                    </div>
                    <div>
                      <p className="line-clamp-8 fs-18 font-semibold xl:mt-7 lg:mt-6 mt-5">
                        &quot;Thank you for educating me and my Spotify
                        colleague today. You were amazing. We area pretty
                        engaged community but I have rarely seen such a positive
                        response to a lecture. I don&apos;t know if you saw the
                        internal comments but there were lots of them. &quot;
                      </p>
                    </div>
                    <div className="flex justify-between items-center xl:mt-15 lg:mt-10 md:mt-7.5 mt-5">
                      <div className="flex flex-col">
                        <p className="font-the-bold">Gabriella</p>
                        <p className="fs-14 text-[#737373] mt-1">Spotify</p>
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col xl:mt-12.5 lg:mt-9 md:mt-7 mt-5 p-25 bg-white rounded-[18px]">
                    <div className="image-wrapper">
                      <Image
                        src={"/images/testimonial-clara.png"}
                        width={52}
                        height={52}
                        alt="testimonial-clara"
                        unoptimized={true}
                        className=""
                      />
                    </div>
                    <div>
                      <p className="line-clamp-8 fs-18 font-semibold xl:mt-7 lg:mt-6 mt-5">
                        &quot;Thank you for educating me and my Spotify
                        colleague today. You were amazing. We area pretty
                        engaged community but I have rarely seen such a positive
                        response to a lecture. I don&apos;t know if you saw the
                        internal comments but there were lots of them. &quot;
                      </p>
                    </div>
                    <div className="flex justify-between items-center xl:mt-15 lg:mt-10 md:mt-7.5 mt-5">
                      <div className="flex flex-col">
                        <p className="font-the-bold">Gabriella</p>
                        <p className="fs-14 text-[#737373] mt-1">Spotify</p>
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col xl:mt-12.5 lg:mt-9 md:mt-7 mt-5 p-25 bg-white rounded-[18px]">
                    <div className="image-wrapper">
                      <Image
                        src={"/images/testimonial-james.png"}
                        width={52}
                        height={52}
                        alt="testimonial-james"
                        unoptimized={true}
                        className=""
                      />
                    </div>
                    <div>
                      <p className="line-clamp-8 fs-18 font-semibold xl:mt-7 lg:mt-6 mt-5">
                        &quot;Thank you for educating me and my Spotify
                        colleague today. You were amazing. We area pretty
                        engaged community but I have rarely seen such a positive
                        response to a lecture. I don&apos;t know if you saw the
                        internal comments but there were lots of them. &quot;
                      </p>
                    </div>
                    <div className="flex justify-between items-center xl:mt-15 lg:mt-10 md:mt-7.5 mt-5">
                      <div className="flex flex-col">
                        <p className="font-the-bold">Gabriella</p>
                        <p className="fs-14 text-[#737373] mt-1">Spotify</p>
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col xl:mt-12.5 lg:mt-9 md:mt-7 mt-5 p-25 bg-white rounded-[18px]">
                    <div className="image-wrapper">
                      <Image
                        src={"/images/testimonial-jessi.png"}
                        width={52}
                        height={52}
                        alt="testimonial-jessi"
                        unoptimized={true}
                        className=""
                      />
                    </div>
                    <div>
                      <p className="line-clamp-8 fs-18 font-semibold xl:mt-7 lg:mt-6 mt-5">
                        &quot;Thank you for educating me and my Spotify
                        colleague today. You were amazing. We area pretty
                        engaged community but I have rarely seen such a positive
                        response to a lecture. I don&apos;t know if you saw the
                        internal comments but there were lots of them. &quot;
                      </p>
                    </div>
                    <div className="flex justify-between items-center xl:mt-15 lg:mt-10 md:mt-7.5 mt-5">
                      <div className="flex flex-col">
                        <p className="font-the-bold">Gabriella</p>
                        <p className="fs-14 text-[#737373] mt-1">Spotify</p>
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM-SECTION */}
      {/* <section className="instagram-section relative">
        <Image
          src={"/images/top-Ellipse.png"}
          width={125}
          height={124}
          alt="excel"
          unoptimized={true}
          className="w-full! absolute top-0 border-2 border-amber-600"
        />
        <div className="instagram-wrapper py-120 z-10 relative">
          <div className="flex flex-col">
            <h2 className="text-center justify-center font-the-bold">
              INSTAGRAM <span className="text-brown">FEED</span>
            </h2>
          </div>
        </div>
        <Image
          src={"/images/bottom-Ellipse.png"}
          width={125}
          height={124}
          alt="excel"
          unoptimized={true}
          className="w-full! absolute bottom-0 border-2 border-amber-600"
        />
      </section> */}

      {/* BLOG-SECTION */}
      <section className="blog-section relative">
        <Image
          src={"/images/flower.png"}
          width={114}
          height={120}
          alt="flower"
          unoptimized={true}
          className="absolute -z-10 right-0 xl:top-[-55px] lg:top-[80px] top-[100px] w-[45px]! lg:w-[60px]!"
        />
        <div className="blog-wrapper pt-120">
          <div className="container mx-auto px-fixed-20">
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
                <p className="font-semibold">BLOGS</p>
              </div>
              <h2 className="text-center justify-center font-the-bold leading-[100%]">
                OUR <span className="text-brown">BLOGS</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-5 lg:gap-4 gap-3 xl:mt-10 lg:mt-8 md:mt-6 mt-4">
              <Link
                href=""
                className="bg-white blog-box-padding rounded-[20px]"
              >
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
                <h5 className="xl:mt-5 mt-3 font-the-bold leading-[140%]">
                  Lorem ipsum dolor amet consectetur adipiscing justo sit amet
                </h5>
                <p className="mt-1 leading-[131%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex items-center! gap-2 xl:mt-5 lg:mt-4 mt-3">
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
              </Link>
              <Link
                href=""
                className="bg-white blog-box-padding rounded-[20px]"
              >
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
                <h5 className="xl:mt-5 mt-3 font-the-bold leading-[140%]">
                  Lorem ipsum dolor amet consectetur adipiscing justo sit amet
                </h5>
                <p className="mt-1 leading-[131%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex gap-2 xl:mt-5 lg:mt-4 mt-3 items-center">
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
              </Link>
              <Link
                href=""
                className="bg-white blog-box-padding rounded-[20px]"
              >
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
                <h5 className="xl:mt-5 mt-3 font-the-bold leading-[140%]">
                  Lorem ipsum dolor amet consectetur adipiscing justo sit amet
                </h5>
                <p className="mt-1 leading-[131%]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="flex gap-2 xl:mt-5 lg:mt-4 mt-3 items-center">
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TAKE-THE-QUIZ-SECTION */}
      <section className="take-the-quiz-section relative">
        <Image
          src={"/images/sharp-shape.png"}
          width={114}
          height={120}
          alt="sharp-shape"
          unoptimized={true}
          className="absolute -z-10 left-auto right-0 lg:top-[15%] top-[18%] transform lg:-translate-y-15% -translate-y-18% w-[90px]! lg:w-[110px]!"
        />
        <div className="take-the-quiz-wrapper pt-120 px-fixed-20 ">
          <div className="container px-120 mx-auto">
            <div className="flex flex-col items-center xl:gap-3 gap-2">
              <div className="flex items-center gap-1.5">
                <Image
                  src={"/images/Ellipse.png"}
                  width={9}
                  height={9}
                  alt="Ellipse"
                  unoptimized={true}
                  className=""
                />
                <p className="font-semibold uppercase">Take the Quiz</p>
              </div>
              <h2 className="text-center justify-center font-the-bold leading-[100%]">
                What’s Your Ideal <span className="text-brown">Graduate</span>{" "}
                Route?
              </h2>
              <p className="p-260 text-center">
                Answer 5 quick questions so we can pinpoint which route &
                support package fits you best — and show how to amplify your
                chances for admission and funding.
              </p>
            </div>
            <div className="flex flex-col mt-50 rounded-[12px] bg-white p-25">
              <h5 className="font-the-bold">
                Q. What region do you plan to study in? (UK / US / Europe / Asia
                / Other)
              </h5>
              <div className="flex items-center justify-center xl:mt-6.5 lg:mt-5 md:mt-4 mt-3">
                <div className="flex flex-col w-full gap-3">
                  {options.map((option) => (
                    <label
                      key={option.id}
                      htmlFor={option.id}
                      className={`
              flex items-center p-4 rounded-lg border cursor-pointer
              transition-all duration-200 ease-in-out
              ${
                selectedOption === option.id
                  ? "border-transparent bg-[#F1F5F9]"
                  : "border-1 border-[#D4D4D8] bg-white"
              }
            `}
                    >
                      <input
                        type="radio"
                        id={option.id}
                        name="form-option"
                        value={option.id}
                        checked={selectedOption === option.id}
                        onChange={handleOptionChange}
                        className="hidden"
                      />

                      <div
                        className={`
                w-4 h-4 rounded-full border-1 flex items-center justify-center mr-3
                ${
                  selectedOption === option.id
                    ? "border-[#6C8E69] bg-[#6C8E69] "
                    : "border-[#000000] bg-white"
                }
              `}
                      >
                        {selectedOption === option.id && (
                          <div className="w-4 h-4 rounded-full bg-[#6C8E69]"></div>
                        )}
                      </div>

                      <span className="text-black select-none">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-3 xl:mt-7.5 lg:mt-6 md:mt-5 mt-4">
                <div className="flex group">
                  <Link
                    href="#"
                    className="btn btn-lg btn-secondary font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
                    group-hover:hover:translate-y-[2px]!"
                  >
                    Go BAck
                  </Link>
                </div>
                <div className="flex group">
                  <Link
                    href="#"
                    className="btn btn-lg btn-primary font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
                    group-hover:hover:translate-y-[2px]!"
                  >
                    Confirm
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full mt-10">
              <div className="inline text-center w-[80%] md:w-[60%] lg:w-[40%]">
                <div className="flex justify-center group">
                  <Link
                    href="#"
                    className="btn w-full! btn-lg btn-primary font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
                    group-hover:hover:translate-y-[2px]!"
                  >
                    Book a free consultation
                  </Link>
                </div>
                <p className="mt-8 text-black">
                  &quot;Book a free consultation&quot; or &quot;See matching
                  program + funding roadmap&quot;.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE-SECTION */}
      <section className="price-section">
        <div className="price-wrapper py-120">
          <div className="container mx-auto px-fixed-20 relative">
            <Image
              src={"/images/Vector-box.png"}
              width={86}
              height={86}
              alt="Vector-box"
              unoptimized={true}
              className="absolute left-[20] sm:left-[30px] lg:left-[75px] top-[5] sm:top-[20] lg:top-[-16px] xl:top-[-86px] -z-10 w-[45px]! lg:w-[66px]!"
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
              <h2 className="text-center justify-center font-the-bold leading-[100%]">
                PRICING <span className="text-brown">PLANS</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-5 lg:gap-4 gap-3 xl:mt-12.5 lg:mt-9 md:mt-7 mt-5">
              <div className="bg-white price-box price-box-padding rounded-[16px] hover:bg-[#6C8E69] group transition duration-300 ease-in-out">
                <div className="inline-block bg-dark-green rounded-[70px] px-[23px] py-[6px] group-hover:bg-white!">
                  <span className="font-segoeUi font-semibold text-white group-hover:text-black">
                    Basic
                  </span>
                </div>
                <p className="fs-18 text-black group-hover:text-white leading-[145%] mt-7.5">
                  Get 100 headshots with 10 unique backdrops and outfits.
                </p>
                <hr className="mt-5 opacity-[0.4] group-hover:opacity-[0.5] group-hover:border-white" />
                <div className="flex flex-col gap-3 pt-3 md:pt-5">
                  <ul className="flex flex-col gap-3 pb-2">
                    {/* List Item 1 */}
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
                        2 hours turnaround time
                      </h5>
                    </li>

                    {/* List Item 2 */}
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
                        100 headshots
                      </h5>
                    </li>

                    {/* List Item 3 */}
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
                        Choice of 10 backdrops
                      </h5>
                    </li>

                    {/* List Item 4 */}
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
                        Choice of 10 outfits
                      </h5>
                    </li>

                    {/* List Item 5 */}
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
                        10 edit credits
                      </h5>
                    </li>
                  </ul>

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
                <p className="fs-18 text-black group-hover:text-white leading-[145%] mt-7.5">
                  Get 100 headshots with 10 unique backdrops and outfits.
                </p>
                <hr className="mt-5 opacity-[0.4] group-hover:opacity-[0.5] group-hover:border-white" />
                <div className="flex flex-col gap-3 pt-3 md:pt-5">
                  <ul className="flex flex-col gap-3 pb-2">
                    {/* List Item 1 */}
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
                        2 hours turnaround time
                      </h5>
                    </li>

                    {/* List Item 2 */}
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
                        100 headshots
                      </h5>
                    </li>

                    {/* List Item 3 */}
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
                        Choice of 10 backdrops
                      </h5>
                    </li>

                    {/* List Item 4 */}
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
                        Choice of 10 outfits
                      </h5>
                    </li>

                    {/* List Item 5 */}
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
                        10 edit credits
                      </h5>
                    </li>
                  </ul>

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
                <p className="fs-18 text-black group-hover:text-white leading-[145%] mt-7.5">
                  Get 100 headshots with 10 unique backdrops and outfits.
                </p>
                <hr className="mt-5 opacity-[0.4] group-hover:opacity-[0.5] group-hover:border-white" />
                <div className="flex flex-col gap-3 pt-3 md:pt-5">
                  <ul className="flex flex-col gap-3 pb-2">
                    {/* List Item 1 */}
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
                        2 hours turnaround time
                      </h5>
                    </li>

                    {/* List Item 2 */}
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
                        100 headshots
                      </h5>
                    </li>

                    {/* List Item 3 */}
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
                        Choice of 10 backdrops
                      </h5>
                    </li>

                    {/* List Item 4 */}
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
                        Choice of 10 outfits
                      </h5>
                    </li>

                    {/* List Item 5 */}
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
                        10 edit credits
                      </h5>
                    </li>
                  </ul>

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
          className="absolute -z-10 left-0 right-auto top-[30px] lg:top-[0px] w-[50px]! lg:w-[66px]!"
        />
        <div className="faqs-wrapper px-fixed-20">
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
              <h2 className="text-center uppercase justify-center font-the-bold leading-[100%]">
                Frequently <span className="text-brown">asked </span>questions
              </h2>
            </div>

            <div className="flex flex-col mt-50 xl:gap-5 lg:gap-4 gap-3">
              {/* FAQ Item 1 */}
              <div className="faq-drawer p-24 rounded-[12px] group transition-colors duration-300">
                <input
                  // 1. Add 'peer' class and 'hidden' (optional, but good practice)
                  className="faq-drawer__trigger peer hidden"
                  id="faq-drawer-1" // IMPORTANT: Use unique IDs for each input
                  type="checkbox"
                />
                <label
                  // 2. Remove 'group-hover:' and replace with 'peer-checked:'
                  className="faq-drawer__title fs-18 font-the-bold peer-checked:text-white transition-colors duration-300"
                  htmlFor="faq-drawer-1"
                >
                  Q: Can you help with US applications / non-UK?{" "}
                </label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="mt-5 peer-checked:text-white transition-colors duration-300">
                      Our A Plus talent goes through a no joke vetting process.
                      Only the top 1 percent make it through. Once we have got
                      three rockstars, we will line up interviews so you can
                      pick your fave—easy peasy.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="faq-drawer p-24 rounded-[12px] group transition-colors duration-300">
                <input
                  className="faq-drawer__trigger peer hidden"
                  id="faq-drawer-2"
                  type="checkbox"
                />
                <label
                  className="faq-drawer__title fs-18 font-the-bold peer-checked:text-white transition-colors duration-300"
                  htmlFor="faq-drawer-2"
                >
                  Q: Can you help with US applications / non-UK?
                </label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="mt-5 peer-checked:text-white transition-colors duration-300">
                      Our A Plus talent goes through a no joke vetting process.
                      Only the top 1 percent make it through. Once we have got
                      three rockstars, we will line up interviews so you can
                      pick your fave—easy peasy.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="faq-drawer p-24 rounded-[12px] group transition-colors duration-300">
                <input
                  className="faq-drawer__trigger peer hidden"
                  id="faq-drawer-3"
                  type="checkbox"
                />
                <label
                  className="faq-drawer__title fs-18 font-the-bold peer-checked:text-white transition-colors duration-300"
                  htmlFor="faq-drawer-3"
                >
                  Q: What’s your refund or guarantee policy?
                </label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="mt-5 peer-checked:text-white transition-colors duration-300">
                      Our A Plus talent goes through a no joke vetting process.
                      Only the top 1 percent make it through. Once we have got
                      three rockstars, we will line up interviews so you can
                      pick your fave—easy peasy.
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="faq-drawer p-24 rounded-[12px] group transition-colors duration-300">
                <input
                  className="faq-drawer__trigger peer hidden"
                  id="faq-drawer-4"
                  type="checkbox"
                />
                <label
                  className="faq-drawer__title fs-18 font-the-bold peer-checked:text-white transition-colors duration-300"
                  htmlFor="faq-drawer-4"
                >
                  Q: How soon should I start?
                </label>
                <div className="faq-drawer__content-wrapper">
                  <div className="faq-drawer__content">
                    <p className="mt-5 peer-checked:text-white transition-colors duration-300">
                      Our A Plus talent goes through a no joke vetting process.
                      Only the top 1 percent make it through. Once we have got
                      three rockstars, we will line up interviews so you can
                      pick your fave—easy peasy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT-SECTION */}
      <section className="contact-section px-fixed-20 relative">
        <Image
          src={"/images/flower.png"}
          width={86}
          height={86}
          alt="flower"
          unoptimized={true}
          className="absolute -z-10 left-auto right-0 xl:top-[50%] top-[2%] transform xl:-translate-y-50% -translate-y-[2%] w-[45px]! lg:w-[60px]!"
        />
        <div className="contact-section-wrapper py-120">
          <div className="container mx-auto p-70 bg-white rounded-[16px]">
            <div className="flex flex-col md:flex-row xl:gap-5 lg:gap-4 md:gap-3 gap-7.5">
              <div className="flex flex-col w-full md:w-[55%]">
                <h2 className="font-the-bold text-black leading-[100%]">
                  Ready to Launch Your Global Grad Journey?
                </h2>
                <div className="flex flex-col md:flex-row text-center gap-3 xl:mt-10 lg:mt-8 md:mt-6 mt-5 relative">
                  <div className="flex group w-full sm:w-auto">
                    <Link
                      href="#"
                      className="btn btn-transparent shadow-[0_4px_0_0_#1e1e1e] font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! w-full
            group-hover:hover:translate-y-[2px]!"
                    >
                      Take the Quiz Now
                    </Link>
                  </div>

                  <div className="flex group w-full sm:w-auto">
                    <Link
                      href="#"
                      className="btn btn-transparent font-semibold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! w-full
            group-hover:hover:translate-y-[2px]!"
                    >
                      Schedule a Free Call
                    </Link>
                  </div>
                </div>
                <p className="fs-12 mt-4 text-black">
                  (Optional small print: &quot;Spots are limited. 2026 intake
                  applications open now.&quot;)
                </p>
              </div>
              <div className="flex flex-col w-full md:w-[45%]">
                <form className="">
                  <div className="flex flex-col xl:gap-5 lg:gap-4 gap-3">
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
                  <div className="xl:mt-6 lg:mt-5 mt-4 flex">
                    <div className="flex group">
                      <Link
                        href="#"
                        className="btn btn-md btn-transparent shadow-[0_4px_0_0_#1e1e1e] font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
                    group-hover:hover:translate-y-[2px]!"
                      >
                        SUBMIT
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER-SECTION */}
      <footer className="footer-section">
        <div className="footer-wrapper px-fixed-20">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-3">
              <div className="flex w-full lg:w-[30%]">
                <div className="flex flex-col w-[90%] xl:w-[80%]">
                  <div className="logo-wrapper cursor-pointer">
                    <Image
                      src={"/images/graduate-rout-logo.svg"}
                      width={151}
                      height={23}
                      alt="logo"
                      unoptimized={true}
                      className=""
                    />
                  </div>
                  <p className="font-medium text-light-gray mt-8">
                    Design amazing digital experiences that create more happy in
                    the world.
                  </p>
                </div>
              </div>
              <div className="flex w-full lg:w-[70%]">
                <div className="grid justify-between grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-3 auto-cols-max w-full">
                  {/* Column 1: Product */}
                  <div className="flex flex-col gap-3">
                    {/* Title/Heading remains a non-link element */}
                    <span className="font-bold pb-1 text-white">Product</span>
                    <Link href="#" className=" text-white">
                      Overview
                    </Link>
                    <Link href="#" className=" text-white">
                      Features
                    </Link>
                    <Link href="#" className=" text-white">
                      Solutions
                    </Link>
                    <Link href="#" className=" text-white">
                      Tutorials
                    </Link>
                    <Link href="#" className=" text-white">
                      Pricing
                    </Link>
                    <Link href="#" className=" text-white">
                      Releases
                    </Link>
                  </div>

                  {/* Column 2: Company (Assuming) */}
                  <div className="flex flex-col gap-3">
                    <span className="font-bold pb-1 text-white">Product</span>
                    <Link href="#" className=" text-white">
                      About us
                    </Link>
                    <Link href="#" className=" text-white">
                      Careers
                    </Link>
                    <Link href="#" className=" text-white">
                      Press
                    </Link>
                    <Link href="#" className=" text-white">
                      News
                    </Link>
                    <Link href="#" className=" text-white">
                      Media kit
                    </Link>
                    <Link href="#" className=" text-white">
                      Contact
                    </Link>
                  </div>

                  {/* Column 3: Resources (Assuming) */}
                  <div className="flex flex-col gap-3">
                    <span className="font-bold pb-1 text-white">Product</span>
                    <Link href="#" className=" text-white">
                      Blogs
                    </Link>
                    <Link href="#" className=" text-white">
                      Newsletter
                    </Link>
                    <Link href="#" className=" text-white">
                      Events
                    </Link>
                    <Link href="#" className=" text-white">
                      Help Center
                    </Link>
                    <Link href="#" className=" text-white">
                      Tutorials
                    </Link>
                    <Link href="#" className=" text-white">
                      Support
                    </Link>
                  </div>

                  {/* Column 4: Social/Community (Assuming) */}
                  <div className="flex flex-col gap-3">
                    <span className="font-bold pb-1 text-white">Product</span>
                    <Link href="#" className=" text-white">
                      Twitter
                    </Link>
                    <Link href="#" className=" text-white">
                      LinkedIn
                    </Link>
                    <Link href="#" className=" text-white">
                      FaceBook
                    </Link>
                    <Link href="#" className=" text-white">
                      GitHub
                    </Link>
                    <Link href="#" className=" text-white">
                      AngelList
                    </Link>
                    <Link href="#" className=" text-white">
                      Dribble
                    </Link>
                  </div>

                  {/* Column 5: Legal (Assuming) */}
                  <div className="flex flex-col gap-3">
                    <span className="font-bold pb-1 text-white">Product</span>
                    <Link href="#" className=" text-white">
                      Terms
                    </Link>
                    <Link href="#" className=" text-white">
                      Privacy
                    </Link>
                    <Link href="#" className=" text-white">
                      Cookies
                    </Link>
                    <Link href="#" className=" text-white">
                      Licenses
                    </Link>
                    <Link href="#" className=" text-white">
                      Settings
                    </Link>
                    <Link href="#" className=" text-white">
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="bottom-footer-wrapper px-fixed-20">
            <div className="container mx-auto">
              <div className="flex">
                <div className="flex flex-col lg:flex-row gap-6  lg:gap-5 items-center justify-between w-full py-48">
                  <div>
                    <p className="text-white">
                      © 2077 Untitled UI. All rights reserved.
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <Image
                      src={"/images/twitter.png"}
                      width={24}
                      height={24}
                      alt="twitter"
                      unoptimized={true}
                      className=""
                    />
                    <Image
                      src={"/images/linkedin.png"}
                      width={24}
                      height={24}
                      alt="linkedin"
                      unoptimized={true}
                      className=""
                    />
                    <Image
                      src={"/images/facebook.png"}
                      width={24}
                      height={24}
                      alt="facebook"
                      unoptimized={true}
                      className=""
                    />
                    <Image
                      src={"/images/github.png"}
                      width={24}
                      height={24}
                      alt="github"
                      unoptimized={true}
                      className=""
                    />
                    <Image
                      src={"/images/angellist.png"}
                      width={24}
                      height={24}
                      alt="angellist"
                      unoptimized={true}
                      className=""
                    />
                    <Image
                      src={"/images/dribble.png"}
                      width={24}
                      height={24}
                      alt="dribble"
                      unoptimized={true}
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}