import { api } from "../api";
import { User } from "./User";

export async function getUsers(): Promise<User[]> {
  const users = await api.get("/api/users");
  return users.data.data;
}
