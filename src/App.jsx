import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { FormspreeProvider } from '@formspree/react';

function App() {
  return (
    <FormspreeProvider project="{your-project-id}">
      <div className="overflow-x-hidden text-black dark:text-white antialiased selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-white dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
          <footer className="warm-footer py-6 text-center text-sm text-black dark:text-white">
            <p>Maintained with ❤️ Made with love</p>
          </footer>
        </div>
      </div>
    </FormspreeProvider>
  );
}

export default App;
