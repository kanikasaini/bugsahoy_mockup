import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { object } from 'prop-types';
import { Helmet, link } from 'react-helmet';
import { Grid } from 'react-bootstrap';
import { loadable } from '../utils';
import './styles.css';
import iconUrl from '../taskcluster.png';

const Home = loadable(() =>
  import(/* webpackChunkName: 'Home' */ '../views/Home')
);

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
    );
  }
}
