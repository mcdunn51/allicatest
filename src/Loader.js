import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <>
      <Row className="mt-5 mb-3">
        <Col className="d-flex justify-content-center">
          <Spinner animation="border" variant="primary" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
         <p>Loading...</p>
        </Col>
      </Row>
    </>
  );
};

export default Loader;
