import React from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

//Import Pages
import Jackets from "./pages/Jackets";
import Sell from "./pages/Sell";
import Profile from "./pages/Profile";

///STYLE Start
const ContentContainer = styled.main`
  margin: 0;
  flex-grow: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  overflow: auto;
`;

const AppContainer =styled.div`
  height: 100vh; 
  display: flex; 
  flex-flow: column nowrap;
`;
///STYLE End

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <Router>
        <Header />
        <ContentContainer>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/jackets" component={Jackets} />
            <Route path="/sell" component={Sell} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </ContentContainer>
        <Footer />
      </Router>
    </AppContainer>
  );
}

export default App;
