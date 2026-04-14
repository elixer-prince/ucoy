import DesktopLinks from "@/ui/components/Navbar/DesktopLinks";
import NavbarLogo from "@/ui/components/Navbar/Logo";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between bg-black p-4 text-white select-none">
      <div className="flex items-center gap-2">
        <NavbarLogo />
      </div>

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
