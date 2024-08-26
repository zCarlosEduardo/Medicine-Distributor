import Image from "next/image";
import imagecontato from "../assets/img/imagecontato.svg";

export default function ContatoSection() {
  return (
    <article className="w-screen min-h-screen p-10 max-md:px-4 bg-sky-700 text-zinc-50 flex justify-around max-lg:flex-wrap pt-16 items-center">
      <div className="bg-slate-900 p-14 pt-28 max-md:pt-14 max-md:pb-5 max-md:px-3 rounded-md max-md:text-center ">
        <div className=" -translate-y-10 max-md:-translate-y-5">
          <span className="font-semibold uppercase text-zinc-100">
            Entre em
          </span>
          <h2 className="text-4xl font-bold">Contato</h2>
        </div>
        <p className="max-w-3xl text-lg">
          Na Recmed, estamos sempre prontos para ajudar! Se você tem alguma
          dúvida, precisa de informações adicionais ou deseja conversar com um
          de nossos especialistas, entre em contato conosco. Nossa equipe está
          disponível para oferecer o suporte que você precisa e responder a
          todas as suas perguntas.{" "}
          <span className="max-md:hidden">
            {" "}
            Se você deseja explorar novas oportunidades de colaboração ou tem
            interesse em se juntar à nossa equipe, nós também estamos à
            disposição.
          </span>
        </p>
        <div className="mt-10 flex max-md:flex-col gap-4">
          <a
            href="#"
            className="p-3 bg-zinc-50 rounded-md font-semibold text-zinc-900 shadow-md hover:bg-slate-300 transition-colors"
          >
            Fale com Nossos Vendedores por WhatsApp
          </a>
          <a
            href="/Curriculo"
            className="p-3 bg-amber-500 rounded-md font-semibold text-zinc-950 shadow-md hover:bg-amber-600 transition-colors"
          >
            Junte-se à Nossa Equipe
          </a>
        </div>
      </div>
      <div>
        <Image
          src={imagecontato}
          alt="Descrição da imagem"
          width={500}
          height={300}
        />
      </div>
    </article>
  );
}
