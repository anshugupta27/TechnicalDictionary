import React from "react";
import { Home } from "./screen/homepage";
import { SubTopicListPage } from "./screen/subTopicListPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./screen/Root";
import ArticlePage from "./screen/ArticlePage/articlePage";
import WriteNewArticlePage from "./screen/WriteNewArticlePage/writeNewArticlePage";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/articleList/:topic", element: <SubTopicListPage /> },
      { path: "/articleList/article", element: <ArticlePage /> },
      { path: "/newArticle", element: <WriteNewArticlePage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
