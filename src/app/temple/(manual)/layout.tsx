import { PropsWithChildren } from "react";

const ManualLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header>Header</header>

      <main>{children}</main>
    </>
  );
};

export default ManualLayout;
