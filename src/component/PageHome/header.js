import * as bs from 'react-bootstrap';

function Header() {
  return (
      <bs.Container fluid>
        <bs.Row className="show-grid header">
          <bs.Col xs={12} md={8} >Header</bs.Col>
        </bs.Row>
      </bs.Container>
  );
}
export default Header;
