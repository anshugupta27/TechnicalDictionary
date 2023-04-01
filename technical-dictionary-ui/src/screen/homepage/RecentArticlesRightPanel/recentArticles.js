import React from "react";
import { CardComponent } from "../../../components";
import Row from "react-bootstrap/Row";
import './recentArticles.css'

const RecentArticles = () => {
  const articleList = [
    { title: "EC2 Instance", body: "this is the body" },
    { title: "cloud watch ", body: "this is the body" },
    { title: "Lambda ", body: "this is the body" },
    { title: "Load balancer ", body: "this is the body" },
    { title: "S3 bucket", body: "this is the body" },
  ];
  return (
    
      <div style={{ marginLeft: "33%", marginTop:'-37rem' }}>
        <div style={{textAlign:'center', marginBottom:'1rem'}}>Recent Articles</div>
        <div class="scrollCard">
       
        <Row xs={1} md={1}>
          <CardComponent width= "20rem" height= " 12rem" margin= "0rem 0rem 1rem 0rem" array={articleList} />
        </Row>
      </div>
    </div>
  );
};

export default RecentArticles;
