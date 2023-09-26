import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Statistics = () => {

      const [yourDonation, setYourDonation] = useState('');
      const [totalDonation, setTotalDonation] = useState('');

      useEffect(() => {
            const getCard = JSON.parse(localStorage.getItem('card'));
            if (getCard !== null) {
                  const cardLength = getCard.length;
                  setYourDonation(cardLength);
            }
      }, []);

      useEffect(() => {
            fetch('data.json')
                  .then(res => res.json())
                  .then(data => setTotalDonation(data.length))
      }, []);

      const data = [
            ["Task", "Hours per Day"],
            ["Total Donation", totalDonation - yourDonation],
            ["Your Donation", yourDonation],
      ];


      return (
            <div>
                  <Chart
                        chartType="PieChart"
                        data={data}
                        width={"100%"}
                        height={"500px"}
                  />
            </div>
      );
};

export default Statistics;

