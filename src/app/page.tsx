import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="ghost" size="lg" className="flex items-center gap-2">
            Sign In
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button size="lg" className="flex items-center gap-2">
            Sign Up
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
