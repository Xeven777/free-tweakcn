"use client";

import Logo from "@/assets/logo.svg";
import { UserProfileDropdown } from "@/components/user-profile-dropdown";
import Link from "next/link";
import { Button } from "./ui/button";
export function Header() {
  // const { stargazersCount } = useGithubStars("jnsahaj", "tweakcn");

  return (
    <header className="border-b">
      <div className="flex items-center justify-between gap-2 p-4">
        <div className="flex items-center gap-1">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="size-6" />
            <span className="font-bold">FreeTweakcn</span>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Button className="bg-primary/15 hover:bg-primary/30 text-primary">
            Enjoy Unlimited
          </Button>

          <UserProfileDropdown />
        </div>
      </div>
    </header>
  );
}
