import Image from "next/image";
import retroCharacter from "../assets/img/RetroCharacter.svg";
import "./../assets/css/background.css";

export default function HomeSection() {
  return (
    <article className="w-screen h-screen p-10 max-md:px-4 flex flex-col lg:flex-row justify-center items-center bg-zinc-50 bg_home">
      <div className="flex flex-col text-center lg:text-left lg:items-start">
        <span className="text-xl font-semibold text-zinc-900">Bem-vindo à</span>
        <h1 className="text-8xl font-bold text-blue-950">recmed</h1>
        <p className="max-w-xl my-5 text-zinc-800 text-lg">
          Com anos de experiência no setor, nossa missão é fornecer medicamentos
          de alta qualidade e um atendimento excepcional. Trabalhamos com
          compromisso e integridade para garantir que nossos clientes tenham
          acesso às soluções de saúde que precisam, quando precisam.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="bg-amber-500 p-3 rounded-md text-lg text-black font-semibold hover:bg-amber-600 hover:text-white transition-colors"
          >
            Faça seu orçamento
          </a>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src={retroCharacter}
          alt="Personagem em formato de celular retro"
          width={500}
          height={300}
        />
      </div>
    </article>
  );
}
