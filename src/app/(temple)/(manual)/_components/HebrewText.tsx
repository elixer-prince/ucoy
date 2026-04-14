import clsx from "clsx";
import { PropsWithChildren } from "react";

interface HebrewTextProps {
  transliterated?: boolean;
  translation: string;
  className?: string;
}

const HebrewText = ({
  transliterated,
  translation,
  className = "",
  children,
}: PropsWithChildren<HebrewTextProps>) => {
  const sharedAttributes = {
    lang: "",
    className: `${clsx(className, "text-red-500")}`,
  };
  const formattedTranslation =
    translation === "" ? translation : `{${translation}}`;

  return transliterated ? (
    <span>
      <span {...sharedAttributes}>{children}</span>
      <span className="text-blue-500"> {formattedTranslation}</span>
    </span>
  ) : (
    <span {...sharedAttributes} dir="rtl" title={translation}>
      {children}
    </span>
  );
};

export default HebrewText;
