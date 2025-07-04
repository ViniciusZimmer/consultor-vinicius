import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import theme from "../theme";

import CreditScoreIcon from "@mui/icons-material/CreditScore";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";

import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import StarRateIcon from "@mui/icons-material/StarRate";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import openWhatsApp from "../hooks/openWhatsApp";

const AboutDifferentials = () => {
  const [activeTab, setActiveTab] = useState<"about" | "differentials">(
    "about"
  );

  const aboutContent = [
    {
      icon: (
        <MilitaryTechIcon
          fontSize="large"
          sx={{ color: theme.colors.primary }}
        />
      ),
      title: "18 Anos de Experiência",
      description: "Quase duas décadas no segmento de consórcio.",
    },
    {
      icon: (
        <StarRateIcon fontSize="large" sx={{ color: theme.colors.primary }} />
      ),
      title: "Maior Taxa de Contemplação",
      description: "O melhor índice de contemplação do Brasil.",
    },
    {
      icon: (
        <DirectionsCarIcon
          fontSize="large"
          sx={{ color: theme.colors.primary }}
        />
      ),
      title: "Marcas Renomadas",
      description: "Toyota, BMW, Mini, Chery e Honda.",
    },
  ];

  const differentialsContent = [
    {
      icon: (
        <CreditScoreIcon
          fontSize="large"
          sx={{
            color: theme.colors.primary,
          }}
        />
      ),
      title: "Lance Parcelado",
      description: "Parcele seu lance em até 4x ou use o próprio crédito.",
    },
    {
      icon: (
        <GroupIcon
          fontSize="large"
          sx={{
            color: theme.colors.primary,
          }}
        />
      ),
      title: "Grupos Reduzidos",
      description: "Máximo de 160 participantes.",
    },
    {
      icon: (
        <EmojiEventsIcon
          fontSize="large"
          sx={{
            color: theme.colors.primary,
          }}
        />
      ),
      title: "Líder Centro-Oeste",
      description: "Maior administradora da região.",
    },
    {
      icon: (
        <SmartphoneIcon
          fontSize="large"
          sx={{
            color: theme.colors.primary,
          }}
        />
      ),
      title: "Plataforma Própria",
      description: "Acompanhe tudo online com facilidade.",
    },
    {
      icon: (
        <MoneyOffIcon
          fontSize="large"
          sx={{
            color: theme.colors.primary,
          }}
        />
      ),
      title: "Sem Fundo de Reserva",
      description: "Sem taxas extras, sem surpresas.",
    },
  ];

  const currentContent =
    activeTab === "about" ? aboutContent : differentialsContent;

  return (
    <>
      <section
        style={{
          backgroundColor: theme.colors.background,
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
                onClick={() =>
                  setActiveTab(tab.key as "about" | "differentials")
                }
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeTab === tab.key
                    ? "bg-primary text-white"
                    : "text-primary border border-primary hover:bg-primary hover:text-white"
                }`}
                style={{
                  backgroundColor:
                    activeTab === tab.key
                      ? theme.colors.primary
                      : "transparent",
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
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition flex items-start gap-4"
                >
                  <div className="text-primary text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
        </div>
      </section>

      <section
        style={{
          backgroundColor: theme.colors.white,
        }}
        className="pb-16 pr-4 pl-4 space-y-4 md:pl-0 md:pr-0"
      >
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
              onClick={() => {
                const simulatorElement = document.querySelector("#simulator");
                simulatorElement?.scrollIntoView({ behavior: "smooth" });
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
              onClick={() => openWhatsApp()}
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDifferentials;
