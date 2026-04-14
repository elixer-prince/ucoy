import clsx from "clsx";
import { PropsWithChildren } from "react";

interface ParagraphProps {
  className?: string;
}

const Paragraph = ({
  children,
  className,
}: PropsWithChildren<ParagraphProps>) => {
  return <p className={clsx("mb-4", className)}>{children}</p>;
};

export default Paragraph;
