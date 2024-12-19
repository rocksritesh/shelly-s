import React from "react";
import "./Homepage.css";

const HomePage = () => {
  const services = [
    {
      id: 1,
      title: "Hair Styling",
      description:
        "Transform your hair with our premium hair care treatments, tailored to nourish, repair, and rejuvenate every strand.",
      image:
        "https://static.skillshare.com/cdn-cgi/image/quality=85,width=1242,height=839,format=auto/uploads/project/406818/cover_1242_473a99024523390ed42ade60a2ab062d.jpg", // Replace with your image URL
    },
    {
      id: 2,
      title: "Facial Treatments",
      description:
        "Glow from within with our rejuvenating facial treatments that hydrate, refresh, and revitalize your skin.",
      image: "https://fuchsiaspa.com/wp-content/uploads/Facials_Spa-01.jpg", // Replace with your image URL
    },
    {
      id: 3,
      title: "Manicure & Pedicure",
      description:
        "Indulge in a luxurious manicure and pedicure experience that leaves your hands and feet looking beautiful and feeling pampered.",
      image:
        "https://theclan.in/wp-content/uploads/2022/11/Manicure-Pedicure-in-Bangalore-1024x576.jpg", // Replace with your image URL
    },
    {
      id: 4,
      title: "Makeup",
      description:
        "Enhance your natural beauty with our professional makeup services, from flawless everyday looks to glamorous evening styles.",
      image:
        "https://www.glam.com/img/gallery/29-glitter-cut-crease-ideas-to-give-your-eye-makeup-ultimate-glamour/intro-1683230483.jpg", // Replace with your image URL
    },
    {
      id: 5,
      title: "Nails",
      description:
        "Enhance the beauty of your hands and feet with our professional nail care services, offering everything from elegant manicures to intricate nail art.",
      image:
        "https://i.pinimg.com/originals/5b/64/78/5b64784fadc7dc37406d4352c16aaadd.jpg", // Replace with your image URL
    },
    {
      id: 6,
      title: "Spa Therapy",
      description:
        "Unwind and rejuvenate with our therapeutic spa treatments that bring balance, relaxation, and harmony to your mind and body.",
      image:
        "https://th.bing.com/th/id/OIP.zJz2l1qCqe5KKN5E7hlsmQHaE8?rs=1&pid=ImgDetMain", // Replace with your image URL
    },
  ];

  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Services We Offer</h1>
      </header>

      <section className="services">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
