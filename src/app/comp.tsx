import { currentUser, SignedIn } from "@clerk/nextjs";

export async function SignedInView() {
  const user = await currentUser();

  return (
    <>
      <SignedIn>
        You are signed in!
        {/* <Image src={user!.imageUrl} alt={"Profile Picture"} /> */}
        {user!.imageUrl}
      </SignedIn>
    </>
  );
}
