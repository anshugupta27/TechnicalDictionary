import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { CardComponent } from "../../components";
import { Link } from "react-router-dom";

const WriteNewArticlePage = () => {
  const [topicList, setTopicList] = useState([]);
  const [topic, setTopic] = useState("");
  const [subTopic, setSubTopic] = useState("");
  const [contentBody, setContentBody] = useState("");
  const [createNewTopicFlag, setCreateNewTopicFlag] = useState(false);

  const saveArticleHandler = async (event) => {
    event.preventDefault()
    console.log("anshu")
    if (createNewTopicFlag) {
      await fetch("/saveArticleWithNewTopic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      })
        .then((response) => response.json())
        .then((data) => console.log("data in saveArticleWithNewTopic", data));
    }

    await fetch("/saveArticle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic, subTopic, contentBody }),
    })
      .then((response) => response.json())
      .then((data) => console.log("data in save Article", data));
  };

  const getTopicList = () => {
    fetch("/getTopicList")
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        setTopicList(data);
      });
  };

  const subTopicHandler = (e) => {
    setSubTopic(e.target.value);
  };

  const contentBodyHandler = (e) => {
    setContentBody(e.target.value);
  };

  const topicHandler = (e) => {
    setTopic(e.target.innerText);
    if (e.target.innerText === "Create New Topic") {
      setCreateNewTopicFlag(true);
    } else {
      setCreateNewTopicFlag(false);
    }
  };

  const newTopicHandler = (e) => {
    setTopic(e.target.value);
  };
  const getForm = () => {
    return (
      <>
        <Form>
          <Form.Group className="mb-3">
            <Dropdown onClick={getTopicList} >
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                {topic.length === 0 ? "choose Topic" : topic}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  maxHeight: "200px",
                  height: "200px",
                  overflow: "auto",
                }}
              >
                {topicList.map((item) => (
                  <Dropdown.Item onClick={topicHandler}>
                    {item.TopicList}
                  </Dropdown.Item>
                ))}
                <Dropdown.Item onClick={topicHandler}>
                  Create New Topic
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          {createNewTopicFlag && (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Topic</Form.Label>
              <Form.Control
                onChange={newTopicHandler}
                placeholder="Topic"
              />
              <Form.Text className="text-muted">Enter New Topic Here</Form.Text>
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Sub-Topic</Form.Label>
            <Form.Control
              onChange={subTopicHandler}
              placeholder="Sub Topic"
            />
            <Form.Text className="text-muted">Enter sub topic here</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Body</Form.Label>
            <Form.Control
              onChange={contentBodyHandler}
              placeholder="body"
            />
          </Form.Group>

          <Button onClick={saveArticleHandler} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  };
  const arrayList = [{ title: "Write New Article", body: getForm() }];
  return (
    <>
    <div style={{ marginLeft: "20rem", marginTop: "2rem" }}>
    <Link to=".." relative='path'>Home</Link>
    </div>
    
    <div style={{ marginLeft: "20rem", marginTop: "2rem" }}>
      <CardComponent
        height="35rem"
        width="50rem"
        margin="0rem"
        array={arrayList}
      />
    </div>
    </>
   
  );
};

export default WriteNewArticlePage;
