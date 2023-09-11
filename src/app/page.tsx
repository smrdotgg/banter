"use client";

import LeftBar from "@/components/signed_in/left_bar";
import { Button } from "@/components/ui/button";
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
        <div className="h-screen w-screen max-h-screen flex bg-slate-700">
          <LeftBar />
        </div>
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
