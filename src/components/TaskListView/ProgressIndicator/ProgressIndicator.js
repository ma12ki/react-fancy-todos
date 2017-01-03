import React from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';

const ProgressIndicator = (props) => {
    const { progress } = props;

    return (
      <Row>
        <Col xs={12}>
          <ProgressBar now={progress} label={`${progress}%`} />
        </Col>
      </Row>
    );
};

export default ProgressIndicator;
