import HomeSection from "@/components/homeSection";
import InfoSection from '@/components/infoSection';
import FornecedorSection from "@/components/fornecedorSection";
import SobreSection from "@/components/sobreSection";
import ContatoSection from "@/components/contatoSection";

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
      <section id="Contato">
        <ContatoSection></ContatoSection>
      </section>
    </main>
    </>
  );
}
