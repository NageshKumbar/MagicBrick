import { useParams } from "react-router-dom";
import { useState } from "react";
import { flatsData } from "../../data/flatsData";

function FlatDetailsPage() {
  const { id } = useParams();
  const flat = flatsData.find(f => f.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(
    flat?.images?.[0] || flat?.image
  );

  if (!flat) {
    return (
      <div className="container mt-5 text-center">
        <h3 className="text-danger">Flat not found</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row g-4">

        {/* LEFT SIDE – IMAGE GALLERY */}
        <div className="col-lg-7">
          <div className="card shadow-sm">
            <img
              src={selectedImage}
              alt={flat.name}
              className="img-fluid rounded-top"
              style={{ height: "420px", objectFit: "cover" }}
            />

            <div className="d-flex gap-2 p-2 flex-wrap">
              {(flat.images || [flat.image]).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumbnail"
                  className={`img-thumbnail ${
                    selectedImage === img ? "border-primary" : ""
                  }`}
                  style={{
                    width: "80px",
                    height: "60px",
                    objectFit: "cover",
                    cursor: "pointer"
                  }}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="card mt-4 p-4 shadow-sm">
            <h5 className="fw-bold">About this flat</h5>
            <p>{flat.description}</p>

            <h6 className="fw-bold mt-3">Why choose this flat?</h6>
            <ul>
              <li>Prime residential location</li>
              <li>Peaceful & family-friendly environment</li>
              <li>Close to schools, hospitals & metro</li>
              <li>24/7 security and water supply</li>
            </ul>
          </div>

          {/* REVIEWS */}
          <div className="card mt-4 p-4 shadow-sm">
            <h5 className="fw-bold mb-3">Reviews</h5>

            {flat.reviews.length > 0 ? (
              flat.reviews.map((review, index) => (
                <div key={index} className="border-bottom mb-3 pb-2">
                  <strong>{review.user}</strong>
                  <div className="text-warning">
                    {"★".repeat(review.stars)}
                    {"☆".repeat(5 - review.stars)}
                  </div>
                  <p className="mb-0">{review.comment}</p>
                </div>
              ))
            ) : (
              <p className="text-muted">No reviews yet</p>
            )}
          </div>

          {/* MAP */}
          <div className="card mt-4 shadow-sm">
            <iframe
              src={flat.mapEmbedUrl}
              title="Flat Location"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE – BOOKING CARD */}
        <div className="col-lg-5">
          <div
            className="card shadow-sm p-4 position-sticky"
            style={{ top: "90px" }}
          >
            <span
              className={`badge mb-2 ${
                flat.availability === "Available"
                  ? "bg-success"
                  : "bg-danger"
              }`}
            >
              {flat.availability}
            </span>

            <h3 className="fw-bold">{flat.name}</h3>
            <p className="text-muted mb-1">{flat.location}</p>

            {/* RATING */}
            <p className="mb-2">
              <span className="text-warning">
                {"★".repeat(Math.round(flat.rating))}
                {"☆".repeat(5 - Math.round(flat.rating))}
              </span>
              <span className="text-muted"> ({flat.rating}/5)</span>
            </p>

            <h4 className="text-primary mb-3">
              ₹{flat.price} <small className="text-muted">/ month</small>
            </h4>

            <hr />

            {/* AMENITIES */}
            <h6 className="fw-bold">Amenities</h6>
            <div className="row small mb-3">
              <div className="col-6">✔ Parking</div>
              <div className="col-6">✔ Power Backup</div>
              <div className="col-6">✔ Lift</div>
              <div className="col-6">✔ 24/7 Water</div>
            </div>

            <button
              className="btn btn-primary w-100 mb-3"
              disabled={flat.availability !== "Available"}
            >
              Book Now
            </button>

            {/* OWNER CONTACT */}
            <div className="border-top pt-3">
              <h6 className="fw-bold">Owner Contact</h6>
              <p className="mb-1">👤 {flat.owner.name}</p>
              <p className="mb-1">📞 {flat.owner.phone}</p>
              <p className="mb-0">✉ {flat.owner.email}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default FlatDetailsPage;
