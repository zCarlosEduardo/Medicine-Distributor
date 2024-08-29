import Image from "next/image";
import personCorrendo from "../assets/img/PersonCorrendo.svg";
import React from "react";

const EquipeSection = () => {
  return (
    <article className="w-screen min-h-screen p-10 max-md:px-4 bg-sky-700 text-zinc-50 flex justify-around max-lg:flex-wrap pt-16 items-center">
      <div className="bg-slate-900 p-14 pt-28 max-md:pt-14 max-md:pb-5 max-md:px-3 rounded-md max-md:text-center">
        <div className="-translate-y-10 max-md:-translate-y-5">
          <span className="font-semibold uppercase text-zinc-100">
            Fale com
          </span>
          <h2 className="text-4xl font-bold">Nossa Equipe</h2>
        </div>
        <p className="max-w-3xl text-lg">
          Na Recmed, estamos sempre prontos para ajudar! Se você tem alguma
          dúvida, precisa de informações adicionais ou deseja conversar com um
          de nossos especialistas, entre em contato conosco. Nossa equipe está
          disponível para oferecer o suporte que você precisa e responder a
          todas as suas perguntas.
          <span className="inline max-md:hidden">
            Se você deseja explorar novas oportunidades de colaboração ou tem
            interesse em se juntar à nossa equipe, nós também estamos à
            disposição.
          </span>
        </p>
        <div className="mt-10 flex max-md:flex-col gap-4">
          <a
            href="#"
            className="p-3 bg-zinc-50 rounded-md font-semibold text-zinc-900 shadow-md hover:bg-slate-300 transition-colors"
            aria-label="Fale com nossos vendedores por WhatsApp"
          >
            Fale com Nossos Vendedores por WhatsApp
          </a>
          <a
            href="/Trabalhe%20Conosco"
            className="p-3 bg-amber-500 rounded-md font-semibold text-zinc-950 shadow-md hover:bg-amber-600 transition-colors"
            aria-label="Junte-se à nossa equipe"
          >
            Junte-se à Nossa Equipe
          </a>
        </div>
      </div>
      <div>
        <Image
          src={personCorrendo}
          alt="Imagem ilustrativa de um personagem correndo na linha de chegada."
          width={500}
          height={300}
        />
      </div>
    </article>
  );
};

const MemoizedEquipeSection = React.memo(EquipeSection);
MemoizedEquipeSection.displayName = "EquipeSection";

export default MemoizedEquipeSection;
