import { Link } from "react-router-dom";

function FlatCard({ flat }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img src={flat.image} className="card-img-top" alt={flat.name} />

        <div className="card-body">
          <h5>{flat.name}</h5>
          <p>{flat.location}</p>
          <p className="fw-bold">₹{flat.price} / month</p>

          <Link
            to={`/flat/${flat.id}`}
            className="btn btn-outline-primary w-100"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FlatCard;
