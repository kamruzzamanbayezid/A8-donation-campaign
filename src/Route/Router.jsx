import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import CardDetails from "../Pages/CardDetails/CardDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const myCustomRouter = createBrowserRouter([
      {
            path: '/',
            element: <MainLayout></MainLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>,

                  },
                  {
                        path: '/donation',
                        element: <Donation></Donation>
                  },
                  {
                        path: '/statistics',
                        element: <Statistics></Statistics>
                  },
                  {
                        path: '/cardDetails/:id',
                        element: <CardDetails></CardDetails>,
                        loader: ({ params }) => fetch('/data.json')
                  },

            ],
      }
]);

export default myCustomRouter;