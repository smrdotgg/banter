"use client";

import { trpc } from "@/utils/trpc";
import { SignIn, UserButton, auth, useAuth } from "@clerk/nextjs";
import { ChangeEvent, useState } from "react";

function Home() {
  return (
    <div>
      <FirstComp />
    </div>
  );
}

const DEFAULT_TEXT = "world";

function FirstComp() {
  return <SignIn  />;

  return (
    <div>
      <SignIn />
      {/* {userId} */}
      {/* <UserButton afterSignOutUrl="/" /> */}
    </div>
  );
}

export default trpc.withTRPC(Home);
