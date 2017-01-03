import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';

const ProgressIndicator = () => {
    const now = 60;

    return (
      <Row>
        <Col xs={12}>
          <ProgressBar now={now} label={`${now}%`} />
        </Col>
      </Row>
    );
};

export default ProgressIndicator;
