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
const ContentContainer = styled.div`
  height: 82vh;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  overflow: auto;
`;
///STYLE End

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
