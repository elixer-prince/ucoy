import PageTitle from "@/app/(temple)/(manual)/_components/PageTitle";
import TheShema from "@/app/(temple)/(manual)/_components/sections/TheShema";

const Page = () => {
  return (
    <>
      <header className="flex flex-col justify-center gap-4 border p-4 text-center">
        <PageTitle>Shabbat Morning Service</PageTitle>

        <div>
          <p>Shabbat Shalom (Happy Sabbath) my brothers and sisters!</p>
          <p>
            Welcome to the Heykal (Temple) of Yahweh and the Shabbat Celebration
          </p>
        </div>
      </header>

      <TheShema />
    </>
  );
};

export default Page;
