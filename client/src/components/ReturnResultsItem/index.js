import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
const ReturnResultsItem = ({
    thumbnail = "https://placehold.it/300x300",
    name,
    serial_number,
    date_due
  }) => {
    return (
      <li className="list-group-item">
        <Container>
          <Row>
            <Col size="xs-4 sm-2">
              <Thumbnail src={thumbnail} />
            </Col>
            <Col size="xs-8 sm-9">
              <h3>{name}</h3>
              <p>Serial Number: {serial_number}</p>
              <p>Date Due: {date_due}</p>
            </Col>
          </Row>
        </Container>
      </li>
    );
  }

  export default ReturnResultsItem;
