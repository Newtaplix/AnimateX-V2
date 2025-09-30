import { Hero } from "@/components/main/Hero";
import { Navbar } from "@/components/main/Navbar";
import { Features } from "@/components/main/Features";
import { Community } from "@/components/main/Community";
import { Testimonials } from "@/components/main/testimonials";
import { Pricing } from "@/components/main/Pricing";
import { Footer } from "@/components/main/Footer";
import { AboutMe } from "@/components/main/AboutMe";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-24">
      	<Navbar/>
        <Hero/>
        <Features/>
        <Pricing/>
        <Community/>
        <Testimonials/>
        <AboutMe/>
        <Footer/>
    </div>
  );
}
