import { useEffect, useState, useMemo } from "react";
import React from "react";
import { User } from "../../lib";

const AllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3100/api/users`)
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  return <div>{users.map((user) => user.name)}</div>;
};

export default AllUsers;
