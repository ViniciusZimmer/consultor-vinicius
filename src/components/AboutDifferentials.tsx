import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import theme from "../theme";

const AboutDifferentials = () => {
  const [activeTab, setActiveTab] = useState<"about" | "differentials">(
    "about"
  );

  const aboutContent = [
    {
      icon: "🏆",
      title: "18 Anos de Experiência",
      description: "Quase duas décadas no segmento de consórcio.",
    },
    {
      icon: "⭐",
      title: "Maior Taxa de Contemplação",
      description: "O melhor índice de contemplação do Brasil.",
    },
    {
      icon: "🚗",
      title: "Marcas Renomadas",
      description: "Toyota, BMW, Mini, Chery e Honda.",
    },
  ];

  const differentialsContent = [
    {
      icon: "💳",
      title: "Lance Parcelado",
      description: "Parcele seu lance em até 4x ou use o próprio crédito.",
    },
    {
      icon: "👥",
      title: "Grupos Reduzidos",
      description: "Máximo de 160 participantes.",
    },
    {
      icon: "🎯",
      title: "Líder Centro-Oeste",
      description: "Maior administradora da região.",
    },
    {
      icon: "📱",
      title: "Plataforma Própria",
      description: "Acompanhe tudo online com facilidade.",
    },
    {
      icon: "💰",
      title: "Sem Fundo de Reserva",
      description: "Sem taxas extras, sem surpresas.",
    },
  ];

  const currentContent =
    activeTab === "about" ? aboutContent : differentialsContent;

  return (
    <section
      style={{
        backgroundColor: theme.colors.background, // #F5F1EB
      }}
      className="py-16"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center mb-10 space-x-3">
          {[
            { key: "about", label: "Quem Somos" },
            { key: "differentials", label: "Diferenciais" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as "about" | "differentials")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeTab === tab.key
                  ? "bg-primary text-white"
                  : "text-primary border border-primary hover:bg-primary hover:text-white"
              }`}
              style={{
                backgroundColor:
                  activeTab === tab.key ? theme.colors.primary : "transparent",
                color:
                  activeTab === tab.key
                    ? theme.colors.white
                    : theme.colors.primary,
                borderColor: theme.colors.primary,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {currentContent.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">
            Pronto para começar?
          </h3>
          <p className="text-gray-700 text-sm mb-6 max-w-md mx-auto">
            Simule seu consórcio ou fale com um especialista da Canopus.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              className="px-6 py-3 text-sm rounded-full bg-primary text-white hover:opacity-90 transition"
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.white,
              }}
            >
              Simular Agora
            </button>
            <button
              className="px-6 py-3 text-sm rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition"
              style={{
                borderColor: theme.colors.primary,
                color: theme.colors.primary,
              }}
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDifferentials;
