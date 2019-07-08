import React, { Suspense } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import apolloClient from "./common/apollo";
import { ApolloProvider } from "react-apollo";
import Header from "./components/header/header";
import Search from "./components/search/search";
import GoogleGmaps from "./components/googlemaps/gmaps";
import Footer from "./components/footer/footer";
import ResultsList from "./components/results-list/results";



const App = () => {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        <Header />

        <BrowserRouter>
          <Search />
          <GoogleGmaps />
          <Suspense fallback={<> Loading........ </>}>
            <Switch>
              <Route path="/resultslist" component={ResultsList} />
            </Switch>
          </Suspense>
        </BrowserRouter>
        <Footer />
      </ApolloProvider>
    </>
  );
};

export default App;
