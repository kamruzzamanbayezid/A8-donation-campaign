import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert';

const CardDetails = () => {

      const cards = useLoaderData();
      const { id } = useParams()

      const [cardDetails, setCardDetails] = useState('');

      const useNavigates = useNavigate();

      useEffect(() => {
            const findCard = cards.find(card => card.id === parseInt(id))
            setCardDetails(findCard)
      }, [id, cards]);

      const handlePriceBtn = () => {
            const addCard = [];
            const getCard = JSON.parse(localStorage.getItem('card'));

            if (!getCard) {
                  addCard.push(cardDetails);
                  localStorage.setItem('card', JSON.stringify(addCard));
                  swal("Donated Successfully!", "Thank you for this great work!", "success");
            }
            else {
                  const isExist = getCard.find(card => card.id === cardDetails.id)

                  if (!isExist) {
                        addCard.push(...getCard, cardDetails);
                        localStorage.setItem('card', JSON.stringify(addCard));
                        swal("Donated Successfully!", "Thank you for this great work!", "success");
                  }
                  else {
                        swal({
                              title: "You have already donated here",
                              icon: "warning",
                        })
                  }


            }
      }

      const handleNavigate = () => {
            useNavigates(-1);
      }

      return (

            <div className="mt-8 mb-20 p-2 lg:p-0">
                  <div className="relative mb-10">
                        <img
                              src={cardDetails.picture}
                              alt="Your Image"
                              className="w-full h-[80vh]"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-black bg-opacity-50 text-white">
                              <button onClick={handlePriceBtn} style={{ backgroundColor: cardDetails.text_color }} className="btn text-[#FFF] text-xl font-semibold border-none">Donate ${cardDetails.price}</button>
                        </div>
                  </div>
                  <h2 className="text-[#0B0B0B] text-4xl text-center lg:text-start font-bold mb-6">{cardDetails.title}</h2>
                  <p className="text-[#0b0b0bb3] text-center lg:text-start font-normal">{cardDetails.description}</p>

                  <button onClick={handleNavigate} style={{ color: cardDetails.text_color }} className="mt-6 underline text-xl font-medium">Back</button>
            </div>
      )
};

export default CardDetails;