import Layout from "@/components/layout/Layout";
import HeroSection from "../sections/HeroSection";
import PlaygroundSection from "../sections/PlaygroundSection";

// const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div className="scroll-smooth">
      <Layout pageTitle="Home">
        <HeroSection />
        <PlaygroundSection />
      </Layout>
    </div>
  );
}
