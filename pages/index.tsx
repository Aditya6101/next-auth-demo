import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log("session: ", session);
  console.log("status: ", status);

  if (session) {
    return (
      <>
        <Image
          src={session.user.image}
          alt={session.user.name}
          height="200"
          width="200"
        />
        <p>Signed in as {session.user.email}</p> <br />
        <pre>{JSON.stringify(session.user)}</pre>
        <button onClick={() => signOut()}>Sign out</button>
        <button>
          <Link href="/protected">Go to protected page</Link>
        </button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Home;
