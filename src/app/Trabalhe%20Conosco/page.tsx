import InfoContatoSection from "@/components/InfoContatoSection";
import TrabalheConoscoSection from "@/components/trabalheConoscoSection";

export default function CurriculoPage() {
  return (
    <>
    <main>
      <section id="InfoContato" className="max-lg:hidden">
        <InfoContatoSection/>
      </section>
      <section id="TrabalheConosco">
      < TrabalheConoscoSection />
      </section>
    </main>
    </>
  );
};
