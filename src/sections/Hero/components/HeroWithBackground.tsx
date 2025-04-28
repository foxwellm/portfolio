import { Chevron } from "./Chevron";
import { HeroWrapper } from "./HeroWrapper";
import { VantaBackground } from "./VantaBackground";


export default function HeroWithBackground() {
  return (
    <HeroWrapper
      background={<VantaBackground />}
      scrollDownIndicator={<Chevron />}
    />
  );
}
