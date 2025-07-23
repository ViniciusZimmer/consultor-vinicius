import openWhatsApp from "../hooks/openWhatsApp";

const FloatingButton = () => {
  return (
    <button
      className="fixed bottom-5 right-5 w-14 h-14 flex items-center justify-center cursor-pointer z-50 bg-green-500 rounded-full shadow-lg animate-pulse-custom hover:scale-110 transition-transform duration-200"
      onClick={() => openWhatsApp()}
      style={{ boxShadow: "0 4px 24px 0 rgba(37, 211, 102, 0.4)" }}
    >
      <img src="/whatsapp.svg" alt="WhatsApp" className="w-8 h-8" />
      <style>{`
        @keyframes pulse-custom {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 32px rgba(37, 211, 102, 0);
            transform: scale(1.22);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            transform: scale(1);
          }
        }
        .animate-pulse-custom {
          animation: pulse-custom 2.2s cubic-bezier(.66,0,0,1) infinite;
        }
      `}</style>
    </button>
  );
};

export default FloatingButton;
