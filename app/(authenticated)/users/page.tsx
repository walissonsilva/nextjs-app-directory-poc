import { getUsers } from "@/services/users/get-users";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "Users page description",
};

export default async function UsersPage() {
  const users = await getUsers();

  console.log(users);

  return (
    <main className="max-w-[1240px] mx-auto my-8 px-4">
      <h1 className="text-4xl mb-4">Usuários</h1>

      <ul className="flex flex-col gap-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              href={`user/${user.id}`}
            >{`${user.first_name} ${user.last_name} (${user.email})`}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
