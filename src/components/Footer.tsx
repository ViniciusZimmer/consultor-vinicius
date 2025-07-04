import theme from "../theme";
import VSCLogo from "../assets/icons/VSCLogo";
import { constants } from "../constants";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: theme.colors.black }} className="py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8 text-white">
        <div className="flex flex-col md:flex-row md:justify-between py-6">
          {/* Logo e descrição */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a
              className="no-underline hover:no-underline font-bold text-2xl lg:text-4xl flex items-center justify-center md:justify-start"
              href="#"
            >
              <VSCLogo color={theme.colors.primary} size={28} />
            </a>
            <p className="text-sm mt-4">{constants.footer.description}</p>
          </div>

          {/* Contato */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p
              className="uppercase text-gray-500 mb-4"
              style={{ color: theme.colors.white }}
            >
              Contato
            </p>
            <ul className="list-reset">
              <li className="mt-2">
                <a
                  href={constants.footer.contact.emailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline"
                  style={{ color: theme.colors.lightBlue }}
                >
                  Email: {constants.footer.contact.email}
                </a>
              </li>
              <li className="mt-2">
                <a
                  href={constants.footer.contact.phoneLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline"
                  style={{ color: theme.colors.lightBlue }}
                >
                  Telefone: {constants.footer.contact.phone}
                </a>
              </li>
              <li className="mt-2">
                <a
                  href={constants.footer.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline"
                  style={{ color: theme.colors.lightBlue }}
                >
                  WhatsApp: {constants.footer.contact.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p
              className="uppercase text-gray-500 mb-4"
              style={{ color: theme.colors.white }}
            >
              Endereço
            </p>
            <ul className="list-reset">
              <li className="mt-2">{constants.footer.address.location}</li>
              <li className="mt-2">
                <a
                  href={constants.footer.address.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline"
                  style={{ color: theme.colors.lightBlue }}
                >
                  Localização no Google Maps
                </a>
              </li>
            </ul>
          </div>

          {/* Links úteis */}
          <div className="text-center md:text-left">
            <p
              className="uppercase text-gray-500 mb-4"
              style={{ color: theme.colors.white }}
            >
              Links úteis
            </p>
            <ul className="list-reset">
              {constants.footer.usefulLinks.map((link, index) => (
                <li key={index} className="mt-2">
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline"
                    style={{ color: theme.colors.lightBlue }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
