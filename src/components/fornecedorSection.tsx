"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./../assets/css/swiperFornecedores.css";

import Image from "next/image";
import * as images from "../assets/img/Fornecedores/fornecedores"; 

const fornecedorImages = [
  images.m3,
  images.ache,
  images.cimed,
  images.compojet,
  images.cremer,
  images.descarpack,
  images.ems,
  images.equiplex,
  images.eurofarma,
  images.hipolabor,
  images.medley,
  images.medquimica,
  images.multlab,
  images.natulab,
  images.pfizer,
  images.prati,
  images.teuto,
  images.vitapan,
];

export default function FornecedorSection() {
  return (
    <article className="w-screen p-10 max-md:px-4 text-zinc-950 bg-slate-50">
      <div className="text-center items-center flex flex-col justify-center pt-16">
        <span className="font-semibold uppercase text-zinc-800">Conheça nossos</span>
        <h2 className="text-4xl font-bold text-blue-950">Fornecedores</h2>
        <p className="max-w-4xl mt-8 mb-6 text-lg">
          Na Recmed, garantimos que todos os medicamentos que distribuímos vêm de fornecedores renomados e confiáveis. Trabalhamos com uma rede de parceiros selecionados por sua qualidade e conformidade com os padrões regulatórios. Isso nos permite oferecer produtos farmacêuticos de excelência e assegurar a satisfação dos nossos clientes. Veja os nossos fornecedores e o impacto de nossa rede de parcerias na qualidade dos produtos que oferecemos.
        </p>
        <span className="text-lg">Passe para o lado e conheça nossos fornecedores.</span>
      </div>
      <div className="py-10 border-y-2">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {fornecedorImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="card flex items-center justify-center shadow-lg">
                <Image
                  src={src}
                  alt={`Logo da marca ${index + 1}`}
                  layout="intrinsic"
                  objectFit="contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
}
