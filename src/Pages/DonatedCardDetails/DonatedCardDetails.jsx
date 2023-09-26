import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonatedCardDetails = ({ card }) => {
      
      const { id, picture, card_bg, category, text_color, title, category_bg, price } = card;

      return (
            <div className='lg:p-0 p-2 mb-4'>
                  <div style={{ backgroundColor: card_bg }} className="relative flex w-full max-w-[48rem] flex-col lg:flex-row rounded-lg">
                        <div className="relative m-0 lg:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                              <img
                                    src={picture}
                                    alt="image"
                                    className="h-full w-full"
                              />
                        </div>
                        <div className="p-6">
                              <h6 style={{ backgroundColor: category_bg, color: text_color }} className="mb-2 block font-sans text-base font-semibold w-fit py-2 px-2 rounded leading-relaxed tracking-normal text-pink-500 antialiased">
                                    {category}
                              </h6>
                              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-[#0B0B0B] ">
                                    {title}
                              </h4>
                              <p style={{ color: text_color }} className="mb-5 block font-sans text-base font-semibold leading-relaxed antialiased">
                                    ${price}
                              </p>
                              <Link to={`/cardDetails/${id}`}><button style={{ backgroundColor: text_color }} className='btn text-[#FFF] text-lg font-semibold'>View Details</button></Link>
                        </div>
                  </div>
            </div>
      );
};

DonatedCardDetails.propTypes = {
      card: PropTypes.object
}

export default DonatedCardDetails;