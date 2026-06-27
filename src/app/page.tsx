import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import EventsPreview from "@/components/sections/EventsPreview";
import HoursBar from "@/components/sections/HoursBar";
import EmailSignup from "@/components/sections/EmailSignup";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <EventsPreview />
      <HoursBar />
      <EmailSignup />
      <Footer />
    </main>
  );
}
