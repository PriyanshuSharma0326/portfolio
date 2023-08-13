import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import { AboutSection, ContactSection, Footer, ProjectsSection, SkillsSection } from './constants/index';

export default function App() {
    return (
        <>
            <Navbar />

            <HeroSection />

            <AboutSection />

            <SkillsSection />

            <ProjectsSection />

            <ContactSection />

            <Footer />
        </>
    );
}
