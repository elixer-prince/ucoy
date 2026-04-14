import DesktopLinks from "@/ui/components/Navbar/DesktopLinks";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between bg-black p-4 text-white select-none">
      <Link className="flex items-center" href="/#">
        United Congregation of YisraYah
      </Link>

      <div className="flex">
        <Show when="signed-in">
          <DesktopLinks />
        </Show>

        <Show when="signed-out">
          <SignInButton />
          <SignUpButton>
            <button className="h-10 cursor-pointer rounded-full bg-purple-700 px-4 text-sm font-medium text-white sm:h-12 sm:px-5 sm:text-base">
              Sign Up
            </button>
          </SignUpButton>
        </Show>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
};

export default Navbar;
