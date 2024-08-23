import HomeSection from "@/components/homeSection";
import SobreSection from "@/components/sobreSection";
import FornecedorSection from "@/components/fornecedorSection";
import ContatoSection from "@/components/contatoSection";
import InfoSection from '@/components/infoSection';

export default function Home() {
  return (
    <>
    <main>
      <section id="Home">
        <HomeSection></HomeSection>
      </section>
      <InfoSection></InfoSection>
      <section id="Sobre">
        <SobreSection></SobreSection>
      </section>
      <section id="Fornecedores">
        <FornecedorSection></FornecedorSection>
      </section>
      <section id="Contato">
        <ContatoSection></ContatoSection>
      </section>
    </main>
    </>
  );
}
