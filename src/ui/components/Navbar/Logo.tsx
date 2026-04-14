import Link from "next/link";

const NavbarLogo = () => {
  return (
    <Link className="flex items-center text-lg font-bold" href="/#">
      <span className="sm:hidden">UCOY</span>
      <span className="max-sm:hidden">
        United Congregation of Yisra&apos;Yah
      </span>
    </Link>
  );
};

export default NavbarLogo;
