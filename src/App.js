import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Downloads from './components/pages/Downloads';
import Discord from './components/pages/Discord';
import Report from './components/pages/Report';
import Faq from './components/pages/Faq';
import SignUp from './components/pages/SignUp';
import DDL from './components/pages/DDL';
import Nyaa from './components/pages/Nyaa';
import Upcoming from './components/pages/Upcoming';
import DocumentTitle from 'react-document-title';

function App() {
  return (
    <DocumentTitle title='Neko Encodes'>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/downloads' component={Downloads} />
            <Route path='/discord' component={Discord} />
            <Route path='/faq' component={Faq} />
            <Route path='/report' component={Report} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/ddl' component={DDL} />
            <Route path='/nyaa' component={Nyaa} />
            <Route path='/upcoming' component={Upcoming} />
          </Switch>
        </Router>
    </DocumentTitle>
    
  );
}

export default App;
