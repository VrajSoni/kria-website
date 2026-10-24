import {
  ProjectDetail,
  type ProjectImage,
} from "./ProjectDetail";
import Living1 from "../../data/optimized/ProjectImages/DecentResidency/Living_1.webp";
import Living2 from "../../data/optimized/ProjectImages/DecentResidency/Living_2.webp";
import Living3 from "../../data/optimized/ProjectImages/DecentResidency/Living_3.webp";
import Living4 from "../../data/optimized/ProjectImages/DecentResidency/Living_4.webp";
import Living5 from "../../data/optimized/ProjectImages/DecentResidency/Living_5.webp";
import Bedroom1 from "../../data/optimized/ProjectImages/DecentResidency/Bedroom_1.webp";
import Bedroom2 from "../../data/optimized/ProjectImages/DecentResidency/Bedroom_2.webp";
import Staircase1 from "../../data/optimized/ProjectImages/DecentResidency/Staircase_1.webp";
import Staircase2 from "../../data/optimized/ProjectImages/DecentResidency/Staircase_2.webp";

const images: ProjectImage[] = [
  {
    id: 1,
    src: Living1,
    alt: "Living 1",
    span: 2,
  },
  {
    id: 2,
    src: Bedroom1,
    alt: "Bedroom 1",
    span: 1,
  },
  {
    id: 3,
    src: Bedroom2,
    alt: "Bedroom 2",
    span: 1,
  },
  {
    id: 4,
    src: Staircase1,
    alt: "Staircase 1",
    span: 1,
  },
  {
    id: 5,
    src: Living2,
    alt: "Living 2",
    span: 1,
  },
  {
    id: 6,
    src: Living3,
    alt: "Living 3",
    span: 1,
  },
  {
    id: 7,
    src: Living4,
    alt: "Living 4",
    span: 1,
  },
  {
    id: 8,
    src: Living5,
    alt: "Living 5",
    span: 1,
  },
  {
    id: 9,
    src: Staircase2,
    alt: "Staircase 2",
    span: 1,
  }
];

const overview =
  "The house is designed with simple sober elements and contrasting colours to create" +
  "a rich experience. All the spaces are connected through large openings so the design also " +
  "seamlessly follows through the circulation with features like a console that is continous from" +
  "the living area to the pooja area.";

export function DecentResidency() {
  return (
    <ProjectDetail
      location="Mhow, Indore"
      overview={overview}
      images={images}
    />
  );
}
