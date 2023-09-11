"use client";

import { trpc } from "@/utils/trpc";
import {
  SignIn,
  SignedIn,
  SignedOut,
  UserButton,
  auth,
  currentUser,
  useClerk,
} from "@clerk/nextjs";
import Image from "next/image";

function Home() {
  return (
    <div>
      <FirstComp />
    </div>
  );
}

function FirstComp() {
  return (
    <>
      <SignInDialog />
      <SignedInView />
    </>
  );
}

export default trpc.withTRPC(Home);

function SignedInView() {
  // const user = auth();
  const data = trpc.getCurrUser.useQuery();
  // if (!user.user) return <></>
  const { signOut } = useClerk();

  if (data.isLoading) return <>loading</>;

  return (
    <>
      <SignedIn>
        You are signed in!
        <Image
          src={data.data!.imageUrl}
          alt={"Profile Picture"}
          width={100}
          height={100}
        />
        <button onClick={(_) => signOut()} className="bg-white hover:bg-slate-100 text-black p-1 m-1 rounded"> Signout </button>
      </SignedIn>
    </>
  );
}

function SignInDialog() {
  return (
    <>
      <SignedOut>
        <div className="flex align-middle justify-center min-h-screen">
          <div className="my-auto">
            <SignIn />
          </div>
        </div>
      </SignedOut>
    </>
  );
}
