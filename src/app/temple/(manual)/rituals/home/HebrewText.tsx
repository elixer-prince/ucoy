import { PropsWithChildren } from "react";

interface HebrewTextProps {
  transliterated?: boolean;
  translation: string;
}

const HebrewText = ({
  transliterated,
  translation,
  children,
}: PropsWithChildren<HebrewTextProps>) => {
  const sharedAttributes = { lang: "", className: "text-red-500" };

  return transliterated ? (
    <span>
      <span {...sharedAttributes}>{children}</span>
      <span className="text-blue-500"> {`{${translation}}`}</span>
    </span>
  ) : (
    <span {...sharedAttributes} dir="rtl" title={translation}>
      {children}
    </span>
  );
};

export default HebrewText;
