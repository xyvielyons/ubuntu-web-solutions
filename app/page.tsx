import NavbarComponent from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import Partners from "@/components/shared/Partners";
export default function Home() {
  return (
    <div className="dark:bg-black bg-slate-50 h-full max-w-screen-xl mx-auto">
      <NavbarComponent></NavbarComponent>
      <HeroSection></HeroSection>
      <Partners></Partners>
    </div>
  );
}
