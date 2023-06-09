import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Main page",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className="max-w-[1240px] mx-auto my-8 px-4">
      <h1 className="text-4xl mb-4">Home page</h1>

      <p className="mb-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, sint
        id quas quasi incidunt tenetur non saepe aut. Fuga nisi quae
        voluptatibus reprehenderit officia doloribus placeat provident corrupti
        commodi illum.
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
        obcaecati hic, nesciunt maxime nostrum adipisci soluta molestias atque,
        repellat temporibus exercitationem modi voluptate natus animi facilis
        error aliquid, nemo est.
      </p>
    </main>
  );
}
