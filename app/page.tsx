import NavbarComponent from "@/components/shared/Navbar";
import HeroSection from "@/components/shared/HeroSection";
import Partners from "@/components/shared/Partners";
import About from "@/components/shared/About";
import ServicesSection from "@/components/shared/ServicesSection";
import Footer from "@/components/shared/Footer";
export default function Home() {
  return (
    <div className="dark:bg-black bg-background h-full max-w-screen-xl mx-auto space-y-2 md:space-y-4">
      <NavbarComponent></NavbarComponent>
      <HeroSection></HeroSection>
      <Partners></Partners>
      <About></About>
      <ServicesSection></ServicesSection>
      <Footer></Footer>
    </div>
  );
}
