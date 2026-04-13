import Navbar from "@/ui/components/Navbar/Index";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>
    </>
  );
};

export default Layout;
