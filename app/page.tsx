import Navbar from "./components/Navbar/page";
import Hero from "./components/Hero/page";
import About from "./components/About/page";
import Projects from "./components/Projects/page";
import Skills from "./components/Skills/page";
import Contact from "./components/Contacts/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}