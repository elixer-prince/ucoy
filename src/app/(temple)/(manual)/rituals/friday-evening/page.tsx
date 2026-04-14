import PageBanner from "@/app/(temple)/(manual)/_components/PageBanner";
import PageTitle from "@/app/(temple)/(manual)/_components/PageTitle";
import TheShema from "@/app/(temple)/(manual)/_sections/TheShema";

const Page = () => {
  return (
    <>
      <PageBanner image="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200">
        <PageTitle>Friday Evening Home Ritual</PageTitle>
      </PageBanner>

      <TheShema />
    </>
  );
};

export default Page;
