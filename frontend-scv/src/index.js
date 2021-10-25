import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ApplicationRoutes from './Routes/Routes';
import AppRoute from './Routes/AppRoute';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery
} from "@apollo/client";
const { App, Routes } = ApplicationRoutes;

const SCVTest = () => {

  const client = new ApolloClient({
    uri: '/api/graphql',
    cache: new InMemoryCache()
  });

  return(
  <ApolloProvider client={client}>
    <Router>
        <App>
          <Switch>
          {Routes.map(route =>
            <AppRoute
              exact={route.exact}
              path={route.path}
              component={route.component}
              isPrivate={route.private}
              key={route.path ? route.path.toString() : "-"}
            />
           )}
           </Switch>
         </App>
     </Router>
   </ApolloProvider>
   );

}

ReactDOM.render(
  <React.StrictMode>
     <SCVTest />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
