import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BriefcaseBusiness, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [Search, setSearch] = useSearchParams();
  useEffect(() => {
    if (Search.get("sign-in") === "true") {
      // Show the sign-in modal if search parameter changes
      setShowSignIn(true);
    }
  }, [Search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      // Close the sign-in modal if the overlay is clicked
      setShowSignIn(false);
      setSearch({});
    }
  };
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img className="h-20" src="logo.png" alt="logo image" />
        </Link>
        <SignedOut>
          <Button
            onClick={() => {
              setShowSignIn(true);
            }}
            variant="outline"
          >
            Login
          </Button>
          {/* <SignInButton /> */}
        </SignedOut>
        <SignedIn>
          <Button variant="destructive" className="rounded-full">
            <PenBox size={20} className="mr-2" />
            Post a Job
          </Button>
          <Link to="/post-job"></Link>
          <UserButton
            appearance={{
              elemests: {
                avatarBox: "h-10 w-10",
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="My Jobs"
                labelIcon={<BriefcaseBusiness size={15} />}
                href="/my-jobs"
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </nav>

      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            signUpFallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
