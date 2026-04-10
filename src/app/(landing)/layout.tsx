import Navbar from "@/ui/components/Navbar/Index";
import { PropsWithChildren } from "react";

const LandingPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
};

export default LandingPageLayout;
