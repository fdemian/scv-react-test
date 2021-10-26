import React from "react";
import App from '../App/App';
const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));
const StockDetail = React.lazy(() => import('../StockDetail/StockDetail'));

const ApplicationRoutes = {
   App: App,
   Routes: [
    { path: "/", exact: true, component: Dashboard, private: false },
    { path: "/dashboard", exact: true, component: Dashboard, private: false },
    { path: "/stocks/:id", exact: true, component: StockDetail, private: false },
   ]
};

export default ApplicationRoutes;
