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
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 max-w-[1240px] mx-auto my-8 p-4"
    >
      <h1 className="text-3xl font-semibold mb-4">Login</h1>

      <div className="flex flex-col gap-2">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          placeholder="example@email.com"
          className="border-r-8 px-2 h-10 border-none"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          placeholder="example@email.com"
          className="border-r-8 px-2 h-10 border-none"
        />
      </div>

      <button
        className="px-8 py-2 border-r-8 bg-blue-900 border-none mt-2 font-bold uppercase text-sm h-10"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};
