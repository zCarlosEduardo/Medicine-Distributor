import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareWhatsapp,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface FooterTableProps {
  title: string;
  children: React.ReactNode;
}

const FooterTable: React.FC<FooterTableProps> = ({ title, children }) => (
  <div className="flex flex-col space-y-4">
    <h2 className="text-lg text-zinc-200">{title}</h2>
    <div className="flex flex-col gap-1 text-lg max-md:px-0 p-1 text-slate-50 transition-colors">
      {children}
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="w-screen bg-zinc-900">
      <article className="text-center flex flex-wrap max-lg:flex-col-reverse justify-around gap-4 items-center border-t-2 border-zinc-800 max-lg:p-6">
        {/* Copyright */}
        <span className=" text-zinc-200">
          © 2024 Copyright, Todos os direitos reservados. Feito por Carlos
          Eduardo
        </span>

        {/* Redes Sociais */}
        <div className="flex flex-row flex-nowrap gap-5 py-2 text-zinc-50 text-4xl max-md:pt-3">
          <a
            href="./../"
            aria-label="Entre em contato por WhatsApp"
            className="hover:text-green-400 transition-colors"
          >
            <FontAwesomeIcon icon={faSquareWhatsapp} />
          </a>
          <a
            href="./../"
            aria-label="Veja nosso perfil no FaceBook"
            className="hover:text-blue-400 transition-colors"
          >
            <FontAwesomeIcon icon={faSquareFacebook} />
          </a>
          <a
            href="./../"
            aria-label="Veja nosso perfil no Instagram"
            className="hover:text-purple-400 transition-colors"
          >
            <FontAwesomeIcon icon={faSquareInstagram} />
          </a>
        </div>

        {/* Credores */}
        <div className="flex text-zinc-50max-md:pt-3">
          <a
            href="./../#Credores"
            aria-label="Veja nossos Credores"
            className="text-zinc-900 bg-slate-100 font-semibold p-2 rounded-md hover:bg-amber-300 hover:text-zinc-800 transition-colors"
          >
            Credores
          </a>
        </div>
      </article>
    </footer>
  );
}
