import React from "react";
import App from '../App/App';
const Dashboard = React.lazy(() => import('../Dashboard/Dashboard'));
const Bond = React.lazy(() => import('../Bond/Bond'));

const ApplicationRoutes = {
   App: App,
   Routes: [
    { path: "/", exact: true, component: Dashboard, private: false },
    { path: "/dashboard", exact: true, component: Dashboard, private: false },
    { path: "/bono", exact: true, component: Bond, private: false }
   ]
};

export default ApplicationRoutes;
