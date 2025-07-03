import { useState } from "react";
import theme from "../theme";
import VSCLogo from "../assets/icons/VSCLogo";
import { constants } from "../constants";
import { XIcon, MenuIcon } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
          >
            {constants.header.buttonText}
          </button>
        </div>

        {/* Menu Mobile (dropdown abaixo do header) */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-black text-white px-6 py-4 space-y-4 z-20">
            <a href="#sobre" className="block text-sm">
              Sobre mim
            </a>
            <a href="#contato" className="block text-sm">
              Contato
            </a>
            <button
              className="w-full text-left font-bold px-4 py-3 rounded"
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.white,
              }}
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
