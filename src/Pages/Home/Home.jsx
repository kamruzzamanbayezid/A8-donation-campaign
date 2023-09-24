import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import DonationCards from "../../Components/DonationCards/DonationCards";

const Home = () => {

      const donationCards = useLoaderData();

      return (
            <div>
                  <Banner></Banner>
                  <DonationCards donationCards={donationCards}></DonationCards>
            </div>
      );
};

export default Home;