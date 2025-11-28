import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <LiquidEffectAnimation />

      <div className="relative z-10">
        <Hero />
      </div>
    </main>
  );
}
