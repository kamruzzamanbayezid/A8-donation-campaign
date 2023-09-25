import { useEffect, useState } from "react";
import DonatedCardDetails from "../DonatedCardDetails/DonatedCardDetails";

const Donation = () => {

      const [donatedCards, setDonatedCards] = useState([]);
      const [showAll, setShowAll] = useState(false);
      const [showBtn, setShowBtn] = useState(false);

      useEffect(() => {
            const getCard = JSON.parse(localStorage.getItem('card'));
            setDonatedCards(getCard);
      }, []);

      const handleShowAllBtn = () => {
            setShowAll(true);
            setShowBtn(true);
      }

      return (
            <div>
                  {
                        showAll ? <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                              {
                                    donatedCards.map(card => <DonatedCardDetails key={card.id} card={card}></DonatedCardDetails>)
                              }
                        </div> :
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                                    {
                                          donatedCards.slice(0, 4).map(card => <DonatedCardDetails key={card.id} card={card}></DonatedCardDetails>)
                                    }
                              </div>
                  }

                  <div className={`flex items-center justify-center ${showBtn && 'hidden'}`}>
                        <button onClick={handleShowAllBtn} className="btn bg-[#009444] hover:bg-green-700 text-[#FFF] font-semibold my-9">Show More</button>
                  </div>
            </div>
      );
};

export default Donation;