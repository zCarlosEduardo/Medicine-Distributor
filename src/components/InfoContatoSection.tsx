import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

interface ContactInfoProps {
  icon: any;
  title: string;
  children: React.ReactNode;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, children }) => (
  <div className="flex flex-wrap justify-start max-md:w-80 w-96 max-sm:flex-col gap-3 bg-white p-4 shadow-md rounded-md">
    <div className="text-blue-950 text-2xl  flex justify-center items-center">
      <FontAwesomeIcon icon={icon} className="p-4 shadow-md rounded-md" />
    </div>
    <div className="text-zinc-900 flex-col space-y-2 max-md:text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex flex-col space-y-1 max-w-72 max-md:text-center">
        {children}
      </div>
    </div>
  </div>
);

export default function InfoContatoSection() {
  return (
    <article className="w-screen py-5 flex flex-col justify-center items-center space-y-14">
      <div className="text-center">
        <span className="text-xl font-semibold">Entre em</span>
        <h1 className="text-4xl font-bold">Contato</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-14">
        
        {/* Telefone */}
        <ContactInfo icon={faPhone} title="Telefone">
          <a href="tel:+55 (62) 900000000" aria-label="Ligar para (62) 900000000">(62) 900000000</a>
          <a href="tel:+55 (62) 900000000" aria-label="Ligar para (62) 900000000">(62) 900000000</a>
        </ContactInfo>

        {/* E-mail */}
        <ContactInfo icon={faEnvelope} title="E-mail">
          <a href="mailto:email@provedor.com.br" aria-label="Enviar e-mail para email@provedor.com.br">email@provedor.com.br</a>
          <a href="mailto:email@provedor.com.br" aria-label="Enviar e-mail para email@provedor.com.br">email@provedor.com.br</a>
        </ContactInfo>

        {/* Endereço */}
        <ContactInfo icon={faLocationDot} title="Endereço">
          <a
            href="https://maps.app.goo.gl/CP27DmKWbzkyD9WD8"
            aria-label="Ver endereço no Google Maps"
            target="_blank"
            rel="noopener noreferrer"
            className="max-md:text-center max-w-max"
          >
            R. Galileu, 220 - Jardim Europa, Goiânia - GO, 74325-060
          </a>
        </ContactInfo>
      </div>
    </article>
  );
}
