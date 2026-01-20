import { useState } from "react";
import emailjs from "emailjs-com";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Something went wrong. Try again later."));
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-dark text-white py-5 text-center">
        <div className="container">
          <h1 className="fw-bold display-5">
            Contact <span className="text-primary">MagicBrick</span>
          </h1>
          <p className="lead mt-3">
            We’d love to hear from you
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center">

            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-4 h-100">
                <h1>📍</h1>
                <h5 className="fw-bold">Office</h5>
                <p>Bangalore, India</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-4 h-100">
                <h1>📞</h1>
                <h5 className="fw-bold">Phone</h5>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card shadow-sm p-4 h-100">
                <h1>✉️</h1>
                <h5 className="fw-bold">Email</h5>
                <p>support@magicbrick.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM + MAP */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* FORM */}
            <div className="col-md-6 mb-4">
              <h2 className="fw-bold mb-3">Send us a message</h2>

              {success && (
                <div className="alert alert-success">
                  Message sent successfully! ✅
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* MAP */}
            <div className="col-md-6">
              <div className="card shadow-sm">
                <iframe
                  src="https://www.google.com/maps?q=Bangalore&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="MagicBrick Location"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "#fff",
          padding: "12px 16px",
          borderRadius: "50%",
          fontSize: "24px",
          zIndex: 1000,
          textDecoration: "none"
        }}
      >
        💬
      </a>

      {/* CTA */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Ready to Book a Flat?</h2>
          <p className="lead">
            Explore verified flats and connect instantly.
          </p>
          <a href="/booking" className="btn btn-primary btn-lg">
            Explore Flats
          </a>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
