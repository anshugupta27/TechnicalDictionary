import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";


const CardComponent = ({ height, width, margin, array }) => {
  console.log("array", array);
  const navigate = useNavigate();

  function navigationHandler(title,body) {
      navigate('/articleList/article', {state:{title: title, body: body}})
  }
  return array.map((index) => (
    <Col>
      <Card style={{width: width, height: height, margin: margin }}>
        <Card.Body>
          <Card.Title>{index.title}</Card.Title>
          <Card.Text>{index.body}</Card.Text>
          <Button variant="primary" onClick={() => navigationHandler(index.title, index.body)}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default CardComponent;