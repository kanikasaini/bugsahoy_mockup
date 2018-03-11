import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Grid, Table, Checkbox } from 'react-bootstrap';
import Icon from 'react-fontawesome';
import chunk from 'lodash.chunk';
import Markdown from '../../components/Markdown';
import HelmetTitle from '../../components/HelmetTitle';
import links from '../../links';

export default class Guide extends PureComponent {
  render() {
    return (
    <Row className="show-grid">
          <Col md={3} sm={3} xs={3}>
            <div>
              <h4 style={{textAlign: "center"}}>
                Filter bugs
              </h4>
              <div>
              <h5> <b>Difficulty </b> </h5>
              <Checkbox> Beginners</Checkbox>
              <Checkbox> Intermediate</Checkbox>
              <Checkbox> Advanced</Checkbox>
              <h5> <b>Language </b> </h5>
              <Checkbox> JavaScript</Checkbox>
              <Checkbox> C++</Checkbox>
              <Checkbox> Rust</Checkbox>
              <h5> <b>Project </b> </h5>
              <Checkbox> Taskcluster</Checkbox>
              <Checkbox> Telemetry</Checkbox>
              <Checkbox> SeaMonkey</Checkbox>
              </div>
            </div>
          </Col>
          <Col md={9} sm={9} xs={9}>
            <h4 style={{textAlign: "center"}}> Results </h4>
            <Table striped bordered condensed hover>
  			  <thead>
    <tr>
      <th>#</th>
      <th>ID</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
          <td>1</td>
      <td>144403</td>
      <td>Make index.listTasks API method use GET instead of POST</td>
    </tr>
    <tr>
          <td>2</td>
      <td>144421</td>
      <td>Create a fake version of azure-blob-storage</td>
    </tr>
    <tr>
          <td>3</td>
      <td>141434</td>
      <td>Use a mock AWS library to test publishing documentation</td>
    </tr>
  </tbody>
</Table>
          </Col>
        </Row>
    );
  }
}