import { HIGH_SHABBATOT } from "@/lib/constants/services";
import Link from "next/link";

const DesktopLinks = () => {
  return (
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
  );
};

export default DesktopLinks;
