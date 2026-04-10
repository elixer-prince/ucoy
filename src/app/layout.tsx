import "@/ui/global.css";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { PropsWithChildren } from "react";

const roboto = Roboto({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "United Congregation of Yisra'Yah",
  description: "",
};

const BaseLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html
      lang="en-JM"
      className={clsx(
        roboto.className,
        "antialiased not-motion-reduce:scroll-smooth",
      )}
    >
      <body>
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
};

export default BaseLayout;
