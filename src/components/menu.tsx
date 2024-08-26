"use client";

import Link from "next/link";

import { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Baloo_2 } from "next/font/google";

const baloo_2 = Baloo_2({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: [ "400", "500", "600", "700"],
  style: ['normal'],
  display: 'swap',
});

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header className="bg-white w-screen">
      <nav className="bg-white border-b border-gray-200 relative">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="text-blue-950 font-bold text-xl" style={baloo_2.style}>recmed</div>

          {/* Links for Desktop */}
          <div className="hidden md:flex flex-grow justify-end space-x-4">
            <a
              href="./../"
              className="text-zinc-900 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="./../#Sobre"
              className="text-zinc-900 hover:text-blue-600 transition-colors"
            >
              Sobre
            </a>
            <a
              href="./../#Fornecedores"
              className="text-zinc-900 hover:text-blue-600 transition-colors"
            >
              Fornecedores
            </a>
            <a
              href="./../#Contato"
              className="text-zinc-900 hover:text-blue-600 transition-colors"
            >
              Contato
            </a>
          </div>

          {/* Menu Toggle Button for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              className="text-zinc-900 text-2xl"
            >
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white border-t border-gray-300 ${
            isOpen ? "block" : "hidden"
          }`}
          role="navigation"
        >
          <div className="flex flex-col p-4 space-y-5">
            <Link
              href="./../"
              className="text-zinc-900 text-xl hover:text-zinc-600 transition-colors text-center border-x-2"
              onClick={toggleMenu}
              role="button"
            >
              Home
            </Link>
            <a
              href="#Sobre"
              className="text-zinc-900 text-xl hover:text-zinc-600 transition-colors text-center border-x-2"
              onClick={toggleMenu}
              role="button"
            >
              Sobre
            </a>
            <a
              href="#Fornecedores"
              className="text-zinc-900 text-xl hover:text-zinc-600 transition-colors text-center border-x-2"
              onClick={toggleMenu}
              role="button"
            >
              Fornecedores
            </a>
            <a
              href="#Contato"
              className="text-zinc-900 text-xl hover:text-zinc-600 transition-colors text-center border-x-2"
              onClick={toggleMenu}
              role="button"
            >
              Contato
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
