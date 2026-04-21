import Navbar from "./components/Navbar/page";
import Hero from "./components/Hero/page";
import About from "./components/About/page";
import Projects from "./components/Projects/page";
import Skills from "./components/Skills/page";
import Contact from "./components/Contacts/page";
import Footer from "./components/Footer/page";
import ShootingStarsBackground from "./components/shootingStartBackground";

export default function Home() {
  return (
    <main>
      <ShootingStarsBackground
        className="w-full"
        starCount={8}
        speed={5}
        tailLength={200}
        bgColor="#0000000"
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </ShootingStarsBackground>
    </main>
  );
}