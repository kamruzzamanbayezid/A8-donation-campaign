import PropTypes from 'prop-types';
import DonationCard from './DonationCard';

const DonationCards = ({ donationCards }) => {
      return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-2 lg:p-0'>
                  {
                        donationCards.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                  }
            </div>
      );
};

DonationCards.propTypes = {
      donationCards: PropTypes.array
}

export default DonationCards;