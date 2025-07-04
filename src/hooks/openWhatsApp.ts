const openWhatsApp = (message?: string) => {
  const phoneNumber = "5541998564806";
  const encodedMessage = encodeURIComponent(
    message || "Olá, gostaria de solicitar uma proposta de consórcio."
  );
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};
export default openWhatsApp;
