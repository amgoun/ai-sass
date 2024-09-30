import { Gauge, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MobileNav from "@/components/mobile-nav";

export const Header = () => {
  const userId = false;
  return (
    <header className="sticky top-0 backdrop-blur-sm z-50">
      <div className="py-5">
        <div className="container">
          <div className=" flex items-center justify-between">
            <Image src="/assets/logo.svg" alt="logo" height={31} width={57} />
            <MobileNav />
            <nav className="  hidden md:flex gap-6 items-center">
              <Link className="hover:hover-menu" href="#services">
                Services
              </Link>
              <Link className="hover:hover-menu" href="#gallery">
                Samples
              </Link>
              <Link className="hover:hover-menu" href="#pricing">
                Pricing
              </Link>
              <Link className="hover:hover-menu " href="#testmonials">
                Testmonial
              </Link>
              {userId ? (
                <div className="flex gap-2 items-center">
                  <Gauge className="h-5 w-5" />
                  <Link href="/dashboard"> Dashboard</Link>
                </div>
              ) : (
                ""
              )}

              <div className="flex items-center gap-4 pl-4">
                {!userId ? (
                  <div className="flex gap-2 items-center">
                    <LogIn className="h-4 w-4" />
                    <Link href="/sign-in">Login</Link>
                  </div>
                ) : (
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
