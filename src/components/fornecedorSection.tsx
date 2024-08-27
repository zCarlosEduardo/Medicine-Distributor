"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import "./../assets/css/swiperFornecedores.css";

import Image from "next/image";
import m3 from "../assets/img/Fornecedores/3M.svg";
import ache from "../assets/img/Fornecedores/Ache.svg";
import cimed from "../assets/img/Fornecedores/Cimed.svg";
import compojet from "../assets/img/Fornecedores/Compojet.svg";
import cremer from "../assets/img/Fornecedores/Cremer.svg";
import descarpack from "../assets/img/Fornecedores/Descarpack.svg";
import ems from "../assets/img/Fornecedores/EMS.svg";
import equiplex from "../assets/img/Fornecedores/Equiplex.svg";
import eurofarma from "../assets/img/Fornecedores/Eurofarma.svg";
import hipolabor from "../assets/img/Fornecedores/Hipolabor.svg";
import medley from "../assets/img/Fornecedores/Medley.svg";
import medquimica from "../assets/img/Fornecedores/Medquimica.svg";
import multlab from "../assets/img/Fornecedores/Multlab.svg";
import natulab from "../assets/img/Fornecedores/Natulab.svg";
import pfizer from "../assets/img/Fornecedores/Pfizer.svg";
import prati from "../assets/img/Fornecedores/Prati.svg";
import teuto from "../assets/img/Fornecedores/Teuto.svg";
import vitapan from "../assets/img/Fornecedores/Vitapan.svg";

export default function FornecedorSection() {
  return (
    <article className="w-screen p-10 max-md:px-4 text-zinc-950 bg-slate-50 ">
      <div className="text-center items-center flex flex-col justify-center pt-16">
        <span className="font-semibold uppercase text-zinc-800">
          Conheça nossos
        </span>
        <h2 className="text-4xl font-bold text-blue-950">Fornecedores</h2>
        <p className="max-w-4xl mt-8 mb-6 text-lg">
          Na Recmed, garantimos que todos os medicamentos que distribuímos vêm
          de fornecedores renomados e confiáveis. Trabalhamos com uma rede de
          parceiros selecionados por sua qualidade e conformidade com os padrões
          regulatórios. Isso nos permite oferecer produtos farmacêuticos de
          excelência e assegurar a satisfação dos nossos clientes. Veja os
          nossos fornecedores e o impacto de nossa rede de parcerias na
          qualidade dos produtos que oferecemos.
        </p>
        <span className="text-lg">Passe para o lado e conheça nossos fornecedores.</span>
      </div>
      <div className="py-10 border-y-2">
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {/* Card 1*/}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={m3}
                alt="Logo da marca: 3M"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 2 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={ache}
                alt="Logo da marca: Ache"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 3 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={cimed}
                alt="Logo da marca: Cimed"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 4 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={compojet}
                alt="Logo da marca: CompoJet"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 5 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={cremer}
                alt="Logo da marca: Cremer"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 6 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={descarpack}
                alt="Logo da marca: Descarpack"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 7 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={ems}
                alt="Logo da marca: EMS"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 8 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={equiplex}
                alt="Logo da marca: Equiplex"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 9 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={eurofarma}
                alt="Logo da marca: EuroFarma"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 10 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={hipolabor}
                alt="Logo da marca: Hipolabor"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 11 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={medley}
                alt="Logo da marca: Medley"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 12 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={medquimica}
                alt="Logo da marca: MedQuimica"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 13 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={multlab}
                alt="Logo da marca: Multlab"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 14 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={natulab}
                alt="Logo da marca: Natulab"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 15 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={pfizer}
                alt="Logo da marca: Pfizer"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 16 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={prati}
                alt="Logo da marca: Prati-Donaduzzi"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 17 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={teuto}
                alt="Logo da marca: Teuto"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>

          {/* Card 18 */}
          <SwiperSlide>
            <div className="card flex items-center justify-center shadow-2xl">
              <Image
                src={vitapan}
                alt="Logo da marca: Vitapan"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </article>
  );
}
