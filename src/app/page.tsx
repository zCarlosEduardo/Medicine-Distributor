import HomeSection from "@/components/homeSection";
import InfoSection from "@/components/infoSection";
import FornecedorSection from "@/components/fornecedorSection";
import SobreSection from "@/components/sobreSection";
import EquipeSection from "@/components/equipeSection";
import InfoContatoSection from "@/components/InfoContatoSection";

export default function Home() {
  return (
    <>
    <header className="bg-red-950"></header>
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
        </section>
      </main>
    </>
  );
}
