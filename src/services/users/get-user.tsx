import { useEffect, useState, useMemo } from "react";
import React from "react";
import { User } from "../../lib";


const UserById = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    for (let i = 1; i <= 3; i++) {
      fetch(`http://localhost:3100/api/users/${i}`)
        .then((res) => res.json())
        .then((result) => {
          setUsers((prevUsers: any) => [...prevUsers, result]);
        });
    }
  }, []);

  return <div>{users.map(user => user.name)}</div>;
};

export default UserById;
