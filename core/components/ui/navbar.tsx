// components
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Box, Button } from "@mui/material";
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
          <SignInButton mode="modal">
            <Button variant="text">Sign in</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button variant="contained">Sign up</Button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton showName />
        </SignedIn>
      </Box>
    </Box>
  );
}
