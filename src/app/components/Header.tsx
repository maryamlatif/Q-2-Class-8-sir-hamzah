import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="flex justify-between py-4 px-4 bg-lime-400 text-gray-900  max-w-screen-2xl mx-auto">
      {/* Logo */}
      <div>
        <h2 className="font-bold text-3xl text-gray-900">Maham</h2>
      </div>
      {/* Nav buttons */}
      <ul className="hidden md:block  ">
        <li className="space-x-5 py-4 font-semibold ">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
       
        </li>
      </ul>

      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <ul>
            <li className="space-x-6 py-5">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
