import React from 'react';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import { withRouter } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group'
import ScrollToTop from './ScrollToTop';
import 'bootstrap/dist/css/bootstrap.css';

const Main = () => {
  return(
    <div>
      <Header />
        <TransitionGroup>
          <ScrollToTop />
            <Switch>
              <Route exact path='/' component={About} />
              <Route path='/resume' component={Resume} />
              <Route path='/projects' component={Projects} />
              <Route path='/contact' component={Contact} />
              <Redirect to='/' />
            </Switch>
        </TransitionGroup>
        <Footer />
    </div>
  )
}

export default withRouter(Main)