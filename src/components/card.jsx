import { Link } from "react-router-dom";

const Card = ({
  card: { _id, bizName, bizDescription, bizAddress, bizPhone, bizImage },
}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={bizImage} className="card-img-top" alt={bizName} />
      <div className="card-body">
        <h5 className="card-title">Name: {bizName}</h5>
        <p className="card-text">Description: {bizDescription}</p>

        <ul className="list-group list-group-flush">
          <div className="list-group-item">Address: {bizAddress}</div>
          <div className="list-group-item">Phone Number: {bizPhone}</div>
        </ul>

        <Link to={`/my-business-cards/edit/${_id}`} className="card-link">
          edit
        </Link>
        <Link to={`/my-business-cards/delete/${_id}`} className="card-link">
          delete
        </Link>
      </div>
    </div>
  );
};

export default Card;
