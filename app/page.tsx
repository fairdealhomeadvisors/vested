import Header from "./_components/Header";
import Nikoo from "./_content/nikoo";
import HeroText from "./_components/HeroText";
import HeroEmbed from "./_components/HeroEmbed";
import TextCallout from "./_components/TextCallout";
import Amenities from "./_components/Amenities";
import Marquee from "./_components/Marquee";
import Map from "./_components/Map";
import Faq from "./_components/Faq";
import FlatGrid from "./_components/FlatGrid";

export default function Home() {
  return (
    <>
      <main className="font-clash-display">
        <div className="md:m-10 rounded-2xl overflow-hidden">
          <HeroEmbed youtubeUrl="https://www.youtube.com/watch?v=-Zi1F9-Uqn8">
            <Header title={Nikoo.title} />
            <div className="md:mt-20">
              <HeroText />
            </div>
          </HeroEmbed>
        </div>
        <div>
          <TextCallout />
        </div>
        <div>
          <Amenities />
        </div>
        <div className="mt-10 md:mt-20">
          <Marquee />
        </div>
        <div>
          <Map />
        </div>
        <section className="bg-black min-h-screen pb-20">
          <h2 className="text-white text-2xl font-light text-center py-10">
            What you get:{" "}
            <strong className="font-helvetica">Apartments & Layouts</strong>
          </h2>
          <FlatGrid />
        </section>
        <section>
          <Faq />
        </section>
      </main>
    </>
  );
}
