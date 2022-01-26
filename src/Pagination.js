import React from "react";
import { Row, Col, Pagination } from "react-bootstrap";

const PaginationBasic = () => {

  let active = 2;
  let items = [];

  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Row className="mt-5 mb-5">
      <Col className="d-flex justify-content-center">
        <Pagination>{items}</Pagination>
      </Col>
    </Row>
  );
};

export default PaginationBasic;
