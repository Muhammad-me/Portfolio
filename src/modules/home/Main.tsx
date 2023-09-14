import ArrowLongDown from "@/assets/icon/ArrowLongDown";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Section from "@/components/Section";
import React from "react";

export default function Main() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="bg-blue-600">
      <Header />
      <div className="relative">
        <div
          onClick={() => scrollToTop()}
          className="rotate-180 fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-violet-700 flex justify-center items-center cursor-pointer">
          <ArrowLongDown />
        </div>
      </div>
      <Section />
      <div className="bg-white">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
