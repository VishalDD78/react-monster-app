import "./card.style.css";

const Card = ({ monsters: { name, id, email } }) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set1=set2`} alt={name} />
      <h1>{name}</h1>
      <h3>{email}</h3>
    </div>
  );
};

export default Card;
