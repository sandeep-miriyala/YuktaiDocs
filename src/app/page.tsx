import Hero from "@/components/home/Hero";
import { Charts, Compare, Guides, Packages, Pipeline, Stacks, Start, Stats } from "@/components/home/Sections";

export default function Home() {
  return (
    <>
      <div className="wrap"><Hero /></div>
      <Stats />
      <Packages />
      <Stacks />
      <Charts />
      <Pipeline />
      <Compare />
      <Guides />
      <Start />
    </>
  );
}
