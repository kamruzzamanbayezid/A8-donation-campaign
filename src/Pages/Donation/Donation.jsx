import { useEffect, useState } from "react";
import DonatedCardDetails from "../DonatedCardDetails/DonatedCardDetails";

const Donation = () => {

      const [donatedCards, setDonatedCards] = useState([]);

      useEffect(() => {
            const getCard = JSON.parse(localStorage.getItem('card'));
            setDonatedCards(getCard);
      }, []);

      return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                  {
                        donatedCards.map(card => <DonatedCardDetails key={card.id} card={card}></DonatedCardDetails>)
                  }
            </div>
      );
};

export default Donation;