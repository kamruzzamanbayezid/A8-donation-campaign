import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

const myCustomRouter = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>,
                        loader: () => fetch('/data.json')
                  },
                  {
                        path: '/donation',
                        element: <Donation></Donation>
                  },
                  {
                        path: '/statistics',
                        element: <Statistics></Statistics>
                  }
            ],
      }
]);

export default myCustomRouter;