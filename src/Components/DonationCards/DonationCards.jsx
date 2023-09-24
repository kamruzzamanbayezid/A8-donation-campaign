import PropTypes from 'prop-types';
import DonationCard from './DonationCard';

const DonationCards = ({ donationCards }) => {
      return (
            <div>
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