import { WEEKLY } from "@/lib/constants/rituals";
import { HIGH_SHABBATOT } from "@/lib/constants/services";
import Link from "next/link";

const DesktopLinks = () => {
  return (
    <ul className="hidden gap-4 sm:flex sm:items-center">
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <details className="static open:rounded-full">
          <summary>Services</summary>

          <ul className="absolute top-15 w-40 bg-black">
            <li>
              <ul>
                <li>
                  <Link
                    className="block px-4 py-2 hover:bg-white/25"
                    href="/temple/services/shabbat-morning"
                  >
                    Shabbat Morning Service
                  </Link>
                </li>

                <details>
                  <summary>High Shabbat</summary>

                  {HIGH_SHABBATOT.map(({ title, url }, index) => (
                    <li key={index}>
                      <Link
                        className="block px-4 py-2 hover:bg-white/25"
                        href={url}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </details>
              </ul>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <details className="static open:rounded-full">
          <summary>Rituals</summary>

          <ul className="absolute top-15 w-40 bg-black">
            {WEEKLY.map(({ title, url }, index) => (
              <li key={index}>
                <Link className="block px-4 py-2 hover:bg-white/25" href={url}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>

      <li>
        <Link href="/temple/treasury">Treasury</Link>
      </li>
      <li>
        <Link href="/temple/attendance">Attendance</Link>
      </li>
      <li>
        <Link href="/temple/rituals/home/friday-evening">
          Friday Evening Home Ritual
        </Link>
      </li>
    </ul>
  );
};

export default DesktopLinks;
