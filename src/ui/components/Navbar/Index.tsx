import DesktopLinks from "@/ui/components/Navbar/DesktopLinks";
import NavbarLogo from "@/ui/components/Navbar/Logo";
import MenuIcon from "@/ui/components/Navbar/MenuIcon";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex justify-between bg-black p-4 text-white select-none">
      <div className="flex items-center gap-2">
        <MenuIcon />
        <NavbarLogo />
      </div>

      <div className="flex gap-4">
        <Show when="signed-in">
          <DesktopLinks />
        </Show>

        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
};

export default Navbar;
