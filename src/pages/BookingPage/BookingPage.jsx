import { useState } from "react";
import { Link } from "react-router-dom";
import { flatsData } from "../../data/flatsData";

function BookingPage() {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [availability, setAvailability] = useState("All");
  const [minRating, setMinRating] = useState("");
  const [sortBy, setSortBy] = useState("");

  const filteredFlats = flatsData
    .filter(flat =>
      flat.location.toLowerCase().includes(search.toLowerCase())
    )
    .filter(flat =>
      maxPrice ? flat.price <= maxPrice : true
    )
    .filter(flat =>
      availability === "All" ? true : flat.availability === availability
    )
    .filter(flat =>
      minRating ? flat.rating >= minRating : true
    )
    .sort((a, b) => {
      if (sortBy === "priceLow") return a.price - b.price;
      if (sortBy === "priceHigh") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="container my-5">

      {/* HEADER */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Find Your Perfect Flat</h2>
        <p className="text-muted">
          Search, filter and book verified flats instantly
        </p>
      </div>

      {/* FILTERS */}
      <div className="card shadow-sm p-4 mb-5">
        <div className="row g-3">

          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by city"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          <div className="col-md-2">
            <input
              type="number"
              className="form-control"
              placeholder="Max price ₹"
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value)}
            />
          </div>

          <div className="col-md-2">
            <select
              className="form-select"
              value={availability}
              onChange={e => setAvailability(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </select>
          </div>

          <div className="col-md-2">
            <select
              className="form-select"
              value={minRating}
              onChange={e => setMinRating(e.target.value)}
            >
              <option value="">Min Rating</option>
              <option value="4">4 ⭐ & above</option>
              <option value="4.5">4.5 ⭐ & above</option>
            </select>
          </div>

          <div className="col-md-3">
            <select
              className="form-select"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              <option value="">Sort By</option>
              <option value="priceLow">Price: Low → High</option>
              <option value="priceHigh">Price: High → Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>

        </div>
      </div>

      {/* RESULTS */}
      <div className="row">
        {filteredFlats.length > 0 ? (
          filteredFlats.map(flat => (
            <div key={flat.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">

                <img
                  src={flat.image}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  alt={flat.name}
                />

                <div className="card-body">
                  <span
                    className={`badge mb-2 ${
                      flat.availability === "Available"
                        ? "bg-success"
                        : "bg-danger"
                    }`}
                  >
                    {flat.availability}
                  </span>

                  <h5 className="fw-bold">{flat.name}</h5>
                  <p className="text-muted mb-1">{flat.location}</p>

                  <div className="text-warning mb-1">
                    {"★".repeat(Math.round(flat.rating))}
                    {"☆".repeat(5 - Math.round(flat.rating))}
                    <span className="text-muted ms-1">
                      ({flat.rating})
                    </span>
                  </div>

                  <h6 className="text-primary">
                    ₹{flat.price} / month
                  </h6>
                </div>

                <div className="card-footer bg-white border-0">
                  <Link
                    to={`/flat/${flat.id}`}
                    className="btn btn-outline-primary w-100"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-danger">
            No flats match your filters 😕
          </p>
        )}
      </div>

    </div>
  );
}

export default BookingPage;
