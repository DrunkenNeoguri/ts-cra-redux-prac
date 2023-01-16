import React from "react";
import CommentForm from "./components/features/CommentForm/CommentForm";
import CommentList from "./components/features/CommentList/CommentList";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <CommentForm />
      <CommentList />
    </Layout>
  );
}

export default App;
