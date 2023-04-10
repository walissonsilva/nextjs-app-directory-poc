import { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page description",
};

export default function LoginPage() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}
