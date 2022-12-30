import { Link } from "react-router-dom";

import PageHeader from "./common/pageHeader";
import Card from "./card";
import { useMyCards } from "../hooks/useMyCards";

const MyBusinessCards = () => {
  const cards = useMyCards();

  return (
    <>
      <PageHeader title="My Cards" description="Mange your business cards!" />

      <div className="row mb-4">
        <Link to="/create-card">Create a New Card</Link>
      </div>

      <div className="row gap-4">
        {!cards.length ? (
          <p> No Cards..</p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
};
export default MyBusinessCards;
