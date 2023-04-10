import { User } from "@/services/users/User";
import { OtherUsers } from "./OtherUsers";

interface UserPageComponentProps {
  user: User;
}

export const UserPageComponent: React.FC<UserPageComponentProps> = ({
  user,
}) => {
  return (
    <main className="max-w-[1240px] mx-auto my-8 px-4">
      <h1 className="text-4xl mb-4">{`${user.first_name} ${user.last_name}`}</h1>

      <dl className="mb-8">
        <dt>E-mail</dt>
        <dd>{user.email}</dd>
      </dl>

      <h2 className="text-xl mb-2">Outros usuários</h2>
      <OtherUsers currentUserId={user.id} />
    </main>
  );
};
