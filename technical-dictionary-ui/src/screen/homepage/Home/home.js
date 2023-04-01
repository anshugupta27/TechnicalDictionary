import React from "react";
import TopicsList from "../TopicsListLeftPanel/topicsList";
import RecentArticles from "../RecentArticlesRightPanel/recentArticles";
import Facts from "../FactsMiddlePanel/facts";
import "./home.css";

const Homepage = () => {
  return (
    <>
  
      {/* <div class="Row"> */}
        <div class="second">
          <TopicsList />
        </div>
        <div class="third">
          {" "}
          <Facts />
        </div>
        <div class="first">
           
          <RecentArticles />
        </div>
      {/* </div> */}
    </>
  );
};

export default Homepage;
