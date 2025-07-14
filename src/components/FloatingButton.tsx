import openWhatsApp from "../hooks/openWhatsApp";

const FloatingButton = () => {
  return (
    <button
      className="fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center cursor-pointer z-50"
      onClick={() => openWhatsApp()}
    >
      <img
        onClick={() => openWhatsApp()}
        src="src/assets/icons/whatsapp.svg"
        alt="WhatsApp"
      />
    </button>
  );
};

export default FloatingButton;
