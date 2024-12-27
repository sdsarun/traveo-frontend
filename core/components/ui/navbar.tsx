import React from "react";
import Logo from "./logo";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import ThemeSwitcher from "./theme-swticher";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <Logo />
      </div>
      <div className="flex items-center gap-2">
        <SignedOut>
          <SignInButton mode="modal">
            <Button variant="light">Sign in</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton showName />
        </SignedIn>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
