import {
  ProjectDetail,
  type ProjectImage,
} from "./ProjectDetail";
import GroundFloorPlan from "../../data/optimized/ProjectImages/RathodResidency/Ground Floor plan.webp";
import FirstFloorPlan from "../../data/optimized/ProjectImages/RathodResidency/First Floor plan.webp";

const images: ProjectImage[] = [
  {
    id: 1,
    src: GroundFloorPlan,
    alt: "Ground Floor Plan",
    span: 2,
    aspectRatio: "aspect-[7/10]"
  },
  {
    id: 2,
    src: FirstFloorPlan,
    alt: "First Floor Plan",
    span: 2,
    aspectRatio: "aspect-[7/10]"
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
