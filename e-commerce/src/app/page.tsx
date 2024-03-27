import Link from "next/link";
import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import Navbar from "./_components/Navbar";
import Signup from "./content/Signup";
import Login from "./content/Login";
import { AppProps } from 'next/app';

export default async function Home({ Component, pageProps }: AppProps) {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <>
    <Navbar isAuthenticated={false} />
    <Component {...pageProps} />
  </>
  );
}


