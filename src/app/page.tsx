import ThreeDCardDemo from "@/components/pages/3D-CardPage";
import ContainerScrollPage from "@/components/pages/ContainerScrollPage";
import FlipWordPage from "@/components/pages/FlipWordPage";
import { MarqueePage } from "@/components/pages/MarqueePage";
import VelocityScrollPage from "@/components/pages/VelocityScrollPage";

export default function Home() {
  return (
    <>
      {/* Container Scroll section */}
      <ContainerScrollPage />
      {/* Velocity Scroll component */}
      <VelocityScrollPage />
      {/* Flip Word component */}
      <FlipWordPage />
      {/* Marquee component */}
      <MarqueePage />
      {/* Card 3d */}
      <ThreeDCardDemo/>
    </>
  );
}
