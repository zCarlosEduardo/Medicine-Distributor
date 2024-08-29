import React from "react";

interface FooterTableProps {
  title: string;
  children: React.ReactNode;
}

const FooterTable: React.FC<FooterTableProps> = ({ title, children }) => (
  <div className="flex flex-col space-y-5">
    <h2 className="text-lg text-zinc-200">{title}</h2>
    <div className="flex flex-col gap-1 p-1 text-slate-50 transition-colors">
      {children}
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="w-screen bg-zinc-900">
      <article className="flex flex-row flex-wrap justify-evenly max-md:gap-10 py-10">
        {/* Links */}
        <FooterTable title="Links">
          <a
            href="./../#Home"
            aria-label="Link para seção Home"
            className="hover:text-zinc-300"
          >
            Home
          </a>
          <a
            href="./../#Sobre"
            aria-label="Link para seção Sobre"
            className="hover:text-zinc-300"
          >
            Sobre
          </a>
          <a
            href="./../#Contato"
            aria-label="Link para seção Contato"
            className="hover:text-zinc-300"
          >
            Contato
          </a>
          <a
            href="./../#Trabalhe%20Conosco"
            aria-label="Link para página Trabalhe Conosco"
            className="hover:text-zinc-300"
          >
            Trabalhe Conosco
          </a>
          <a
            href="./../#Sac"
            aria-label="Link para página Sac"
            className="hover:text-zinc-300"
          >
            Sac
          </a>
        </FooterTable>

        {/* Contate-nos */}
        <FooterTable title="Contate-nos">
          <a
            href="tel:+556290000000"
            aria-label="Ligar para (62) 90000-0000"
            className="hover:text-zinc-300"
          >
            (62) 90000-0000
          </a>
          <a
            href="mailto:email@provedor.com.br"
            aria-label="Enviar e-mail para email@provedor.com.br"
            className="hover:text-zinc-300"
          >
            email@provedor.com.br
          </a>
        </FooterTable>

        {/* Jurídico */}
        <FooterTable title="Jurídico">
          <a
            href="./../#Credores"
            aria-label="Veja nossos Credores"
            className="hover:text-zinc-300"
          >
            Credores
          </a>
        </FooterTable>
      </article>
      <article className="text-center flex justify-center">
        <span className="px-32 max-md:px-0 py-3 border-t-2 border-zinc-800 text-zinc-200">
          © 2024 Copyright, Todos os direitos reservados. Feito por Carlos
          Eduardo
        </span>
      </article>
    </footer>
  );
}
