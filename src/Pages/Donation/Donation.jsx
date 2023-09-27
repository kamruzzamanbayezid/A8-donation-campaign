import { useEffect, useState } from "react";
import DonatedCardDetails from "../DonatedCardDetails/DonatedCardDetails";

const Donation = () => {

      const [donatedCards, setDonatedCards] = useState([]);
      const [showAll, setShowAll] = useState(false);
      const [showBtn, setShowBtn] = useState(false);

      useEffect(() => {
            const getCard = JSON.parse(localStorage.getItem('card'));
            if (getCard !== null) {
                  setDonatedCards(getCard);
            }
      }, []);

      const handleShowAllBtn = () => {
            setShowAll(true);
            setShowBtn(true);
      }

      return (
            <div>
                  {
                        donatedCards.length === 0 ? <div className="mt-10">
                              <h1 className="text-4xl font-medium text-center my-7">You haven't donated anywhere yet!!</h1>
                              <img className="w-96 mx-auto" src="https://i.ibb.co/JKwYvBN/49e58d5922019b8ec4642a2e2b9291c2.png" alt="" />
                        </div>
                              :
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

                                    {
                                          donatedCards.length > 4 && <div className={`flex items-center justify-center ${showBtn && 'hidden'}`}>
                                                <button onClick={handleShowAllBtn} className="btn bg-[#009444] hover:bg-green-700 text-[#FFF] font-semibold my-9">Show More</button>
                                          </div>
                                    }
                              </div>
                  }
            </div>
      );
};

export default Donation;