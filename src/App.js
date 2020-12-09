import React, { useState } from 'react';
import Navbar from './components/Navbar';
//import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Discord from './components/pages/Discord';
import Report from './components/pages/Report';
import Faq from './components/pages/Faq';
import SignUp from './components/pages/SignUp';
import Encodes from './components/pages/Encodes';
import DocumentTitle from 'react-document-title';

function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  return (
    <DocumentTitle title="Neko Encodes">
      <Router>
        <Navbar dataLoaded={dataLoaded} setDataLoaded={setDataLoaded} />
        <Switch>
          <Route path="/" exact component={Discord} />
          <Route path="/nekoencodes" exact component={Discord} />
          <Route
            path="/encodes"
            render={(props) => (
              <Encodes
                {...props}
                dataLoaded={dataLoaded}
                setDataLoaded={setDataLoaded}
              />
            )}
          />
          <Route path="/faq" component={Faq} />
          <Route path="/report" component={Report} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </DocumentTitle>
  );
}

export default App;
