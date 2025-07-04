const openWhatsApp = (message?: string) => {
  const phoneNumber = "5541997342568";
  const encodedMessage = encodeURIComponent(
    message || "Olá, gostaria de solicitar uma proposta de consórcio."
  );
  window.location.href = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
export default openWhatsApp;
