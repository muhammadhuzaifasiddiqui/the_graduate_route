"use client";
import React from "react";
import Navbar from "../components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import StatisticsCounter from "../components/StatisticsCounter";
import Bullet from "../components/Bullet";
import ProcessCards from "../components/ProcessCard";
import Bullets from "../components/Bullets";
import Testimonials from "../components/Testimonial";
import Blogs from "../components/Blogs";
import Packages from "../components/Packages";

const faqData = [
  {
    id: 1,
    question: "Q: Do I need perfect grades to get scholarships?",
    answer:
      "Our A+ talent goes through a no-joke vetting process. Only the top 1% make it through. Once we’ve got three rockstars, we’ll line up interviews so you can pick your fave—easy peasy.",
  },
  {
    id: 2,
    question: "Q: Can you help with US applications / non-UK?",
    answer:
      "Our A+ talent goes through a no-joke vetting process. Only the top 1% make it through. Once we’ve got three rockstars, we’ll line up interviews so you can pick your fave—easy peasy.",
  },
  {
    id: 3,
    question: "Q: What’s your refund or guarantee policy?",
    answer:
      "Our A+ talent goes through a no-joke vetting process. Only the top 1% make it through. Once we’ve got three rockstars, we’ll line up interviews so you can pick your fave—easy peasy.",
  },
  {
    id: 4,
    question: "Q: How soon should I start?",
    answer:
      "Our A+ talent goes through a no-joke vetting process. Only the top 1% make it through. Once we’ve got three rockstars, we’ll line up interviews so you can pick your fave—easy peasy.",
  },
];

