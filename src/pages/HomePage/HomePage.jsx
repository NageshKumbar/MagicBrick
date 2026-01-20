import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { flatsData } from "../../data/flatsData";

function HomePage() {
    const [theme, setTheme] = useState("light");
    const featuredFlats = flatsData.slice(0, 5);

    useEffect(() => {
        document.body.className = theme === "dark" ? "bg-dark text-white" : "";
    }, [theme]);

    return (
        <>
            {/* SEO */}
            <Helmet>
                <title>MagicBrick | Find Flats for Rent in India</title>
                <meta
                    name="description"
                    content="MagicBrick helps you find verified flats with transparent pricing and instant booking."
                />
            </Helmet>

            {/* THEME TOGGLE */}
            <div className="text-end p-3">
                <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                    {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
                </button>
            </div>

            {/* HERO */}
            <section className="py-5 bg-primary text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="fw-bold display-5">
                                Find Your Dream Flat with MagicBrick
                            </h1>
                            <p className="lead mt-3">
                                Verified flats • Transparent pricing • Direct owner contact
                            </p>
                            <Link to="/booking" className="btn btn-light btn-lg mt-3">
                                Explore Flats
                            </Link>
                        </div>

                        <div className="col-md-6 text-center">
                            <img
                                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
                                alt="Home"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ANIMATED STATS */}
            <section className="py-5">
                <div className="container text-center">
                    <div className="row">
                        {[
                            { label: "Flats Listed", value: "500+" },
                            { label: "Cities", value: "10+" },
                            { label: "Happy Customers", value: "2K+" },
                            { label: "Avg Rating", value: "4.5⭐" }
                        ].map((item, i) => (
                            <div key={i} className="col-md-3 mb-3">
                                <h2 className="fw-bold">{item.value}</h2>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HERO CAROUSEL */}
            <section>
                <div
                    id="homeCarousel"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="4000"
                >
                    {/* INDICATORS */}
                    <div className="carousel-indicators">
                        <button data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active"></button>
                        <button data-bs-target="#homeCarousel" data-bs-slide-to="1"></button>
                        <button data-bs-target="#homeCarousel" data-bs-slide-to="2"></button>
                    </div>

                    {/* SLIDES */}
                    <div className="carousel-inner">

                        {/* SLIDE 1 */}
                        <div className="carousel-item active">
                            <img
                                src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4"
                                className="d-block w-100"
                                style={{ height: "75vh", objectFit: "cover" }}
                                alt="Luxury Flats"
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-4">
                                <h2 className="fw-bold">Luxury Flats in Prime Locations</h2>
                                <p>Find premium homes with world-class amenities</p>
                                <a href="/booking" className="btn btn-primary">
                                    Explore Flats
                                </a>
                            </div>
                        </div>

                        {/* SLIDE 2 */}
                        <div className="carousel-item">
                            <img
                                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
                                className="d-block w-100"
                                style={{ height: "75vh", objectFit: "cover" }}
                                alt="Affordable Homes"
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-4">
                                <h2 className="fw-bold">Affordable Homes for Everyone</h2>
                                <p>Verified flats with transparent pricing</p>
                                <a href="/booking" className="btn btn-primary">
                                    Book Now
                                </a>
                            </div>
                        </div>

                        {/* SLIDE 3 */}
                        <div className="carousel-item">
                            <img
                                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
                                className="d-block w-100"
                                style={{ height: "75vh", objectFit: "cover" }}
                                alt="Family Apartments"
                            />
                            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-4">
                                <h2 className="fw-bold">Perfect Homes for Families</h2>
                                <p>Safe, spacious, and well-connected flats</p>
                                <a href="/booking" className="btn btn-primary">
                                    View Listings
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* CONTROLS */}
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#homeCarousel"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon"></span>
                    </button>

                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#homeCarousel"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon"></span>
                    </button>
                </div>  
            </section>


            {/* POPULAR CITIES (ROUTING READY) */}
            <section className="py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-4">Popular Cities</h2>

                    <div className="row">
                        {["Bangalore", "Mumbai", "Hyderabad", "Pune", "Delhi", "Chennai"].map(
                            (city, i) => (
                                <div key={i} className="col-md-2 col-6 mb-3">
                                    <Link
                                        to={`/booking?city=${city}`}
                                        className="text-decoration-none"
                                    >
                                        <div className="card shadow-sm py-3">
                                            <strong>{city}</strong>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-5 bg-dark text-white">
                <div className="container text-center">
                    <h2 className="fw-bold">Ready to Book Your Flat?</h2>
                    <p className="lead">
                        Browse verified flats and connect directly with owners.
                    </p>
                    <Link to="/booking" className="btn btn-primary btn-lg">
                        Get Started
                    </Link>
                </div>
            </section>
        </>
    );
}

export default HomePage;
