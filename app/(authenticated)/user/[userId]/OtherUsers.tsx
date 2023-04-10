"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { User } from "@/services/users/User";
import { getUsers } from "@/services/users/get-users";

interface OtherUsersProps {
  currentUserId: number;
}

export const OtherUsers: React.FC<OtherUsersProps> = ({ currentUserId }) => {
  const [otherUsers, setOtherUsers] = useState([] as User[]);

  useEffect(() => {
    (async () => {
      const users = await getUsers();

      setOtherUsers(users.filter((user) => user.id !== currentUserId));
    })();
  }, [currentUserId]);

  if (otherUsers.length === 0) return <>Carregando...</>;

  return (
    <>
      <ul>
        {otherUsers.map((user) => (
          <li key={user.id}>
            <Link
              href={`/user/${user.id}`}
            >{`${user.first_name} ${user.last_name}`}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
