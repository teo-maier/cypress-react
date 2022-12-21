import { useEffect, useState } from "react";
import React from "react";

const GetUserById = () => {
  const [posts, setPosts] = useState<any>();

  useEffect(() => {
    fetch("http://localhost:3100/api/users/1")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);
  console.log(posts);
  return <div>{posts?.name}</div>;
};

export default GetUserById;
