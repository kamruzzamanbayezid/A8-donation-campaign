import PropTypes from 'prop-types';


const DonationCard = ({ card }) => {
      console.log(card);
      const { picture, card_bg, category, text_color, title, category_bg } = card;

      const style = card_bg;
      console.log(style);

      return (
            <div>
                  <div style={{ backgroundColor: card_bg }} className={`relative flex flex-col rounded-lg`}>
                        <div className="relative m-0 overflow-hidden rounded-t-lg bg-transparent bg-clip-border text-gray-700 shadow-none">
                              <img className='w-full'
                                    src={picture}
                                    alt="Card Image"
                              />
                        </div>
                        <div className="p-4">
                              <h4 style={{ backgroundColor: category_bg, color: text_color }} className="block text-sm font-medium px-2 rounded w-fit">
                                    {category}
                              </h4>
                              <h2 style={{ color: text_color}} className="block mt-3 text-xl font-semibold leading-relaxed antialiased">
                                    {title}
                              </h2>
                        </div>
                  </div>
            </div>
      );
};

DonationCard.propTypes = {
      card: PropTypes.object
}

export default DonationCard;