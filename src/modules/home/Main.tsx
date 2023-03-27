import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import React from "react";

export default function Main() {
  return (
    <div className="bg-blue-600">
      <Header />
      <Section />
      <Contact />
      <Footer />
    </div>
  );
}
