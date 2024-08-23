import image from "../assets/img/image.svg";
import Image from "next/image";

export default function SobreSection() {
  return (
    <article className="w-screen h-screen bg-zinc-50 text-zinc-950">
      <h2 className="flex justify-center text-center text-4xl font-semibold text-blue-950 pt-16 pb-5">
        Sobre
      </h2>
      <div className="flex justify-around mt-10 items-center">
        <div className="text-start flex flex-col gap-2">
          <h3 className="font-semibold text-xl">Quem Somos</h3>
          <div className="max-w-xl font-light">
            <p className="my-1 text-lg">
              A Recmed é uma distribuidora de medicamentos com um forte
              compromisso com a qualidade e a eficiência. Desde nossa fundação,
              temos nos dedicado a oferecer produtos farmacêuticos de confiança
              e um atendimento ao cliente excepcional.
            </p>
            <p className="text-lg">
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
            alt="Descrição da imagem"
            width={500}
            height={300}
          />
        </div>
      </div>
    </article>
  );
}
