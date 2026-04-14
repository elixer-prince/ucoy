import clsx from "clsx";
import { PropsWithChildren } from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ children, level }: PropsWithChildren<HeadingProps>) => {
  const sharedStyles = "mb-2 font-bold";

  switch (level) {
    case 1:
      return (
        <h1 className={clsx(sharedStyles, "text-center text-2xl")}>
          {children}
        </h1>
      );
    case 2:
      return <h2 className={clsx(sharedStyles, "text-xl")}>{children}</h2>;
    case 3:
      return <h3 className={clsx(sharedStyles, "text-lg")}>{children}</h3>;
    case 4:
      return <h4 className={clsx(sharedStyles, "text-base")}>{children}</h4>;
    case 5:
      return <h5 className={clsx(sharedStyles, "text-sm")}>{children}</h5>;
    case 6:
      return <h6 className={clsx(sharedStyles, "text-xs")}>{children}</h6>;
  }
};

export default Heading;
