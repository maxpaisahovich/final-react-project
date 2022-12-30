import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import cardsService from "../services/cardService";

const DeleteCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const deleteCard = async () => {
      await cardsService.deleteCard(id);
      navigate("/my-business-cards");
    };

    deleteCard();
  }, [id, navigate]);

  return null;
};

export default DeleteCard;
