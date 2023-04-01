import React, { useState, useEffect } from "react";
import { CardComponent } from "../../components";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SubTopicListPage = () => {
  const [subTopicList, setSubTopicList] = useState([])
  const location = useLocation();
  const topic = location.state.paramTopic;
  const topicID = location.state.paramTopicID;
  console.log("prop", topic);
  useEffect(() => {
    console.log("use effect");
    fetch(`/getSubTopicList/${topicID}`)
      .then((response) => response.json())
      .then((data) => setSubTopicList(data));
  },[]);

  // const articleList = [
  //   { title: "EC2 Instance", body: "this is the body" },
  //   { title: "cloud watch ", body: "this is the body" },
  //   { title: "Lambda ", body: "this is the body" },
  //   { title: "Load balancer ", body: "this is the body" },
  //   { title: "S3 bucket", body: "this is the body" },
  // ];

  return (
    <>
      <div style={{ marginLeft: "10rem", marginTop: "2rem" }}>
        <Link to=".." relative="route">
          Home
        </Link>
      </div>
      <div
        style={{ marginLeft: "10rem", marginTop: "2rem", marginRight: "3rem" }}
      >
        <Row xs={1} md={3}>
          <CardComponent
            width="20rem"
            height=" 12rem"
            margin="0rem 0rem 1rem 0rem"
            array={subTopicList}
          />
        </Row>
      </div>
    </>
  );
};
export default SubTopicListPage;
