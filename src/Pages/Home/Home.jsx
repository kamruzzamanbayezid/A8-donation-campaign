import DonationCard from "../../Components/DonationCards/DonationCard";
import { useEffect, useState } from "react";

const Home = () => {

      const [donationCards, setDonationCards] = useState([]);
      const [displayCard, setDisplayCard] = useState([]);
      const [inputValue, setInputValue] = useState('');

      useEffect(() => {

            const fetchData = async () => {
                  const res = await fetch('/data.json');
                  const data = await res.json()
                  setDonationCards(data);
                  setDisplayCard(data);
            }
            fetchData();
      }, []);

      const handleSearch = (e) => {
            e.preventDefault();
            if (inputValue === 'Education') {
                  const educationCategory = displayCard.filter(education => education.category === 'Education');
                  setDisplayCard(educationCategory);
            }
            else if (inputValue === 'Health') {
                  const healthCategory = displayCard.filter(health => health.category === 'Health');
                  setDisplayCard(healthCategory);
            }
            else if (inputValue === 'Clothing') {
                  const clothingCategory = displayCard.filter(clothing => clothing.category === 'Clothing');
                  setDisplayCard(clothingCategory);
            }
      }

      const handleInputField = e => {
            setInputValue(e.target.value);
      }

      return (
            <div>
                  <div>
                        <div className="bannerStyle w-full h-[400px] relative mb-7 lg:mb-20">
                              <img src="https://i.ibb.co/H4zHnBD/smiley-volunteers-posing-boxes-donation.jpg" alt="Background Image" className="w-full h-full" />
                              <div className="w-full h-full absolute top-0 left-0 bg-[#fffffff2]"></div>
                              <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <h1 className='text-[#0B0B0B] text-4xl mb-9 font-bold'>I Grow By Helping People In Need</h1>

                                    <input onChange={handleInputField} className='rounded-l-lg lg:w-1/2 w-full h-14 text-[#0b0b0b66] bg-[#FFF] border border-solid border-[#DEDEDE] pl-4' type="text" placeholder="Search here...." />

                                    <button onClick={handleSearch} className='bg-[#FF444A] text-[#FFF] rounded-r-lg  font-semibold py-4 px-7'>Search</button>
                              </div>
                        </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2 mb-16 lg:p-0'>
                        {
                              displayCard?.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                        }
                  </div>
            </div>
      );
};

export default Home;