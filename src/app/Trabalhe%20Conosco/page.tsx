import InfoContatoSection from "@/components/InfoContatoSection";
import TrabalheConoscoSection from "@/components/trabalheConoscoSection";
import './../../assets/css/background.css';

export default function CurriculoPage() {
  return (
    <>
    <main className="bg_trabalhe">
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
