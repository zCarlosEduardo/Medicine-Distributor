import HomeSection from "@/components/homeSection";
import InfoSection from "@/components/infoSection";
import FornecedorSection from "@/components/fornecedorSection";
import SobreSection from "@/components/sobreSection";
import EquipeSection from "@/components/equipeSection";
import InfoContatoSection from "@/components/InfoContatoSection";
import InfoSacsection from "@/components/InfoSacSection";

export default function Home() {
  return (
    <>
      <main>
        <section id="Home">
          <HomeSection></HomeSection>
        </section>
        <section id="Fornecedores">
          <InfoSection></InfoSection>
          <FornecedorSection></FornecedorSection>
        </section>
        <section id="Sobre">
          <SobreSection></SobreSection>
        </section>
        <section id="Contato" className="bg-sky-700 text-white">
          <InfoContatoSection></InfoContatoSection>
          <EquipeSection></EquipeSection>
          <InfoSacsection></InfoSacsection>
        </section>
      </main>
    </>
  );
}
