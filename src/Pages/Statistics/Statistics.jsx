import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const Statistics = () => {

      const [yourDonation, setYourDonation] = useState('');
      const [totalDonation, setTotalDonation] = useState('');

      useEffect(() => {
            const getCard = JSON.parse(localStorage.getItem('card'));
            if (getCard !== null) {
                  const reduceCardPrice = getCard.reduce((previous, current) => previous + current.price, 0)
                  setYourDonation(reduceCardPrice);
            }
      }, []);

      useEffect(() => {
            fetch('data.json')
                  .then(res => res.json())
                  .then(data => setTotalDonation(data.reduce((previous, current) => previous + current.price, 0)))
      }, [])

      // const reduceTotalCardPrice = totalDonation.reduce((previous, current) => previous + current.price, 0);
      console.log(totalDonation);

      const data = [
            ["Task", "Hours per Day"],
            ["Total Donation", totalDonation],
            ["Your Donation", yourDonation],
      ];

      const options = {
            title: "My Daily Activities",
      };
      return (
            <div>
                  <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"400px"}
                  />
            </div>
      );
};

export default Statistics;

