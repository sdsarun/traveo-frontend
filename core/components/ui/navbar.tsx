// components
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Box } from "@mui/material";
import Logo from "./logo";

export type NavbarProps = Record<string, any>;

export default async function Navbar({}: NavbarProps) {
  return (
    <Box className="flex items-center justify-between py-4">
      <Box>
        <Logo />
      </Box>
      <Box className="flex items-start gap-2">
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton showName />
        </SignedIn>
      </Box>
    </Box>
  );
}
