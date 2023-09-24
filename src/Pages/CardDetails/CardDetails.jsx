import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {

      const cards = useLoaderData();
      const { id } = useParams()

      const [cardDetails, setCardDetails] = useState('');

      useEffect(() => {
            const findCard = cards.find(card => card.id === parseInt(id))
            setCardDetails(findCard)
      }, [id, cards]);

      console.log(cardDetails);

      return (
            <div className="mt-8 mb-20">
                  <img className="w-full h-[80vh] mb-14" src={cardDetails.picture} alt="card photo" />
                  <h2 className="text-[#0B0B0B] text-4xl font-bold mb-6">{cardDetails.title}</h2>
                  <p className="text-[#0b0b0bb3] font-normal">{cardDetails.description}</p>
            </div>
      );
};

export default CardDetails;