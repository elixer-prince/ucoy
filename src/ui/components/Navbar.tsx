import { HIGH_SHABBATOT } from "@/lib/constants/services";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-black text-white">
      <div>United Congregation of YisraYah</div>

      <div className="flex">
        <ul className="hidden gap-4 sm:flex sm:items-center">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <span className="font-bold">High Shabbat</span>

            <ul>
              {HIGH_SHABBATOT.map(({ title, url }, index) => (
                <li key={index}>
                  <Link href={url}>{title}</Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="/temple/treasury">Treasury</Link>
          </li>
          <li>
            <Link href="/temple/rituals/home/friday-evening">
              Friday Evening Home Ritual
            </Link>
          </li>
          <li>
            <Link href="/temple/services/shabbat-morning">
              Shabbat Morning Service
            </Link>
          </li>
        </ul>

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
