/**
 * Root Component
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import IntlWrapper from './modules/Intl/IntlWrapper';

// Import Routes
import routes from './routes';

// Base stylesheet
require('./main.css');

export default function App(props) {
  return (
    <Provider store={props.store}>
      <IntlWrapper>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </IntlWrapper>
    </Provider>
  );
}

          //<Route path="/about" component={App} />

//<Router history={history}>
//  <Route path="/" component={HomePage} />
//  <Route path="/about" component={AboutPage} />
//  <Route path="/faq" component={FAQPage} />
//</Router>

App.propTypes = {
  store: React.PropTypes.object.isRequired,
};
