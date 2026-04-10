import Navbar from "@/ui/components/Navbar";
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
