const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mysql = require("mysql");

// SQL Connectivity
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "howareyou",
  database: "technical_dictionary",
});

// Get Topic List - drop down to write new article
// TODO: Topic List is already calculated below in blogCount
app.get("/getTopicList", (req, res) => {
  const sql = "select * from topics_table";
  console.log("req:", req.body);
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
});

// Get SubTopic List - On CLicking on a particular Topic SubTopic Cards will open
app.get("/getSubTopicList/:topicID", async (req, res) => {
  const { topicID } = req.params;
  const query = `select SubTopic as title, ArticleID, Body as body from content_table where TopicID = ${topicID}`;
  const subTopicList = await new Promise((resolve, reject) => {
    connection.query(query, function (err, results) {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
  res.json(subTopicList);
});

// Get Topic List + Blog Count - HomepageLeft Sidebar
app.get("/getTopicListWithBlogsCount", async (req, res) => {
  const sql = "select TopicID, TopicList from topics_table";
  const TopicIDLists = await new Promise((resolve, reject) => {
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

  // TODO: is this a good way to map to count the blog count
  const mappedUsers = await Promise.all(
    TopicIDLists.map(async (id) => {
      const { TopicID, TopicList } = id;
      const query = `select count(${TopicID}) from content_table where TopicID=${TopicID}`;
      let newObj;
      const results = await new Promise((resolve, reject) => {
        connection.query(query, (err, result) => {
          if (err) {
            reject(err);
          } else {
            const blogCount = result[0][`count(${TopicID})`];
            newObj = {
              TopicID: TopicID,
              TopicList: TopicList,
              blogCount: blogCount,
            };
            resolve(newObj);
          }
        });
      });
      return newObj;
    })
  );

  res.json(mappedUsers);
});

// save Article - new Topic
app.post("/saveArticleWithNewTopic", async (req, res) => {
  const TopicID = await new Promise((resolve, reject) => {
    connection.query(
      "SELECT MAX(TopicID) as max_id FROM topics_table",
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0].max_id + 1);
        }
      }
    );
  });

  const result = await new Promise((resolve, reject) => {
    connection.query(
      `insert into topics_table(TopicID, TopicList) VALUES (${TopicID}, '${req.body.topic}')`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
  res.json(result);
});

//Save new Article
app.post("/saveArticle", async (req, res) => {
  //get max TopicID + 1
  const TopicID = await new Promise((resolve, reject) => {
    connection.query(
      `SELECT TopicID FROM topics_table where topics_table.TopicList = '${req.body.topic}'`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0].TopicID);
        }
      }
    );
  });

// get max article + 1 
// TODO: lokesh: what if there is gaps in between numbers i am only finding the max value
  const ArticleID = await new Promise((resolve, reject) => {
    connection.query(
      "SELECT MAX(ArticleID) as max_id FROM content_table",
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result[0].max_id + 1);
        }
      }
    );
  });

  const result = await new Promise((resolve, reject) => {
    connection.query(
      `insert into content_table(ArticleID, TopicID, Body, SubTopic) VALUES (${ArticleID}, ${TopicID},'${req.body.contentBody}', '${req.body.subTopic}')`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          return resolve(result);
        }
      }
    );
  });
  res.json(result);
});


app.get("/", async (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(port, () => {
  console.log("I am Listening on port " + port);
});

module.exports = app;