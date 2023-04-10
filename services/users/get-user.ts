import { api } from "../api";
import { User } from "./User";

export async function getUser(userId: string): Promise<User> {
  const response = await fetch(`https://reqres.in/api/users/${userId}`, {
    next: { revalidate: 60 },
  });

  const user = await response.json();
  return user.data;
}
