import DoctorList from "@/components/DoctorList";
import Brands from "@/components/Frontend/Brands";
import Hero from "@/components/Frontend/Hero";
import TabbedSection from "@/components/Frontend/TabbedSection";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Brands />
      <TabbedSection />
      <DoctorList />
      <DoctorList
        className="bg-white-100 py-8 lg:py-24"
        title="In-person doctor visit"
        isInPerson={true}
      />
    </section>
  );
}
