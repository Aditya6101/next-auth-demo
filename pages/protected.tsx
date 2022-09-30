import { NextPage } from "next";
import Link from "next/link";

import { Session, User } from "next-auth";
import { signOut, getSession } from "next-auth/react";

export const getServerSideProps = async (context) => {
  const session: Session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {
      user: session.user,
    },
  };
};

const Protected: NextPage<{ user: User }> = ({ user }) => {
  return (
    <div>
      <strong>{user.name}, here is Highly confidential text for you 👇</strong>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, quam
        magnam? Sapiente, corrupti. Ipsa sit, magnam fuga libero tempora
        repudiandae dignissimos voluptates hic quae adipisci nostrum obcaecati,
        earum porro ea?
      </p>
      <button>
        <Link href="/">Go Back</Link>
      </button>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default Protected;
