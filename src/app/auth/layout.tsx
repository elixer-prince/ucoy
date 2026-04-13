import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="flex items-center justify-center border py-8">
      {children}
    </main>
  );
};

export default Layout;
