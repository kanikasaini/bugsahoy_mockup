import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Grid, ListGroupItem, ListGroup } from 'react-bootstrap';
import Icon from 'react-fontawesome';
import chunk from 'lodash.chunk';
import Markdown from '../../components/Markdown';
import HelmetTitle from '../../components/HelmetTitle';
import links from '../../links';

export default class Guide extends PureComponent {
  render() {
    return (
    <div>
    <h4> Contribution Guides </h4>
     <ListGroup>
    <ListGroupItem href="#link1">Taskcluster</ListGroupItem>
    <ListGroupItem href="#link2">Telemetry</ListGroupItem>
    <ListGroupItem href="#link2">SeaMonkey</ListGroupItem>
  </ListGroup>
  </div>
    );
  }
}