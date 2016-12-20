import React, { PureComponent } from 'react';
import { Row, Col } from 'react-bootstrap';

import MainTitle from '../../common/MainTitle';

class Header extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { title } = this.props;

    return (
      <Row>
        <Col xs={12}>
          <MainTitle>{title}</MainTitle>
        </Col>
      </Row>
    );
  }
}

export default Header;
