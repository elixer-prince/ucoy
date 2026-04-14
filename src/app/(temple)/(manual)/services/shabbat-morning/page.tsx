import PageBanner from "@/app/(temple)/(manual)/_components/PageBanner";
import PageTitle from "@/app/(temple)/(manual)/_components/PageTitle";
import TheShema from "@/app/(temple)/(manual)/_sections/TheShema";

const Page = () => {
  return (
    <>
      <PageBanner image="/images/shabbat-morning-service-banner.jpg">
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
