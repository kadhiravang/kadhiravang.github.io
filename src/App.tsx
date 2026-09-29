import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Stats from './components/Stats';
import { useProjects } from './hooks/useProjects';

export default function App() {
  const projects = useProjects();
  return (
    <div className="page">
      <div className="glow glow-violet" aria-hidden="true" />
      <div className="glow glow-cyan" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Stats repoCount={projects.repoCount} />
        <Projects data={projects} />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
