import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

interface SectionWrapperProps {
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F7F5FF] text-[#14123A] selection:bg-accent-purple/20 selection:text-navy-900 relative">
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <SectionWrapper>
          <About />
        </SectionWrapper>

        {/* Skills Section */}
        <SectionWrapper>
          <Skills />
        </SectionWrapper>

        {/* Experience Section */}
        <SectionWrapper>
          <Experience />
        </SectionWrapper>

        {/* Projects Section */}
        <SectionWrapper>
          <Projects />
        </SectionWrapper>

        {/* Education & Certifications Section */}
        <SectionWrapper>
          <Education />
        </SectionWrapper>

        {/* Contact Section */}
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
