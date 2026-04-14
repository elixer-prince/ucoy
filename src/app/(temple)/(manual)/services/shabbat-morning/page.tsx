import PageBanner from "@/app/(temple)/(manual)/_components/PageBanner";
import PageTitle from "@/app/(temple)/(manual)/_components/PageTitle";
import TheShema from "@/app/(temple)/(manual)/_sections/TheShema";

const Page = () => {
  return (
    <>
      <PageBanner image="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200">
        <PageTitle>Shabbat Morning Service</PageTitle>

        <div className="flex flex-col gap-2 font-bold">
          <p>Shabbat Shalom (Happy Sabbath) my brothers and sisters!</p>
          <p>
            Welcome to the Heykal (Temple) of Yahweh and the Shabbat Celebration
          </p>
        </div>
      </PageBanner>

      <TheShema />
    </>
  );
};

export default Page;
