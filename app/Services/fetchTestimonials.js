export const fetchTestimonials = async () => {
  try {
    // 👇 Added ?_embed to the end
    const res = await fetch(
      "https://api-the-graduate-route.wasmer.app/wp-json/wp/v2/testimonial?_embed"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch testimonials");
    }

    const response = await res.json();
    return response;
  } catch (error) {
    console.log("check error in testimonials api:", error.message);
    throw error;
  }
};
