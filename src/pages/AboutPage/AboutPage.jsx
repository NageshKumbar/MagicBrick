import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>About MagicBrick | Smarter Flat Booking</title>
        <meta
          name="description"
          content="Learn about MagicBrick, a modern flat booking platform offering verified flats, transparent pricing, and direct owner contact."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-dark text-white py-5 text-center">
        <div className="container" data-aos="fade-up">
          <h1 className="fw-bold display-5">
            About <span className="text-primary">MagicBrick</span>
          </h1>
          <p className="lead mt-3">
            Building trust, transparency, and simplicity in flat booking.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="fw-bold">Who We Are</h2>
              <p className="mt-3">
                <strong>MagicBrick</strong> is a digital flat booking platform
                that connects tenants directly with property owners.
                We remove brokers, hidden charges, and unnecessary friction.
              </p>
              <p>
                From students to families, we help people find homes
                that truly fit their lifestyle.
              </p>
            </div>

            <div className="col-md-6 text-center" data-aos="fade-left">
              <img
                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
                alt="About MagicBrick"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 mb-4" data-aos="zoom-in">
              <div className="card shadow-sm p-4 h-100">
                <h1>🎯</h1>
                <h4 className="fw-bold">Our Mission</h4>
                <p>
                  Make flat booking simple, honest, and stress-free
                  by eliminating middlemen.
                </p>
              </div>
            </div>

            <div className="col-md-6 mb-4" data-aos="zoom-in">
              <div className="card shadow-sm p-4 h-100">
                <h1>🚀</h1>
                <h4 className="fw-bold">Our Vision</h4>
                <p>
                  Become India’s most trusted digital real-estate platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <div className="row">
            {[
              ["500+", "Verified Flats"],
              ["10+", "Cities Covered"],
              ["2000+", "Happy Users"],
              ["4.5⭐", "Average Rating"]
            ].map(([value, label], i) => (
              <div key={i} className="col-md-3" data-aos="fade-up">
                <h2 className="fw-bold">{value}</h2>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            Meet the Team
          </h2>

          <div className="row justify-content-center">
            {[
              ["Nagesh K", "Founder & Full-Stack Developer"],
              ["Amit Sharma", "Product Designer"],
              ["Rahul Verma", "Backend Engineer"]
            ].map(([name, role], i) => (
              <div key={i} className="col-md-4 mb-4" data-aos="zoom-in">
                <div className="card shadow-sm p-4 h-100">
                  <img
                    src="https://via.placeholder.com/120"
                    className="rounded-circle mb-3"
                    alt={name}
                  />
                  <h5 className="fw-bold">{name}</h5>
                  <p className="text-muted">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            What Our Users Say
          </h2>

          <div className="row">
            {[
              ["Ananya", "Booking was super smooth and transparent."],
              ["Rohit", "No broker calls! Loved the experience."],
              ["Sneha", "Found my flat in just 2 days."]
            ].map(([user, text], i) => (
              <div key={i} className="col-md-4 mb-3" data-aos="fade-up">
                <div className="card shadow-sm p-4 h-100">
                  <p>“{text}”</p>
                  <strong className="mt-2 d-block">{user}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            Our Journey
          </h2>

          <div className="row">
            {[
              ["2023", "Idea born"],
              ["2024", "Platform launched"],
              ["2025", "Expanded to multiple cities"]
            ].map(([year, text], i) => (
              <div key={i} className="col-md-4 mb-3" data-aos="fade-up">
                <div className="card shadow-sm p-3">
                  <h6 className="fw-bold">{year}</h6>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-white py-5 text-center">
        <div className="container" data-aos="zoom-in">
          <h2 className="fw-bold">Ready to Find Your Home?</h2>
          <p className="lead">
            Browse verified flats and connect directly with owners.
          </p>
          <a href="/booking" className="btn btn-primary btn-lg mt-3">
            Explore Flats
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
