import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CurrentWork from "@/components/CurrentWork";
import Social from "@/components/Social";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <CurrentWork />
      <Social />
      <Contact />
      <footer className="bg-ink py-8 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Abhijeet Dutta. All rights reserved.</p>
      </footer>
    </main>
  );
}
