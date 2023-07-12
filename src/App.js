import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
    return (
        <>
            <Navbar />

            <HeroSection />

            <AboutSection />

            <SkillSection />

            <ProjectsSection />

            <ContactSection />

            <Footer />
        </>
    );
}