// Reusable Accordion Item component
const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  // Use a dynamic height for the answer to allow for responsive content length
  const contentRef = useRef(null);

  // Calculate max-height dynamically
  const contentHeight = isOpen
    ? contentRef.current
      ? contentRef.current.scrollHeight
      : 0
    : 0;

  // Lucide icon (ChevronDown) as inline SVG for compatibility
  const ChevronDown = ({ className }) => (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 9L12 15L18 9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    // PARENT DIV: Added transition-all duration-500 for smooth background color change
    <div
      className={`cursor-pointer overflow-hidden rounded-[12px] transition-all duration-500 ease-in-out
      ${isOpen ? "bg-[#6C8E69]" : "bg-white"}
      `}
    >
      <button
        onClick={onToggle}
        // Corrected py-[20] to py-[20px] for valid Tailwind class
        className={`cursor-pointer flex w-full justify-between items-center! leading-22 text-left faq-head
        `}
        aria-expanded={isOpen}
      >
        <p
          className={`cursor-pointer font-the-bold leading-22 fs-18
            ${isOpen ? "text-white" : "text-black"}
          `}
        >
          {question}
        </p>
        <ChevronDown
          className={`
            cursor-pointer leading-22 stroke-black transition-all duration-500
            ${isOpen ? "rotate-180 stroke-white" : "rotate-0"}
          `}
        />
      </button>

      {/* Content area: Added transition-all duration-500 for smooth max-height/collapse */}
      <div
        style={{ maxHeight: `${contentHeight}px` }}
        className="cursor-pointer  overflow-hidden transition-all duration-500 ease-in-out "
      >
        <p
          ref={contentRef}
          className={`
            cursor-pointer text-white leading-20 faq-bottom
            ${isOpen ? "opacity-100 pt-0" : "opacity-0 pt-0"}
          `}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const options = [
    { id: "option1", label: "Option 1" },
    { id: "option2", label: "Option 2" },
    { id: "option3", label: "Option 3" },
    { id: "option4", label: "Option 4" },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };
  const swiperRef = useRef(null);

  // State to manage the currently open accordion item's ID
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the accordion item
  const handleToggle = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <>
      <Navbar />

      {/* HERO-SECTION */}
      <section className="hero-section relative px-3 md:px-4 lg:px-5">
        <Image
          src={"/images/H3.png"}
          width={69}
          height={69}
          alt="H3"
          unoptimized={true}
          className="absolute -z-10 right-0 xl:top-[200px] lg:top-[120px] sm:top-[550px] top-[600px] w-[68px]! lg:w-[75px]!"
        />
        <div className="hero-wrapper">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center  gap-5">
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <Image
                    src={"/images/Group.png"}
                    width={36}
                    height={36}
                    alt="heading"
                    unoptimized={true}
                    className="absolute top-[-29px] right-0"
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
                <div className="flex flex-col md:flex-row text-center gap-3 mt-10 relative">
                  <Image
                    src={"/images/arrow-vector.png"}
                    width={60}
                    height={60}
                    alt="arrow-vector"
                    unoptimized={true}
                    className="absolute right-0 lg:top-[-55px] top-[-65px] -z-10"
                  />
                  <div className="flex group">
                    <Link
                      href="#"
                      className="btn-md btn-primary w-full md:w-auto font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
                      group-hover:hover:translate-y-[2px]! transition duration-300"
                    >
                      Take the Quiz → Find Your Path
                    </Link>
                  </div>

                  <div className="flex group">
                    <Link
                      href="#"
                      className="btn-md btn-lightgreen w-full md:w-auto font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E] group-hover:hover:shadow-[0_2px_0_0_#1E1E1E] 
                    group-hover:hover:translate-y-[2px] transition duration-300"
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
                  <div className="flex relative">
                    <div className="image-wrapper relative z-10">
                      <Image
                        src={"/images/avatar1.png"}
                        width={44}
                        height={44}
                        alt="avatar1"
                        unoptimized={true}
                        className="object-cover h-full! w-full!"
                      />
                    </div>
                    <div className="image-wrapper relative z-8 ml-[-15px]">
                      <Image
                        src={"/images/avatar2.png"}
                        width={44}
                        height={44}
                        alt="avatar2"
                        unoptimized={true}
                        className="object-cover h-full! w-full!"
                      />
                    </div>
                    <div className="image-wrapper relative z-6 ml-[-15px]">
                      <Image
                        src={"/images/avatar3.png"}
                        width={44}
                        height={44}
                        alt="avatar3"
                        unoptimized={true}
                        className="object-cover h-full! w-full!"
                      />
                    </div>
                    <div className="image-wrapper relative z-4 ml-[-15px]">
                      <Image
                        src={"/images/avatar4.png"}
                        width={44}
                        height={44}
                        alt="avatar4"
                        unoptimized={true}
                        className="object-cover h-full! w-full!"
                      />
                    </div>
                    <div className="image-wrapper relative z-2 ml-[-15px]">
                      <Image
                        src={"/images/avatar5.png"}
                        width={44}
                        height={44}
                        alt="avatar5"
                        unoptimized={true}
                        className="object-cover h-full! w-full!"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS-SECTION */}
      <section className="statistics-section px-3 md:px-4 lg:px-5 pt-120 relative">
        <Image
          src={"/images/edged-Shape.png"}
          width={85}
          height={85}
          alt="edged-Shape"
          unoptimized={true}
          className="absolute -z-10 right-0 xl:top-[55px] lg:top-[30px] md:top-[10px] top-[5] w-[85px]! lg:w-[100px]!"
        />
        <div className="container mx-auto">
          <div className="bg-white statistics-padding rounded-[20px]">
            <h3 className="font-the-bold text-center leading-[100%]">
              Our <span className="text-brown">Statistics</span>
            </h3>
            <div className="grid grid-flow-row mt-50 lg:grid-flow-col grid-cols-2 lg:grid-cols-4 justify-center lg:justify-between gap-5 lg:gap-4 xl:gap-15">
              <StatisticsCounter
                // This value (6.4) will show one decimal place.
                endCount={6.4}
                Million={true}
                suffix="+ "
                Title="USD"
                Para="Securing fully funded scholarships across five countries"
              />
              <StatisticsCounter
                // This value (900) will show zero decimal places.
                endCount={900}
                suffix="+ "
                Title="CLIENT"
                Para="One-on-one mentoring with personalized strategy and success"
              />
              <StatisticsCounter
                // This value (175) will show zero decimal places.
                endCount={175}
                suffix="+ "
                Title="SCHOLARSHIPS"
                Para="From Chevening to DAAD and Erasmus — our results speak for themselves."
              />
              <StatisticsCounter
                // This value (98) will show zero decimal places.
                endCount={98}
                suffix="% "
                Title="SATISFACTION"
                Para="Strategic, personalized impact trusted by 98% clients"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HELPING-SECTION */}
      <section className="helping-section px-3 md:px-4 lg:px-5 pt-120">
        <div className="container mx-auto">
          <Bullets bullets="WHAT WE DO" />
          <h2 className="font-the-bold leading-[100%]">
            What We <span className="text-brown mt-3">Help</span> You{" "}
            <span className="text-brown">Do</span>
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-7.5 lg:gap-5 mt-50">
            <div className="flex flex-col lg:gap-5 gap-4 w-full lg:w-1/2">
              <Bullet Para="Stand out among a competitive applicant pool" />
              <Bullet Para="Secure high-value scholarships & fellowships" />
              <Bullet Para="Craft essays, research proposals, and applications that highlight your unique impact" />
              <Bullet Para="Build a compelling narrative around your goals and mission" />
              <Bullet Para="Navigate admissions, interview prep, funding, and post-grad planning" />
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
      </section>

      {/* PROCESS-SECTION */}
      <section className="process-section px-3 md:px-4 lg:px-5 pt-120 relative">
        <Image
          src={"/images/excel.png"}
          width={125}
          height={124}
          alt="excel"
          unoptimized={true}
          className="absolute -z-10 left-0 xl:top-[80px] lg:top-[40px] top-[10px] w-[75px]! lg:w-[100px]!"
        />
        <div className="container mx-auto">
          <div className="bg-white process-box-padding rounded-[20px]">
            <div className="flex flex-col items-center gap-2 lg:gap-3">
              <Bullets bullets="PROCESS" />
              <h2 className="text-center justify-center font-the-bold leading-[100%]">
                HOW IT <span className="text-brown">WORKS</span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-5 lg:gap-4 gap-3 mt-50">
              <ProcessCards
                Title="Discovery & Profile Assessment"
                Para="We evaluate your background, goals, strengths & gaps."
              />
              <ProcessCards
                Title="Discovery & Profile Assessment"
                Para="We evaluate your background, goals, strengths & gaps."
              />
              <ProcessCards
                Title="Strategic Planning & Roadmap"
                Para="Together we design a timeline choice of programs, application components."
              />
              <ProcessCards
                Title="Interview & Scholarship Prep"
                Para="Mock interviews, funding pitch coaching, mindset support."
              />
              <ProcessCards
                Title="Decision & Next Steps"
                Para="You accept an offer, we help with visa, transitions, and visionary next steps."
              />

              <div className="flex flex-col p-25 py-15! justify-center items-center bg-dark-green rounded-[20px] gap-3">
                <div className="flex w-full group">
                  <Link
                    href="#"
                    className="btn-sm btn-primary w-full! font-bold font-the-bold text-center group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
                    group-hover:hover:translate-y-[2px]! transition duration-300"
                  >
                    Take the Quiz → Find Your Path
                  </Link>
                </div>

                <div className="flex w-full group">
                  <Link
                    href="#"
                    className="btn-sm btn-tertiary w-full! font-semibold text-center group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
             group-hover:hover:translate-y-[2px]! transition duration-300"
                  >
                    Book a Free consult
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL-SECTION */}
      <section className="testimonial-section px-3 md:px-4 lg:px-5 pt-120">
        <div className="container mx-auto">
          {/* Title and Header Area */}
          <Bullets bullets="SUCCESS STORIES" />
          {/* Header and Custom Navigation Buttons Container */}
          <div className="flex relative">
            <div className="w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
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
            <div className="hidden md:flex gap-2.5 absolute right-0 bottom-0 z-10">
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
                  className="w-[10px]! sm:w-[12px]! md:w-[14px] lg:w-[16px]"
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
                  className="w-[10px]! sm:w-[12px]! md:w-[14px] lg:w-[16px]"
                />
              </div>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="testimonial-slider-wrapper w-full xl:mt-12.5 lg:mt-9 md:mt-7 mt-5 overflow-hidden">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={12}
              slidesPerView={4}
              breakpoints={{
                1399.97: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1199.97: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                1023.97: {
                  slidesPerView: 3,
                  spaceBetween: 16,
                },
                767.97: {
                  slidesPerView: 2,
                  spaceBetween: 12,
                },
                575.97: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                399.97: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
                319.97: {
                  slidesPerView: 1,
                  spaceBetween: 12,
                },
              }}
            >
              <SwiperSlide>
                <Testimonials
                  imgSrc="/images/testimonial-clara.png"
                  Para="The Graduate Route transformed my scholarship application process. Their personalized guidance and expert insights helped me secure a fully-funded scholarship to my dream university. I couldn't have done it without them!"
                  ClinetName="Clara"
                  ClientPaltform="Spotify"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonials
                  imgSrc="/images/testimonial-james.png"
                  Para="The Graduate Route transformed my scholarship application process. Their personalized guidance and expert insights helped me secure a fully-funded scholarship to my dream university. I couldn't have done it without them!"
                  ClinetName="James"
                  ClientPaltform="Spotify"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonials
                  imgSrc="/images/testimonial-jessi.png"
                  Para="The Graduate Route transformed my scholarship application process. Their personalized guidance and expert insights helped me secure a fully-funded scholarship to my dream university. I couldn't have done it without them!"
                  ClinetName="Jessi"
                  ClientPaltform="Spotify"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonials
                  imgSrc="/images/testimonial-clara.png"
                  Para="The Graduate Route transformed my scholarship application process. Their personalized guidance and expert insights helped me secure a fully-funded scholarship to my dream university. I couldn't have done it without them!"
                  ClinetName="Clara"
                  ClientPaltform="Spotify"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonials
                  imgSrc="/images/testimonial-james.png"
                  Para="The Graduate Route transformed my scholarship application process. Their personalized guidance and expert insights helped me secure a fully-funded scholarship to my dream university. I couldn't have done it without them!"
                  ClinetName="James"
                  ClientPaltform="Spotify"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Testimonials
                  imgSrc="/images/testimonial-jessi.png"
                  Para="The Graduate Route transformed my scholarship application process. Their personalized guidance and expert insights helped me secure a fully-funded scholarship to my dream university. I couldn't have done it without them!"
                  ClinetName="Jessi"
                  ClientPaltform="Spotify"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Navigation Buttons - Added z-10 and cursor-pointer */}
          <div className="flex justify-center md:hidden gap-2.5 mt-50">
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
                className="w-[10px]! sm:w-[12px]! md:w-[14px] lg:w-[16px]"
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
                className="w-[10px]! sm:w-[12px]! md:w-[14px] lg:w-[16px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM-SECTION */}
      <section className="instagram-section pt-120">
        <div className="flex justify-center">
          <h2 className="text-center font-the-bold leading-[100%]">
            INSTAGRAM <span className="text-brown">FEED</span>
          </h2>
        </div>
        <div className="instagram-wrapper relative">
          <Image
            src={"/images/bottom-Ellipse.png"}
            width={125}
            height={124}
            alt="bottom-Ellipse"
            unoptimized={true}
            className="w-full! absolute top-[-10px] z-2 transform rotate-180"
          />
          <div className="flex gap-2.5 bg-black mt-50 relative">
            <Image
              src={"/images/insta_icon.png"}
              width={125}
              height={124}
              alt="bottom-Ellipse"
              unoptimized={true}
              className="absolute left-[50%] top-[50%] translate-[-50%]"
            />
            <div className="flex image-wrapper">
              <Image
                src={"/images/insta1.png"}
                width={125}
                height={124}
                alt="insta1"
                unoptimized={true}
                className="object-cover"
              />
            </div>
            <div className="flex image-wrapper">
              <Image
                src={"/images/insta2.png"}
                width={125}
                height={124}
                alt="insta2"
                unoptimized={true}
                className="object-cover"
              />
            </div>
            <div className="flex image-wrapper">
              <Image
                src={"/images/insta3.png"}
                width={125}
                height={124}
                alt="insta3"
                unoptimized={true}
                className="object-cover"
              />
            </div>
            <div className="flex image-wrapper">
              <Image
                src={"/images/insta4.png"}
                width={125}
                height={124}
                alt="insta4"
                unoptimized={true}
                className="object-cover"
              />
            </div>
            <div className="flex image-wrapper">
              <Image
                src={"/images/insta1.png"}
                width={125}
                height={124}
                alt="insta1"
                unoptimized={true}
                className="object-cover"
              />
            </div>
            <div className="flex image-wrapper">
              <Image
                src={"/images/insta1.png"}
                width={125}
                height={124}
                alt="insta1"
                unoptimized={true}
                className="object-cover"
              />
            </div>
          </div>
          <Image
            src={"/images/bottom-Ellipse.png"}
            width={125}
            height={124}
            alt="bottom-Ellipse"
            unoptimized={true}
            className="w-full! absolute bottom-0 z-2"
          />
        </div>
      </section>

      {/* BLOG-SECTION */}
      <section className="blog-section pt-120 px-3 md:px-4 lg:px-5 relative">
        <Image
          src={"/images/flower.png"}
          width={114}
          height={120}
          alt="flower"
          unoptimized={true}
          className="absolute z-10 right-0 w-[45px]! lg:w-[60px]!"
        />
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-3">
            <Bullets bullets="BLOGS" />
            <h2 className="text-center justify-center font-the-bold leading-[100%]">
              OUR <span className="text-brown">BLOGS</span>
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-5 lg:gap-4 gap-3 mt-50">
            <Blogs
              imgSrc="/images/Rectangle.png"
              imgAlt="Rectangle"
              title="Lorem ipsum dolor amet consectetur adipiscing justo sit amet"
              para="Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry."
              date="15 Sep, 2023"
            />
            <Blogs
              imgSrc="/images/Rectangle.png"
              imgAlt="Rectangle"
              title="Lorem ipsum dolor amet consectetur adipiscing justo sit amet"
              para="Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry."
              date="15 Sep, 2023"
            />
            <Blogs
              imgSrc="/images/Rectangle.png"
              imgAlt="Rectangle"
              title="Lorem ipsum dolor amet consectetur adipiscing justo sit amet"
              para="Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry."
              date="15 Sep, 2023"
            />
          </div>

          <div className="flex justify-center mt-50">
            <div className="flex group">
              <Link
                className="btn-xsm btn-primary font-segoeUi group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! group-hover:hover:translate-y-[2px]! transition duration-300"
                href="#"
              >
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TAKE-THE-QUIZ-SECTION */}
      <section className="take-the-quiz-section pt-120 px-3 md:px-4 lg:px-5 relative">
        <Image
          src={"/images/sharp-shape.png"}
          width={114}
          height={120}
          alt="sharp-shape"
          unoptimized={true}
          className="absolute -z-10 left-auto right-0 lg:top-[15%] top-[18%] transform lg:-translate-y-15% -translate-y-18% w-[90px]! lg:w-[110px]!"
        />
        <div className="container max-w-[100%] md:max-w-[90%] xl:max-w-[70%] mx-auto">
          <div className="flex justify-center">
            <div className="flex flex-col items-center max-w-[100%] sm:max-w-[90%] md:max-w-[75%] xl:max-w-[55%] gap-3">
              <Bullets bullets="Take the Quiz" />
              <h2 className="text-center justify-center font-the-bold leading-[100%]">
                What’s Your Ideal <span className="text-brown">Graduate</span>{" "}
                Route?
              </h2>
              <p className="text-center text-black fs-18">
                Answer 5 quick questions so we can pinpoint which route &
                support package fits you best — and show how to amplify your
                chances for admission and funding.
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-50 rounded-[12px] bg-white p-25">
            <h5 className="font-the-bold">
              Q. What region do you plan to study in? (UK / US / Europe / Asia /
              Other)
            </h5>
            <div className="flex items-center justify-center xl:mt-6.5 lg:mt-5 md:mt-4 mt-3">
              <div className="flex flex-col w-full gap-3">
                {options.map((option) => (
                  <label
                    key={option.id}
                    htmlFor={option.id}
                    className={`
          flex items-center px-4 py-3 rounded-lg border cursor-pointer
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
            w-4 h-4 rounded-full border-1 flex items-center justify-center mr-3.5 transition-colors duration-200
            ${
              selectedOption === option.id
                ? "border-[#6C8E69] bg-white"
                : "border-[#000000] bg-white"
            }
          `}
                    >
                      {selectedOption === option.id && (
                        <div className="w-2 h-2 rounded-full bg-[#6C8E69]"></div>
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
                  className="btn-lg btn-primary font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
                    group-hover:hover:translate-y-[2px]! transition duration-300"
                >
                  Go BAck
                </Link>
              </div>
              <div className="flex group">
                <Link
                  href="#"
                  className="btn-lg btn-lightgreen font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
                    group-hover:hover:translate-y-[2px]! transition duration-300"
                >
                  Confirm
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-full mt-13">
            <div className="text-center group max-w-[80%] sm:max-w-[60%] lg:max-w-[40%] mx-auto">
              <Link
                href="#"
                className="btn-xl btn-primary w-full! font-segoeUi group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! 
             group-hover:hover:translate-y-[2px]! transition duration-300"
              >
                Book a free consultation
              </Link>
              <p className="mt-7 text-black">
                &quot;Book a free consultation&quot; or &quot;See matching
                program + funding roadmap&quot;.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICE-SECTION */}
      <section className="price-section pt-120 px-3 md:px-4 lg:px-5">
        <div className="container mx-auto relative">
          <Image
            src={"/images/Vector-box.png"}
            width={86}
            height={86}
            alt="Vector-box"
            unoptimized={true}
            className="absolute left-[20] sm:left-[30px] lg:left-[75px] top-[5] sm:top-[20] lg:top-[-16px] xl:top-[-86px] -z-10 w-[45px]! lg:w-[66px]!"
          />
          <div className="flex flex-col items-center gap-3">
            <Bullets bullets="PACKAGES" />
            <h2 className="text-center justify-center font-the-bold leading-[100%]">
              PRICING <span className="text-brown">PLANS</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-5 lg:gap-4 gap-3 xl:mt-12.5 lg:mt-9 md:mt-7 mt-5">
            <Packages
              packageTitle="Basic"
              Para="Get 100 headshots with 10 unique backdrops and outfits."
              liTitle1="2 hours turnaround time"
              liTitle2="100 headshots"
              liTitle3="Choice of 10 backdrops"
              liTitle4="Choice of 10 outfits"
              liTitle5="10 edit credits"
              btnText="GET IN TOUCH"
            />
            <Packages
              packageTitle="Professional"
              Para="Get 100 headshots with 10 unique backdrops and outfits."
              liTitle1="2 hours turnaround time"
              liTitle2="100 headshots"
              liTitle3="Choice of 10 backdrops"
              liTitle4="Choice of 10 outfits"
              liTitle5="10 edit credits"
              btnText="GET IN TOUCH"
            />
            <Packages
              packageTitle="Executive"
              Para="Get 100 headshots with 10 unique backdrops and outfits."
              liTitle1="2 hours turnaround time"
              liTitle2="100 headshots"
              liTitle3="Choice of 10 backdrops"
              liTitle4="Choice of 10 outfits"
              liTitle5="10 edit credits"
              btnText="GET IN TOUCH"
            />
          </div>
        </div>
      </section>

      {/* FAQS-SECTION */}
      <section className="faqs-section px-3 md:px-4 lg:px-5 pt-120 relative">
        <Image
          src={"/images/Shape-shape.png"}
          width={86}
          height={86}
          alt="Shape-shape"
          unoptimized={true}
          className="absolute -z-10 left-0 right-auto top-[30px] lg:top-[0px] w-[50px]! lg:w-[66px]!"
        />
        <div className="container max-w-[100%] md:max-w-[90%] xl:max-w-[70%] mx-auto">
          <div className="flex flex-col items-center gap-3">
            <Bullets bullets="FAQS" />
            <h2 className="text-center uppercase justify-center font-the-bold leading-[100%]">
              Frequently <span className="text-brown">asked </span>questions
            </h2>
          </div>

          <div className="flex flex-col xl:gap-5 lg:gap-4 gap-3 mt-50">
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={item.id === activeIndex}
                onToggle={() => handleToggle(item.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT-SECTION */}
      <section className="contact-section pt-120 px-3 md:px-4 lg:px-5 relative">
        <Image
          src={"/images/flower.png"}
          width={86}
          height={86}
          alt="flower"
          unoptimized={true}
          className="absolute -z-10 left-auto right-0 xl:top-[50%] top-[2%] transform xl:-translate-y-50% -translate-y-[2%] w-[45px]! lg:w-[60px]!"
        />
        <div className="container mx-auto p-70 bg-white rounded-[16px]">
          <div className="flex flex-col lg:flex-row xl:gap-5 lg:gap-4 md:gap-3 gap-7.5">
            <div className="flex flex-col w-full lg:w-[55%]">
              <h2 className="font-the-bold text-black leading-[100%]">
                Ready to Launch Your Global Grad Journey?
              </h2>
              <div className="flex flex-col sm:flex-row text-center gap-3 xl:mt-10 lg:mt-8 md:mt-6 mt-5 relative">
                <div className="flex group w-full sm:w-auto">
                  <Link
                    href="#"
                    className="btn-md btn-transparent shadow-[0_4px_0_0_#1e1e1e] font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! w-full
                    group-hover:hover:translate-y-[2px]! transition duration-300"
                  >
                    Take the Quiz Now
                  </Link>
                </div>

                <div className="flex group w-full sm:w-auto">
                  <Link
                    href="#"
                    className="btn-md btn-transparent font-semibold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]! w-full
                    group-hover:hover:translate-y-[2px]!
                    transition-all duration-300"
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
            <div className="flex flex-col w-full lg:w-[45%]">
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
                      className="btn-xsm btn-transparent shadow-[0_4px_0_0_#1e1e1e] font-the-bold group-hover:shadow-[0_4px_0_0_#1E1E1E]! group-hover:hover:shadow-[0_2px_0_0_#1E1E1E]!
                      group-hover:hover:translate-y-[2px]!
                      transition-all duration-300"
                    >
                      SUBMIT
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER-SECTION */}
      <footer className="footer-section pt-120">
        <div className="footer-wrapper px-3 md:px-4 lg:px-5">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-3">
              <div className="flex w-full lg:w-[30%]">
                <div className="flex flex-col w-[75%] sm:w-[55%] md:w-[35%]  lg:w-[90%]">
                  <div className="logo-wrapper cursor-pointer">
                    <Image
                      src={"/images/graduate-rout-logo.svg"}
                      width={151}
                      height={23}
                      alt="logo"
                      unoptimized={true}
                      className="object-cover"
                    />
                  </div>
                  <p className="font-medium text-light-gray mt-8 leading-24">
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
                    <span className="font-bold pb-1 text-white cursor-pointer">
                      Product
                    </span>
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
                    <span className="font-bold pb-1 text-white cursor-pointer">
                      Product
                    </span>
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
                    <span className="font-bold pb-1 text-white cursor-pointer">
                      Product
                    </span>
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
                    <span className="font-bold pb-1 text-white cursor-pointer">
                      Product
                    </span>
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
                    <span className="font-bold pb-1 text-white cursor-pointer">
                      Product
                    </span>
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
          <div className="bottom-footer-wrapper px-5">
            <div className="container mx-auto">
              <div className="flex">
                <div className="flex flex-col lg:flex-row gap-6  lg:gap-5 items-center justify-between w-full py-48">
                  <div>
                    <p className="text-white">
                      © 2077 Untitled UI. All rights reserved.
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="image-wrapper">
                      <Image
                        src={"/images/twitter.png"}
                        width={24}
                        height={24}
                        alt="twitter"
                        unoptimized={true}
                        className="object-cover cursor-pointer"
                      />
                    </div>

                    <div className="image-wrapper">
                      <Image
                        src={"/images/linkedin.png"}
                        width={24}
                        height={24}
                        alt="linkedin"
                        unoptimized={true}
                        className="object-cover cursor-pointer"
                      />
                    </div>

                    <div className="image-wrapper">
                      <Image
                        src={"/images/facebook.png"}
                        width={24}
                        height={24}
                        alt="facebook"
                        unoptimized={true}
                        className="object-cover cursor-pointer"
                      />
                    </div>

                    <div className="image-wrapper">
                      <Image
                        src={"/images/github.png"}
                        width={24}
                        height={24}
                        alt="github"
                        unoptimized={true}
                        className="object-cover cursor-pointer"
                      />
                    </div>

                    <div className="image-wrapper">
                      <Image
                        src={"/images/angellist.png"}
                        width={24}
                        height={24}
                        alt="angellist"
                        unoptimized={true}
                        className="object-cover cursor-pointer"
                      />
                    </div>

                    <div className="image-wrapper">
                      <Image
                        src={"/images/dribble.png"}
                        width={24}
                        height={24}
                        alt="dribble"
                        unoptimized={true}
                        className="object-cover cursor-pointer"
                      />
                    </div>
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