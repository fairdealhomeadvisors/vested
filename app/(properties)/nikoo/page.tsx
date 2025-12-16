import content from "@/app/_content/nikoo";

import Header from "@/app/_components/Header";
import Nikoo from "@/app/_content/nikoo";
import HeroText from "@/app/_components/HeroText";
import HeroEmbed from "@/app/_components/HeroEmbed";
import TextCallout from "@/app/_components/TextCallout";
import Amenities from "@/app/_components/Amenities";
import Marquee from "@/app/_components/Marquee";
import Map from "@/app/_components/Map";
import FlatGrid from "@/app/_components/FlatGrid";
import Faq from "@/app/_components/Faq";
import Footer from "@/app/_components/Footer";

export default function Page() {
  return (
    <main className="font-clash-display">
      <section className="md:m-10 rounded-2xl overflow-hidden">
        <HeroEmbed youtubeUrl={content.hero.videoUrl}>
          <Header
            title={Nikoo.title}
            emailLink={content.hero.emailLink}
            whatsappLink={content.hero.whatsappUrl}
            phoneNumber={content.hero.phoneNumber}
          />
          <div className="md:mt-20">
            <HeroText
              heading={content.hero.heading}
              subheading={content.hero.subheading}
            />
          </div>
        </HeroEmbed>
      </section>
      <section>
        <TextCallout
          location={content.textCallout.location}
          projectName={content.textCallout.projectName}
        />
      </section>
      <section id="amenities">
        <Amenities
          title={content.amenities.title}
          image={content.amenities.image}
          items={content.amenities.items}
        />
      </section>
      <section>
        <div className="mt-10 md:mt-20">
          <Marquee
            primary={content.marquee.primary}
            secondary={content.marquee.secondary}
          />
        </div>
      </section>
      <section id="map">
        <Map
          mapEmbedUrl={content.map.mapEmbedUrl}
          location={content.map.location}
          directionsUrl={content.map.directionsUrl}
          mapImage={content.map.mapImage}
        />
      </section>
      <section id="layouts" className="bg-black min-h-screen pb-20">
        <h2 className="text-white text-2xl font-light text-center py-20">
          What you get:{" "}
          <strong className="font-helvetica">Apartments & Layouts</strong>
        </h2>
        <FlatGrid flats={content.flats} />
      </section>
      <section id="FAQ">
        <Faq faq={content.FAQ} />
      </section>
      <Footer />
    </main>
  );
}
