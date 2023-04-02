import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { CardComponent } from "../../components";
import Row from "react-bootstrap/Row";
import { useLocation } from "react-router-dom";
// TODO: new artcie with new topic not working
const ArticlePage = () => {
  const location = useLocation();
  const body = location.state.body;
  const title = location.state.title;

  const articleList = [
    { title: title, body:body },
  ];
  return (
    <>
      <div style={{ marginLeft: "10rem", marginTop: "2rem" }}>
        <Link
          to=".."
          relative="route"
          style={{ marginLeft: "6rem", marginRight: "1rem" }}
        >
          Home
        </Link>
        {">"}
        <Link to=".." relative="path" style={{ marginLeft: "1rem" }}>
          Sub-Topic
        </Link>
      </div>
      <Row xs={1} md={1}>
        <CardComponent
          height="30rem"
          width="60rem"
          margin="1rem 10rem 5rem 15rem"
          array={articleList}
        />
      </Row>
    </>
  );
};

export default ArticlePage;
