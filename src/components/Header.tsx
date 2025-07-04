import { useState } from "react";
import theme from "../theme";
import VSCLogo from "../assets/icons/VSCLogo";
import { constants } from "../constants";
import { XIcon, MenuIcon } from "lucide-react";
import openWhatsApp from "../hooks/openWhatsApp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = (id: string) => {
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      id="header"
      className="w-full z-30 top-0"
      style={{ backgroundColor: theme.colors.black, color: theme.colors.white }}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-20 relative">
        <div className="flex-shrink-0 w-40 md:w-56">
          <VSCLogo color={theme.colors.primary} />
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Botão desktop */}
        <div className="hidden md:block">
          <button
            id="navAction"
            className="hover:underline font-bold rounded-full py-3 px-6 shadow opacity-98 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.white,
            }}
            onClick={() => openWhatsApp()}
          >
            {constants.header.buttonText}
          </button>
        </div>

        {/* Menu Mobile (dropdown abaixo do header) */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black text-white px-6 py-4 space-y-4 z-20">
            <a
              onClick={() => handleMenuClick("profileCard")}
              className="block text-sm cursor-pointer"
            >
              Sobre mim
            </a>
            <a
              onClick={() => handleMenuClick("HowItWorks")}
              className="block text-sm cursor-pointer"
            >
              Como funciona o Consórcio
            </a>
            <a
              onClick={() => handleMenuClick("faq")}
              className="block text-sm cursor-pointer"
            >
              Perguntas Frequentes
            </a>
            <button
              className="w-full text-left font-bold px-4 py-3 rounded"
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.white,
              }}
              onClick={() => openWhatsApp()}
            >
              Solicitar proposta
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
