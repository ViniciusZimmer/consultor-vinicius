import image1 from "./assets/images/image1.webp";
import image2 from "./assets/images/image2.webp";
import image3 from "./assets/images/image3.webp";
import image4 from "./assets/images/image4.webp";

const header = {
  buttonText: "Solicitar Proposta",
  whatsappNumber: "5541997342568",
};

const hero = {
  subtitle: "Realize seus sonhos com o Consórcio Canopus",
  title: "Sem juros, sem entrada e com parcelas acessíveis",
  description:
    "Especialista em Consórcios Automotivos e Imobiliários em Curitiba e Região Metropolitana. Transforme suas metas em conquistas com quem entende do assunto!",
  buttonText: "Solicitar Proposta",
};

const profileCard = {
  sellerName: "Vinicius Scomação",
  sellerDescription:
    "Representante autorizado Consórcio Canopus e Nax Finance.",
  email: "naxvinicius@gmail.com",
  phone: "(41) 99734-2568",
  whatsapp: "(41) 99734-2568 (WhatsApp)",
  address: "Av. Manoel Ribas, 136 - Curitiba - PR",
  facebook: "Perfil Facebook",
  unitLabel: "Unidade:",
  unitName: "Curitiba – PR",
  facebookLink: "https://www.facebook.com/affinitysegurosbrasilia",
  mapsLink: "https://g.co/kgs/QAkSJ9H",
  whatsappLink: "https://wa.me/5541997342568",
  consorcioCanopusLink: "https://www.consorciocanopus.com.br/",
  naxOpenFinanceLink: "https://naxopenfinance.com",
  phoneLink: "tel:+5541997342568",
  emailLink: "mailto:naxvinicius@gmail.com",
};

const consortiumOverview = {
  title: "Como funciona o Consórcio",
  steps: [
    {
      title: "Escolha seu bem",
      description: "Veja qual opção e condições servem melhor a você.",
      imageAlt: "Escolha seu bem",
      imageSrc: image1,
    },
    {
      title: "Contribua mensalmente",
      description:
        "Mantenha seus pagamentos em dia para estar apto a ser contemplado.",
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
        "O proprietário da cota está apto ao sorteio desde a primeira assembleia, mas a data exata é imprevisível. Como consultor especialista, mostro a você como aumentar as suas chances de contemplação através do estudo de gruposd e a utilização de lances múltiplos.",
    },
    {
      question: "Quais são as formas de lance?",
      answer:
        "Sim, é possível utilizar o seu FGTS no seu consórcio imobiliário, desde que você atenda a algumas regras definidas pela Caixa Econômica Federal. O saldo do FGTS pode ser utilizado em três principais situações: Trabalhar com carteira assinada há pelo menos 3 anos (Somando todas as experiências).\nEstar adquirindo o primeiro imóvel",
    },
    {
      question: "Vocês vendem para todo o Brasil?",
      answer:
        "Sim, comercializamos nossas soluções para todo o Brasil, e estamos localizados presencialmente em Curitiba na Av. Manoel Ribas, 136. Venha tomar um cafézinho com a gente, e conversar sobre o seu planejamento financeiro.",
    },
    {
      question: "Qual a diferença entre consórcio e financiamento?",
      answer:
        "No consórcio, você não paga entrada nem juros. É como ter dinheiro à vista no momento da compra, com mais poder de negociação. Além disso, pode usar o crédito para investir ou quitar outro financiamento 💸",
    },
  ],
  bottomText: {
    mainText: "Ainda tem dúvidas sobre como funciona o consórcio de",
    highlightedText: "imóveis, carros ou motos?",
    subText:
      "Se quiser entender melhor as condições, simular um plano ou saber qual decisão combina mais com o seu objetivo, é só entrar em contato. Vamos te orientar de forma clara e sem compromisso, buscando a solução que funcione melhor para você.",
  },
};

const footer = {
  description: "Representante autorizado Consórcio Canopus e Nax Finance.",
  contact: {
    email: "naxvinicius@gmail.com",
    phone: "(41) 99734-2568",
    whatsapp: "(41) 99734-2568",
    emailLink: "mailto:naxvinicius@gmail.com",
    phoneLink: "tel:+5541997342568",
    whatsappLink: "https://wa.me/5541997342568",
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
