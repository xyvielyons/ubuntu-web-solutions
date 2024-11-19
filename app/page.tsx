import NavbarComponent from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import Partners from "@/components/shared/Partners";
export default function Home() {
  return (
    <div className="dark:bg-black bg-white h-full max-w-screen-xl mx-auto space-y-2 md:space-y-4">
      <NavbarComponent></NavbarComponent>
      <HeroSection></HeroSection>
      <Partners></Partners>
    </div>
  );
}
