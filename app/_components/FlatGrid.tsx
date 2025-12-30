import { StaggerChildren, StaggerItem } from "./AnimateOnScroll";
import FlatCard from "./FlatCard";

interface FlatGridProps {
  flats: {
    title: string;
    image: string;
    plan: string;
  }[];
}

export default function FlatGrid(props: FlatGridProps) {
  return (
    <StaggerChildren
      className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto"
      staggerDelay={0.12}
    >
      {props.flats.map((flat, index) => (
        <StaggerItem key={index}>
          <FlatCard flat={flat} index={index} />
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
