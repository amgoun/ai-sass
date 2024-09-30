"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const menu = [
  {
    name: "services",
    href: "#services",
  },
  {
    name: "samples",
    href: "/#samples",
  },
  {
    name: "Pricing",
    href: "/#pricing",
  },
  {
    name: "Testmonial",
    href: "/#testmonial",
  },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <Menu className=" flex size-5 text-whiter  md:hidden " />
      </SheetTrigger>
      <SheetContent>
        <div className="mb-40 mt-32 flex items-center justify-center">
          <Link href="/">
            <Image
              src="/assets/logo.svg"
              height={60.53}
              width={47.35}
              alt="logo"
            />
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 ">
          {menu.map((item, index) => (
            <Link href={item.href} key={index} className="capitalize">
              <span className="pb-2 hover:hover-menu">{item.name}</span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
