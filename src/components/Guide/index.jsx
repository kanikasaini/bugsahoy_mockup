import { PureComponent } from 'react';
import { ListGroupItem, ListGroup } from 'react-bootstrap';

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
