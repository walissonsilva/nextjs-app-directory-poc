import { getUser } from "@/services/users/get-user";
import { UserPageComponent } from "./UserPage";

export const metadata = {
  title: "User Page",
};

interface UserPageParams {
  params: {
    userId: string;
  };
}

const UserPage = async ({ params: { userId } }: UserPageParams) => {
  const user = await getUser(userId);

  return <UserPageComponent user={user} />;
};

export default UserPage;
