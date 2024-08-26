export default function FornecedorSection() {
  return (
    <article className="w-screen p-10 max-md:px-4 text-zinc-950 bg-slate-100">
      <div className="text-center items-center flex flex-col justify-center pt-16">
        <span className="font-semibold uppercase text-zinc-800">Conheça nossos</span>
        <h2 className="text-4xl font-bold text-blue-950">Fornecedores</h2>
        <p className="max-w-4xl my-8 font-light text-lg">
          Na Recmed, garantimos que todos os medicamentos que distribuímos vêm
          de fornecedores renomados e confiáveis. Trabalhamos com uma rede de
          parceiros selecionados por sua qualidade e conformidade com os padrões
          regulatórios. Isso nos permite oferecer produtos farmacêuticos de
          excelência e assegurar a satisfação dos nossos clientes. Saiba mais
          sobre nossos fornecedores e o impacto de nossa rede de parcerias na
          qualidade dos produtos que oferecemos.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-20 mx-20">
        <div className="w-40 h-40 bg-slate-200 rounded-md shadow-lg"></div>
        <div className="w-40 h-40 bg-slate-200 rounded-md shadow-lg"></div>
        <div className="w-40 h-40 bg-slate-200 rounded-md shadow-lg max-md:hidden"></div>
        <div className="w-40 h-40 bg-slate-200 rounded-md shadow-lg max-md:hidden"></div>
        <div className="w-40 h-40 bg-slate-200 rounded-md shadow-lg max-md:hidden"></div>
        <div className="w-40 h-40 bg-slate-200 rounded-md shadow-lg max-md:hidden"></div>
        <div className="w-40 h-40 bg-slate-200 rounded-md shadow-lg max-md:hidden"></div>
        <div className="w-40 h-40 bg-slate-200 rounded-md shadow-lg max-md:hidden"></div>
      </div>
    </article>
  );
}
