"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export const LoginForm: React.FC = () => {
  const router = useRouter();

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    router.push("/");
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" placeholder="example@email.com" />
      </div>

      <div>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="example@email.com" />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};
