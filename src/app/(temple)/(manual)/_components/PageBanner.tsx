import { PropsWithChildren } from "react";

interface PageBannerProps {
  image: string;
}

const PageBanner = ({
  children,
  image,
}: PropsWithChildren<PageBannerProps>) => {
  return (
    <header
      style={{
        backgroundAttachment: "fixed",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex h-[50dvh] flex-col justify-center gap-4 p-4 text-center text-white"
    >
      {children}
    </header>
  );
};

export default PageBanner;
