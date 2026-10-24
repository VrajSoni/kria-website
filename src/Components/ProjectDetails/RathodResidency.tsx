import {
  ProjectDetail,
  type ProjectImage,
} from "./ProjectDetail";
import GroundFloorPlan from "../../data/optimized/ProjectImages/RathodResidency/Ground Floor Plan.webp";
import FirstFloorPlan from "../../data/optimized/ProjectImages/RathodResidency/First Floor Plan.webp";

const images: ProjectImage[] = [
  {
    id: 1,
    src: GroundFloorPlan,
    alt: "Ground Floor Plan",
    span: 2,
      aspectRatio: "aspect-[4/3]"
  },
  {
    id: 2,
    src: FirstFloorPlan,
    alt: "First Floor Plan",
    span: 2,
    aspectRatio: "aspect-[4/3]"
  }
];

const overview =
  "";

export function RathodResidency() {
  return (
    <ProjectDetail
      client="Hirabhai Rathod"
      location="Ahmedabad"
      overview={overview}
      images={images}
    />
  );
}
