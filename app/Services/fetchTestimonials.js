export const fetchTestimonials = async () => {
  try {
    const res = await fetch(
      "https://api-the-graduate-route.wasmer.app/wp-json/wp/v2/testimonial"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch testimonials");
    }

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("check error in testimonials api:", error.message);
  }
};
