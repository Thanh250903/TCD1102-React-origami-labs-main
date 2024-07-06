import React, { useContext, useEffect, useCallback } from "react";
import Posts from "../../../components/posts/Posts";
import OrigamiContext from "../../../context/origami/OrigamiContext";

const Home = () => {
  const origamiContext = useContext(OrigamiContext);
  const { publicPosts, getPublicPosts } = origamiContext;

  const memoizedGetPublicPosts = useCallback(() => {
    getPublicPosts();
  }, [getPublicPosts]);

  useEffect(() => {
    memoizedGetPublicPosts();
  }, [memoizedGetPublicPosts]);

  return (
    <div className="Main">
      <h1>Soooooooooooooooome Heading</h1>
      <Posts posts={publicPosts} />
    </div>
  );
};

export default Home;
