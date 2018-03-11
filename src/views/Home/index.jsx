import { PureComponent } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';
import Guide from '../../components/Guide';
import BugsDisplayManager from '../../components/BugsDisplayManager';

// Please make sure that link matches location.pathname for the page otherwise
// we won't be able to detect which page you're currently on.
export default class Home extends PureComponent {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={12}>
            <div>
              <h2 style={{ textAlign: 'center' }}> Bugs Ahoy! </h2>
              <h4 style={{ textAlign: 'center' }}>
                <i>these bugs are relevant to my interest</i>
              </h4>
            </div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={10} sm={10} xs={10}>
            <BugsDisplayManager />
          </Col>
          <Col md={2} sm={2} xs={2}>
            <Guide />
          </Col>
        </Row>
      </Grid>
    );
  }
}
