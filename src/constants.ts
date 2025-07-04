import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";
import image4 from "./assets/images/image4.png";

const header = {
  buttonText: "Solicitar Proposta",
};

const hero = {
  subtitle: "Transforme seu negócio",
  title: "Soluções que impulsionam resultados",
  description:
    "Descubra como podemos ajudar você a alcançar seus objetivos com estratégias personalizadas e inovadoras.",
  buttonText: "Solicitar Proposta",
};

const profileCard = {
  sellerName: "Vinicius Scomação",
  sellerDescription:
    "Representante autorizado Consórcio Canopus e Nax Finance.",
  email: "naxvinicius@gmail.com",
  phone: "(41) 99856-4806",
  whatsapp: "(41) 99856-4806 (WhatsApp)",
  address: "Av. Manoel Ribas, 136 - Curitiba - PR",
  facebook: "Perfil Facebook",
  unitLabel: "Unidade:",
  unitName: "Curitiba – PR",
  facebookLink: "https://www.facebook.com/affinitysegurosbrasilia",
  mapsLink: "https://g.co/kgs/QAkSJ9H",
  whatsappLink: "https://wa.me/5541998564806",
  consorcioCanopusLink: "https://www.consorciocanopus.com.br/",
  naxOpenFinanceLink: "https://naxopenfinance.com",
  phoneLink: "tel:+5541998564806",
  emailLink: "mailto:naxvinicius@gmail.com",
};

const consortiumOverview = {
  title: "Como funciona o Consórcio",
  steps: [
    {
      title: "Escolha seu objetivo",
      description: "Veja qual opção e condições servem melhor a você.",
      imageAlt: "Escolha seu objetivo",
      imageSrc: image1,
    },
    {
      title: "Contribua mensalmente",
      description: "Contribua em dia para estar apto a ser contemplado.",
      imageAlt: "Contribua mensalmente",
      imageSrc: image2,
    },
    {
      title: "Fique de olho nas assembleias",
      description: "Acompanhe os sorteios ao vivo no Youtube da Canopus.",
      imageAlt: "Fique de olho nas assembleias",
      imageSrc: image3,
    },
    {
      title: "Momento da Contemplação",
      description:
        "Você pode contemplar por meio de sorteio ou utilizar a oferta de lances em diferentes modalidades.",
      imageAlt: "Momento da Contemplação",
      imageSrc: image4,
    },
  ],
};

const faq = {
  title: "Perguntas Frequentes",
  faqs: [
    {
      question: "Quanto tempo demora para ser contemplado?",
      answer:
        "O proprietário da cota está apto ao sorteio desde a primeira assembleia, mas a data exata é imprevisível. Como consultor, te mostro como aumentar suas chances através de lances múltiplos.",
    },
    {
      question: "Quais são as formas de lance?",
      answer:
        "Lances são adiantamentos de parcelas. Se contemplado, o valor ofertado abate seu saldo devedor. Existem três tipos principais: Lance Livre, Lance Fixo e Lance Limitado.",
    },
    {
      question: "Vocês possuem escritório presencial?",
      answer:
        "Sim! Estamos em Curitiba, na Av. Manoel Ribas, 136. Venha tomar um café e conversar sobre seus planos. ☕",
    },
    {
      question: "Qual a diferença entre consórcio e financiamento?",
      answer:
        "No consórcio, você não paga entrada nem juros. É como ter dinheiro à vista no momento da compra, com mais poder de negociação. Além disso, pode usar o crédito para investir ou quitar outro financiamento 💸",
    },
  ],
};

const footer = {
  description: "Representante autorizado Consórcio Canopus e Nax Finance.",
  contact: {
    email: "naxvinicius@gmail.com",
    phone: "(41) 99856-4806",
    whatsapp: "(41) 99856-4806",
    emailLink: "mailto:naxvinicius@gmail.com",
    phoneLink: "tel:+5541998564806",
    whatsappLink: "https://wa.me/5541998564806",
  },
  address: {
    location: "Av. Manoel Ribas, 136 - Curitiba - PR",
    mapsLink: "https://g.co/kgs/QAkSJ9H",
  },
  usefulLinks: [
    {
      name: "Consórcio Canopus",
      link: "https://www.consorciocanopus.com.br/",
    },
    {
      name: "Nax Open Finance",
      link: "https://naxopenfinance.com",
    },
  ],
};

const simulator = {
  title: "A hora de realizar é agora.",
  description: "Selecione sua próxima conquista:",
  options: [
    { label: "Imóveis", active: true },
    { label: "Veículos", active: false },
    { label: "Serviços", active: false },
  ],
  planPrompt: "Simule o plano por:",
  creditPrompt: "Escolha o valor do crédito:",
  creditOptions: [
    { label: "Parcela", active: true },
    { label: "Crédito", active: false },
  ],
  range: {
    min: 100000,
    max: 1000000,
  },
  simulateButton: "Simular agora",
};

const constants = {
  header,
  hero,
  profileCard,
  consortiumOverview,
  faq,
  footer,
  simulator,
};

export { constants };
