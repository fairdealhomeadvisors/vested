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
    <div className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto">
      {props.flats.map((flat, index) => (
        <FlatCard key={index} flat={flat} />
      ))}
    </div>
  );
}
