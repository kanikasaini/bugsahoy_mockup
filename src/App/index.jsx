import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { loadable } from '../utils';
import './styles.css';

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
