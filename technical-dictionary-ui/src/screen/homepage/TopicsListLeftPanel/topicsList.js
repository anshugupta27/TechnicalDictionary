import React, { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import SubTopicListPage from "../../subTopicListPage/subTopicListPage";
import "./topicsList.css";

const TopicsBar = () => {
  const [topicListCount, setTopicListCount] = useState([]);

  const navigate = useNavigate();

  const navigationHandler = (topic, TopicID) => {
    navigate(`/articleList/${topic}`, {state:{paramTopic: topic, paramTopicID: TopicID}});
  }

  useEffect(() => {
    fetch("/getTopicListWithBlogsCount")
      .then((response) => response.json())
      .then((data) => {
        setTopicListCount(data);
      });
  }, []);

 
  return (
    <div class="topic">
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>Topics</div>
      <div class="scrollCard">
        {topicListCount.map((index) => (
          <div className="container">
            <Button variant="outline-secondary" onClick={() => navigationHandler(index.TopicList, index.TopicID)}>
              {index.TopicList} <Badge bg="secondary">{index.blogCount}</Badge>
            </Button>
       
          </div>
        ))}
      </div>

    </div>
  );
};

export default TopicsBar;
