import content from "@/app/_content/nikoo";

import Header from "@/app/_components/Header";
import Nikoo from "@/app/_content/nikoo";
import HeroText from "@/app/_components/HeroText";
import HeroEmbed from "@/app/_components/HeroEmbed";
import TextCallout from "@/app/_components/TextCallout";
import Amenities from "@/app/_components/Amenities";
import AmenitiesList from "@/app/_components/AmenitiesList";
import Marquee from "@/app/_components/Marquee";
import Map from "@/app/_components/Map";
import LocationProximity from "@/app/_components/LocationProximity";
import FlatGrid from "@/app/_components/FlatGrid";
import Faq from "@/app/_components/Faq";
import Footer from "@/app/_components/Footer";
import InquiryModalAutoTrigger from "@/app/_components/InquiryModalAutoTrigger";
import AnimateOnScroll from "@/app/_components/AnimateOnScroll";
import FloatingCTA from "@/app/_components/FloatingCTA";

export default function Page() {
  return (
    <main className="font-clash-display">
      <InquiryModalAutoTrigger delay={7000} />
      <FloatingCTA />
      <section className="max-w-[1400px] mx-auto">
        <div className="md:m-10 md:rounded-2xl overflow-hidden bg-black">
          <HeroEmbed videoSrc={content.hero.videoSrc} placeholderImage={content.hero.placeholderImage}>
            <Header
              title={Nikoo.title}
              emailLink={content.hero.emailLink}
              whatsappLink={content.hero.whatsappUrl}
              phoneNumber={content.hero.phoneNumber}
            />
            <div className="my-10 md:my-0 md:mt-20">
              <HeroText
                heading={content.hero.heading}
                subheading={content.hero.subheading}
              />
            </div>
          </HeroEmbed>
        </div>
      </section>
      <section>
        <AnimateOnScroll animation="fade-up">
          <TextCallout
            location={content.textCallout.location}
            projectName={content.textCallout.projectName}
          />
        </AnimateOnScroll>
      </section>
      <section id="amenities" className="max-w-[1400px] mx-auto">
        <Amenities
          title={content.amenities.title}
          image={content.amenities.image}
          items={content.amenities.items}
        />
      </section>
      <section className="bg-linear-to-b from-white via-gray-50/50 to-white">
        <AmenitiesList items={content.amenitiesList} />
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
        <AnimateOnScroll animation="fade-up">
          <Map
            mapEmbedUrl={content.map.mapEmbedUrl}
            location={content.map.location}
            directionsUrl={content.map.directionsUrl}
            mapImage={content.map.mapImage}
          />
        </AnimateOnScroll>
      </section>
      <section>
        <LocationProximity items={content.proximity} />
      </section>
      <section id="layouts" className="bg-black min-h-screen pb-20">
        <AnimateOnScroll animation="fade-up">
          <h2 className="text-white text-2xl font-light text-center py-20">
            What you get:{" "}
            <strong className="font-helvetica">Apartments & Layouts</strong>
          </h2>
        </AnimateOnScroll>
        <FlatGrid flats={content.flats} />
      </section>
      <section id="FAQ" className="max-w-[1400px] mx-auto">
        <Faq faq={content.FAQ} />
      </section>
      <AnimateOnScroll animation="fade-up">
        <Footer />
      </AnimateOnScroll>
    </main>
  );
}
