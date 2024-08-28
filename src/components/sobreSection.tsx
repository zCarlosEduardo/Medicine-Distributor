import Image from "next/image";
import image from "../assets/img/image.svg";

export default function SobreSection() {
  return (
    <article className="w-screen p-10 md:pb-44 max-md:px-4 bg-white text-zinc-950">
      <h2 className="text-center text-4xl font-semibold text-blue-950 pt-16 pb-5">
        Sobre
      </h2>
      <div className="flex justify-around mt-10 items-center max-lg:justify-center flex-wrap gap-5">
        <div className="text-start flex flex-col max-w-xl gap-4 max-md:text-center">
          <h3 className="font-semibold text-xl">Quem Somos</h3>
          <div className="text-zinc-800 text-lg">
            <p className="my-4">
              A Recmed é uma distribuidora de medicamentos com um forte
              compromisso com a qualidade e a eficiência. Desde nossa fundação,
              temos nos dedicado a oferecer produtos farmacêuticos de confiança
              e um atendimento ao cliente excepcional.
            </p>
            <p className="my-4">
              Nossa equipe é formada por especialistas que garantem a entrega
              pontual e segura de medicamentos, sempre respeitando as normas e
              padrões do setor. Conheça nossa história e descubra como podemos
              ajudar a atender suas necessidades de saúde.
            </p>
          </div>
        </div>
        <div className="rounded-md shadow-lg">
          <Image
            src={image}
            alt="Imagem ilustrativa representando a Recmed"
            width={500}
            height={300}
            className="object-cover:"
          />
        </div>
      </div>
    </article>
  );
}
