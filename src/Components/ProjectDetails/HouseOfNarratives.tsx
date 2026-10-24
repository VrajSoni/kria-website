import {
  ProjectDetail,
  type ProjectImage,
} from "./ProjectDetail";
import MainImage from "../../data/optimized/ProjectImages/HouseOfNarratives/Carousel.webp";
import Living1 from "../../data/optimized/ProjectImages/HouseOfNarratives/Living 1.webp";
import Living2 from "../../data/optimized/ProjectImages/HouseOfNarratives/Living 2.webp";
import Living3 from "../../data/optimized/ProjectImages/HouseOfNarratives/Living 3.webp";
import Living4 from "../../data/optimized/ProjectImages/HouseOfNarratives/Living 4.webp";
import Kitchen from "../../data/optimized/ProjectImages/HouseOfNarratives/Kitchen.webp";
import DaughterRoom1 from "../../data/optimized/ProjectImages/HouseOfNarratives/Daughter room 1.webp";
import DaughterRoom2 from "../../data/optimized/ProjectImages/HouseOfNarratives/Daughter room 2.webp";
import DaughterRoom3 from "../../data/optimized/ProjectImages/HouseOfNarratives/Daughter room 3.webp";
import DaughterRoom4 from "../../data/optimized/ProjectImages/HouseOfNarratives/Daughter room 4.webp";
import Lobby from "../../data/optimized/ProjectImages/HouseOfNarratives/Lobby.webp";
import DadajiRoom1 from "../../data/optimized/ProjectImages/HouseOfNarratives/Dadaji room 1.webp";
import DadajiRoom2 from "../../data/optimized/ProjectImages/HouseOfNarratives/Dadaji room 2.webp";
import DadajiRoom3 from "../../data/optimized/ProjectImages/HouseOfNarratives/Dadaji room 3.webp";
import MasterBedroom1 from "../../data/optimized/ProjectImages/HouseOfNarratives/Master bedroom 1.webp";
import MasterBedroom2 from "../../data/optimized/ProjectImages/HouseOfNarratives/Master bedroom 2.webp";
import MasterBedroom3 from "../../data/optimized/ProjectImages/HouseOfNarratives/Master bedroom 3.webp"; 
import Gazebo1 from "../../data/optimized/ProjectImages/HouseOfNarratives/Gazebo 1.webp";
import Gazebo2 from "../../data/optimized/ProjectImages/HouseOfNarratives/Gazebo 2.webp";
import Staircase1 from "../../data/optimized/ProjectImages/HouseOfNarratives/Staircase 1.webp";
import Staircase2 from "../../data/optimized/ProjectImages/HouseOfNarratives/Staircase 2.webp";
import Staircase3 from "../../data/optimized/ProjectImages/HouseOfNarratives/Staircase 3.webp";

const images: ProjectImage[] = [
  {
    id: 1,
    src: MainImage,
    alt: "Main image",
    span: 2,
  },
  {
    id: 2,
    src: Living1,
    alt: "Living 1",
    span: 1,
  },
  {
    id: 3,
    src: Living2,
    alt: "Living 2",
    span: 1,
  },
  {
    id: 4,
    src: Living3,
    alt: "Living 3",
    span: 1,
  },
  {
    id: 5,
    src: Living4,
    alt: "Living 4",
    span: 1,
  },
  {
    id: 6,
    src: Kitchen,
    alt: "Kitchen",
    span: 2,
    aspectRatio: "aspect-[2/3]"
  },
  {
    id: 7,
    src: DaughterRoom1,
    alt: "Daughter Room 1",
    span: 1,
  },
  {
    id: 8,
    src: DaughterRoom2,
    alt: "Daughter Room 2",
    span: 1,  
  },
  {
    id: 9,
    src: DaughterRoom3,
    alt: "Daughter Room 3",
    span: 1,
  },
  {
    id: 10,
    src: DaughterRoom4,
    alt: "Daughter Room 4",
    span: 1,
  },
  {
    id: 11,
    src: Lobby,
    alt: "Lobby",
    span: 2,  
    aspectRatio: "aspect-[2/3]"
  },
  {
    id: 12,
    src: DadajiRoom1,
    alt: "Dadaji Room 1",
    span: 1,
  },
  {
    id: 13,
    src: DadajiRoom3,
    alt: "Dadaji Room 3",
    span: 1,
  },
  {
    id: 14,
    src: DadajiRoom2,
    alt: "Dadaji Room 2",
    span: 2,
    aspectRatio: "aspect-[2/3]"
  },
  {
    id: 15,
    src: MasterBedroom1,
    alt: "Master Bedroom 1",
    span: 2,
  },
  {
    id: 16,
    src: MasterBedroom2,
    alt: "Master Bedroom 2",
    span: 1,
  },
  {
    id: 17,
    src: MasterBedroom3,
    alt: "Master Bedroom 3",
    span: 1,
  },
  {
    id: 18,
    src: Gazebo1,
    alt: "Gazebo 1",
    span: 2,
  },
  {
    id: 19,
    src: Gazebo2,
    alt: "Gazebo 2",
    span: 2,
    aspectRatio: "aspect-[2/3]"
  },
  {
    id: 20,
    src: Staircase1,
    alt: "Staircase 1",
    span: 1,
  },
  {
    id: 21,
    src: Staircase2,
    alt: "Staircase 2",
    span: 1,
  },
  {
    id: 22,
    src: Staircase3,
    alt: "Staircase 3",
    span: 1,
  },
];

const overview =
  "The clients wanted to create a home rooted in mythology drawing inspirations from the" +
  "epic of Ramayana. The house is designed with traditional elements like flower motifs that" +
  "are repeated to tie all the spaces together. Incerpts from the epic are interpreted on the" +
  "walls along with furniture that is designed to blend in a traditional setting.";

export function HouseOfNarratives() {
  return (
    <ProjectDetail
      location="Vadodara"
      client="Vikas and Monika Upadhyay"
      overview={overview}
      images={images}
    />
  );
}
