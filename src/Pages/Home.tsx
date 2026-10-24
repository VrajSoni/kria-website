import { Divider } from "@fluentui/react-components";
import { ProjectsCarousel } from "../Components/ProjectsCarousel";
import { ContactUs } from "./ContactUs";
import section from "./../data/optimized/HomeSection.webp";

export function Home() {
  return (
    <div>
      <main>
        <div className="w-full pt-10">
          <img
            src={section}
            alt={"home section"}
            width="7400"
            height="1859"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="w-full h-auto block"
          />
        </div>
        <p className="text-[0.625rem] text-right">
          Ahmedabad Heritage Pol Documentation
        </p>
      </main>
      <h3 className="text-base sm:text-lg md:text-xl text-center px-6 py-8 sm:px-12 md:px-24 border-t border-neutral-300">
        ARCHITECTURE | INTERIORS | LANDSCAPE
      </h3>
      <section className="bg-[#f7f2ed] text-[#292929] text-center px-6 py-8 sm:px-12 md:px-24 border-t border-neutral-300">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">
          KRiA : in process
        </h2>
        <p className="max-w-3xl !mx-auto !mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600">
          At studio KRiA, we believe that design is an ever evolving
          journey with every step being a novel discovery. Each line,
          each stroke, each iteration brings us closer to creating
          spaces that become backdrops to countless memories.
        </p>
        <p className="max-w-3xl !mx-auto !mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600">
          Derived from the Sanskrit word, ' क्रिया', which means action/deed, KRiA for us is an 'act of doing',
          it is a continuous effort in exploring creativity and offering our services to the best of our abilities.
        </p>
        <p className="max-w-3xl !mx-auto !mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600">
          In our KRiA we strive to deliver spaces that are more than four mere walls, rather spaces which evoke a
          sense of belonging, spaces that offer a peak into nature, spaces where sunlight dances across materials
          and fresh air flows to calm the mind. We observe and understand the local context to nestle the design in
          its surrounding environment with harmony. We aim to achieve all our client's needs and uses with creativity by
          following their lifestyles to provide solutions that feel curated especially for them.
        </p>
        <p className="max-w-3xl !mx-auto !mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-600">
          Our pursuit is to weave stories the only way we know how, through architecture.
        </p>
      </section>
      <Divider className="flex justify-center flex-col" />
      <ProjectsCarousel />
      <Divider className="flex justify-center flex-col" />
      <ContactUs />
    </div>
  );
}
