export const fetchServices = async () => {
  try {
    const res = await fetch(
      "https://api-bioflexaesthetics.wasmer.app/wp-json/wp/v2/services?_embed&per_page=23"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch services");
    }

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("check error in services api:", error.message);
  }
};

"use client";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import { fetchServices } from "@/services/servicesapi";
import { useQuery } from "@tanstack/react-query";

const ServiceSection = ({ initialData }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: fetchServices,
    initialData,
    onError: (error) => {
      console.log("error", error);
    },
    onSuccess: (data) => {
      console.log("reactquery error:", data);
    },
  });

  if (isLoading) return <p>Loading services...</p>;
  if (isError) return <p>Failed to load services.</p>;
  return (
    <section className="service-section pt-80 px-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-10  mb-50">
          <div className="w-full lg:w-2/4">
            <h2 className="mb-5 sm:mb-8 lg:mb-10">
              <span className="italic text-primary">Effective</span>, Gentle, &
              Science-Back <span className="italic text-primary">Skincare</span>
            </h2>

            <div>
              <Image
                src="/images/Sparkle Line.png"
                alt="Sparkle Line"
                width={298}
                height={60}
              />
            </div>
          </div>

          <div className="w-full lg:w-2/4">
            <p className="mb-6 md:mb-8 lg:mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, suscipit! Tenetur placeat porro in vel! Eveniet sequi
              repellat ut quidem? Sapiente quisquam quo, minus ea ex nesciunt?
              Quos, neque deleniti! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Tempora suscipit porro exercitationem repellat
              nemo voluptate quaerat aspernatur molestias beatae cum nam quas,
              deleniti illo dolorum enim saepe omnis deserunt ipsam.
            </p>

            <button className="btn btn-primary"> View All Services</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item, index) => (
            <ServiceCard
              key={index}
              Title={item.title.rendered}
              Dec={item.excerpt.rendered}
              img={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
              tags={item._embedded?.["wp:term"]?.[1] || []}
            />
          ))}

          <Link
            className="service-card group flex flex-col justify-between transition-all duration-30 cursor-pointer"
            href=""
          >
            <div className="service-card-body">
              <div className="img-wrapper">
                <div className="absolute top-0 inset-0 p-3 xl:p-5 z-20 flex flex-col justify-between items-start">
                  <button className="btn-float ms-auto p-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      className="stroke-[#911E3D] group-hover:stroke-white"
                    >
                      <path
                        d="M7.82715 7.3855L21.3339 7.38555L21.3339 20.8923"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.3331 7.3857L6.96582 21.7529"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="w-full flex flex-wrap gap-1 ">
                    <div className="tags">
                      <span>3 session</span>
                    </div>
                    <div className="tags">
                      <span>1 session per month</span>
                    </div>
                    <div className="tags">
                      <span>Price start from 12000pkr </span>
                    </div>
                  </div>
                </div>

                <Image
                  src="/images/service2.jpg"
                  alt="Exosome Therapy"
                  width={400}
                  height={500}
                  className="w-full! h-full! object-cover transition-transform duration-500 group-hover:scale-110 z-0"
                />
              </div>

              <div>
                <h5>Lorem Ispum</h5>
                <p className="line-clamp-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Saepe perspiciatis beatae id at suscipit nemo quos.
                </p>
              </div>
            </div>
          </Link>

          <Link
            className="service-card group flex flex-col justify-between transition-all duration-30 cursor-pointer"
            href=""
          >
            <div className="service-card-body">
              <div className="img-wrapper">
                <div className="absolute top-0 inset-0 p-3 xl:p-5 z-20 flex flex-col justify-between items-start">
                  <button className="btn-float ms-auto p-2 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      className="stroke-[#911E3D] group-hover:stroke-white"
                    >
                      <path
                        d="M7.82715 7.3855L21.3339 7.38555L21.3339 20.8923"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.3331 7.3857L6.96582 21.7529"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="w-full flex flex-wrap gap-1 ">
                    <div className="tags">
                      <span>3 session</span>
                    </div>
                    <div className="tags">
                      <span>1 session per month</span>
                    </div>
                    <div className="tags">
                      <span>Price start from 12000pkr </span>
                    </div>
                  </div>
                </div>

                <Image
                  src="/images/service1.jpg"
                  alt="Exosome Therapy"
                  width={400}
                  height={500}
                  className="w-full! h-full! object-cover transition-transform duration-500 group-hover:scale-110 z-0"
                />
              </div>

              <div>
                <h5>Lorem Ispum</h5>
                <p className="line-clamp-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Saepe perspiciatis beatae id at suscipit nemo quos.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
