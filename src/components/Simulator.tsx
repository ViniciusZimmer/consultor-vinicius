import { useState } from "react";
import theme from "../theme";
import { constants } from "../constants";
import sendTelegramMessage from "../hooks/sendTelegramMessage";
import { sendConversionEvent } from "../config";

import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Simulator = () => {
  const [step, setStep] = useState(1); // Controla o passo atual
  const [value, setValue] = useState(1000); // Valor do crédito ou parcela
  const [selectedCategory, setSelectedCategory] = useState(
    constants.simulator.options[0].label
  ); // Categoria selecionada
  const [selectedPlanType, setSelectedPlanType] = useState(
    constants.simulator.creditOptions[0].label
  ); // Tipo de plano selecionado
  const [range, setRange] = useState({
    min: 300, // Valor inicial para "Parcela"
    max: 5000, // Valor inicial para "Parcela"
  }); // Range dinâmico
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    termsAccepted: false,
  }); // Dados do formulário
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionStatus, setSubmissionStatus] = useState<
    "success" | "error" | null
  >(null);
  const [loading, setLoading] = useState(false);

  const [openTermsModal, setOpenTermsModal] = useState(false);

  const handleOpenTermsModal = () => setOpenTermsModal(true);
  const handleCloseTermsModal = () => setOpenTermsModal(false);

  const handleCategoryClick = (category: string) =>
    setSelectedCategory(category);

  const handlePlanTypeClick = (planType: string) => {
    setSelectedPlanType(planType);

    // Atualiza o range dinamicamente com base no tipo de plano
    if (planType === "Parcela") {
      setRange({ min: 300, max: 5000 }); // Range para parcelas
      setValue(300); // Valor inicial para parcelas
    } else if (planType === "Crédito") {
      setRange({ min: 13000, max: 1000000 }); // Range para crédito
      setValue(13000); // Valor inicial para crédito
    }
  };

  const maskPhone = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.maxLength = 15;
    const { value } = event.currentTarget;
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})/, "$1-$2");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    const formattedValue = name === "phone" ? maskPhone(e) : value;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : formattedValue,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Limpa erro ao digitar
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{8,15}$/; // Exemplo simples: entre 8 e 15 dígitos

    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório.";
    if (!formData.email.trim() || !emailRegex.test(formData.email))
      newErrors.email = "E-mail inválido.";
    if (
      !formData.phone.trim() ||
      !phoneRegex.test(formData.phone.replace(/\D/g, ""))
    )
      newErrors.phone = "Telefone inválido.";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "É necessário aceitar os termos.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setLoading(true);
    try {
      const result = await sendTelegramMessage({
        category: selectedCategory,
        planType: selectedPlanType,
        value,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });

      if (result.success) {
        setSubmissionStatus("success");
        sendConversionEvent("AW-17355560233/f9qmCIbf-fAaEKmq49NA");
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Erro ao enviar simulação:", error);
      setSubmissionStatus("error");
    } finally {
      setStep(3);
      setLoading(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email.trim() &&
      formData.phone.trim() &&
      formData.termsAccepted
    );
  };

  return (
    <div
      className="p-6 rounded-lg shadow-lg"
      style={{
        backgroundColor: theme.colors.white,
        maxWidth: "400px",
        margin: "0 auto",
        textAlign: "center",
        minHeight: "550px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {step === 1 && (
        <>
          <h2
            className="text-lg md:text-xl font-bold mb-4"
            style={{ color: theme.colors.primary }}
          >
            {constants.simulator.title}
          </h2>
          <p className="text-sm mb-4" style={{ color: theme.colors.black }}>
            {constants.simulator.description}
          </p>

          {/* Botões de categorias */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {constants.simulator.options.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(category.label)}
                className={`py-2 px-4 rounded-full font-bold ${
                  selectedCategory === category.label
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-primary"
                }`}
                style={{
                  backgroundColor:
                    selectedCategory === category.label
                      ? theme.colors.primary
                      : theme.colors.white,
                  color:
                    selectedCategory === category.label
                      ? theme.colors.white
                      : theme.colors.primary,
                  border:
                    selectedCategory === category.label
                      ? "none"
                      : `1px solid ${theme.colors.primary}`,
                }}
              >
                {category.label}
              </button>
            ))}
          </div>

          <p className="text-sm mb-4" style={{ color: theme.colors.black }}>
            {constants.simulator.planPrompt}
          </p>

          {/* Botões de opções de crédito */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {constants.simulator.creditOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handlePlanTypeClick(option.label)}
                className={`py-2 px-4 rounded-full font-bold ${
                  selectedPlanType === option.label
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-primary"
                }`}
                style={{
                  backgroundColor:
                    selectedPlanType === option.label
                      ? theme.colors.primary
                      : theme.colors.white,
                  color:
                    selectedPlanType === option.label
                      ? theme.colors.white
                      : theme.colors.primary,
                  border:
                    selectedPlanType === option.label
                      ? "none"
                      : `1px solid ${theme.colors.primary}`,
                }}
              >
                {option.label}
              </button>
            ))}
          </div>

          <p className="text-sm mb-4" style={{ color: theme.colors.black }}>
            {constants.simulator.creditPrompt}
          </p>
          <h3
            className="text-xl font-bold mb-4"
            style={{ color: theme.colors.black }}
          >
            R$ {value.toLocaleString("pt-BR")},00
          </h3>
          <input
            type="range"
            min={range.min}
            max={range.max}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full mb-4"
            style={{ accentColor: theme.colors.primary }}
          />
          <div
            className="flex justify-between text-sm mb-4"
            style={{ color: theme.colors.black }}
          >
            <span>R$ {range.min.toLocaleString("pt-BR")}</span>
            <span>R$ {range.max.toLocaleString("pt-BR")}</span>
          </div>
          <button
            onClick={() => setStep(2)}
            className="py-3 px-6 rounded-full font-bold"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.white,
            }}
          >
            {constants.simulator.simulateButton}
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2
            className="text-lg md:text-xl font-bold mb-4"
            style={{ color: theme.colors.primary }}
          >
            Realize seus planos com a Simuladora de Parcelas
          </h2>
          <p className="text-sm mb-4" style={{ color: theme.colors.black }}>
            Preencha os campos abaixo para ver os resultados:
          </p>
          <div className="space-y-4 text-left">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nome *"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.name ? "border-red-500" : "focus:border-primary"
                }`}
                style={{
                  color: theme.colors.secondary,
                  caretColor: theme.colors.primary,
                }}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail *"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.email ? "border-red-500" : "focus:border-primary"
                }`}
                style={{
                  color: theme.colors.secondary,
                  caretColor: theme.colors.primary,
                }}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Telefone *"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                  errors.phone ? "border-red-500" : "focus:border-primary"
                }`}
                style={{
                  color: theme.colors.secondary,
                  caretColor: theme.colors.primary,
                }}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className={`mr-2 w-5 h-5 rounded ${
                  errors.termsAccepted ? "border-red-500" : ""
                }`}
                style={{
                  accentColor: theme.colors.primary,
                  borderColor: errors.termsAccepted
                    ? "#ef4444"
                    : theme.colors.primary,
                  backgroundColor: theme.colors.white,
                }}
                id="termsAccepted"
              />
              <label
                htmlFor="termsAccepted"
                className="text-sm font-medium"
                style={{ color: theme.colors.black }}
              >
                Aceito os{" "}
                <span
                  onClick={handleOpenTermsModal}
                  style={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: theme.colors.black,
                  }}
                >
                  Termos de Privacidade
                </span>
              </label>
            </div>
            {errors.termsAccepted && (
              <p className="text-red-500 text-xs mt-1">
                {errors.termsAccepted}
              </p>
            )}
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={() => setStep(1)}
              className="py-3 px-6 rounded-full font-bold"
              style={{
                backgroundColor: theme.colors.lightGray,
                color: theme.colors.black,
              }}
              disabled={loading}
            >
              Voltar
            </button>
            <button
              onClick={handleSubmit}
              className="py-3 px-6 rounded-full font-bold shadow-md hover:opacity-90 transition"
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.white,
                opacity: loading ? 0.6 : 1,
              }}
              disabled={!isFormValid() || loading}
            >
              {loading ? "Enviando..." : "Resultado"}
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          {submissionStatus === "success" && (
            <div className="text-center p-6">
              {/* Ícone de sucesso */}
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2
                className="text-xl md:text-2xl font-bold mb-2"
                style={{ color: theme.colors.primary }}
              >
                🎉 Simulação enviada com sucesso!
              </h2>
              <p className="text-sm mb-6" style={{ color: theme.colors.black }}>
                Recebemos seus dados! Nossa equipe entrará em contato com você
                em breve.
              </p>
              <button
                onClick={() => setStep(1)}
                className="py-3 px-6 rounded-full font-bold shadow-md hover:opacity-90 transition"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.white,
                }}
              >
                Voltar ao início
              </button>
            </div>
          )}

          {submissionStatus === "error" && (
            <div className="text-center p-6">
              {/* Ícone de erro */}
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>

              <h2
                className="text-xl md:text-2xl font-bold mb-2"
                style={{ color: theme.colors.teal }}
              >
                ❌ Ocorreu um erro no envio
              </h2>
              <p className="text-sm mb-6" style={{ color: theme.colors.black }}>
                Infelizmente não conseguimos processar sua simulação no momento.
                Por favor, tente novamente mais tarde.
              </p>
              <button
                onClick={() => setStep(1)}
                className="py-3 px-6 rounded-full font-bold shadow-md hover:opacity-90 transition"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.white,
                }}
              >
                Tentar novamente
              </button>
            </div>
          )}
        </>
      )}
      <Modal open={openTermsModal} onClose={handleCloseTermsModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            maxWidth: 550,
            bgcolor: "#fff",
            borderRadius: 3,
            boxShadow: 24,
            outline: "none",
            display: "flex",
            flexDirection: "column",
            maxHeight: "90vh",
          }}
        >
          {/* Cabeçalho */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 3,
              py: 2,
              borderBottom: "1px solid #eee",
              backgroundColor: theme.colors.black,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: 600, color: theme.colors.primary }}
            >
              Termos de Responsabilidade
            </Typography>
            <IconButton
              onClick={handleCloseTermsModal}
              sx={{ color: theme.colors.primary }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Conteúdo rolável */}
          <Box
            sx={{
              overflowY: "auto",
              px: 3,
              py: 2,
              color: theme.colors.black,
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            <Typography>
              <strong>POLÍTICA DE PRIVACIDADE</strong>
              <br />
              A presente Política de Privacidade tem por finalidade demonstrar o
              compromisso da NAX OPEN FINANCE, representada por EVOLUX SOLUÇÕES
              FINANCEIRAS E EMPRESARIAIS LTDA, pessoa jurídica de direito
              privado, inscrita no CNPJ sob nº 51.605.553/0001-09, com sede à
              RUA MARECHAL DEODORO, 450, CONJ. 1008, ANDAR 10, COND. MAURICIO
              CAILLET, CENTRO, CURITIBA - BRASIL, com a privacidade e a proteção
              dos dados pessoais coletados no desenvolvimento de suas
              atividades.
              <br />
              <br />
              <strong>QUAIS DADOS PESSOAIS COLETAMOS?</strong>
              <br />
              Para o regular desenvolvimento de nossa atividade, coletamos dados
              pessoais de nossos clientes, fornecedores, colaboradores e
              parceiros de negócio, respeitando sempre os princípios da Lei
              Geral de Proteção de Dados, tais como a minimização dos dados,
              finalidade e transparência.
              <br />
              <br />
              <strong>POR QUE UTILIZAMOS OS SEUS DADOS?</strong>
              <br />
              Para ofertar produtos e serviços a você; firmar contratos; nos
              comunicarmos; e cumprir nossas obrigações legais e regulatórias.
              Os dados são utilizados para identificação, perfilamento, gestão,
              atendimento, expansão e aprimoramento de nossos serviços.
              <br />
              <br />
              <strong>COMO PROTEGEMOS SEUS DADOS?</strong>
              <br />
              Adotamos práticas de segurança da informação compatíveis com o
              nosso setor, incluindo criptografia, controle de acessos,
              políticas internas de privacidade, capacitação de equipes e
              auditorias frequentes.
              <br />
              <br />
              <strong>CUMPRIMENTO AOS DIREITOS DO TITULAR</strong>
              <br />
              A NAX OPEN FINANCE assegura os direitos previstos na LGPD, como
              confirmação e acesso aos dados tratados, correção de dados,
              anonimização, bloqueio ou eliminação de dados, portabilidade, e
              revogação do consentimento.
              <br />
              <br />
              <strong>COMPARTILHAMENTO DE DADOS</strong>
              <br />
              Os dados coletados são de responsabilidade da NAX OPEN FINANCE e
              só são compartilhados com fornecedores e parceiros, autoridades
              públicas, ou empresas do mesmo grupo, respeitando esta Política de
              Privacidade.
              <br />
              <br />
              <strong>TRANSFERÊNCIA INTERNACIONAL DE DADOS</strong>
              <br />
              Alguns dados podem ser transferidos para fora do Brasil por conta
              de fornecedores que estejam no exterior, desde que assegurado o
              mesmo nível de proteção previsto na legislação brasileira.
              <br />
              <br />
              <strong>PRAZO DE RETENÇÃO DOS DADOS</strong>
              <br />
              Os dados são mantidos pelo tempo necessário para cumprimento das
              finalidades para as quais foram coletados, ou para o cumprimento
              de obrigações legais, regulatórias e contratuais.
              <br />
              <br />
              <strong>CONTATO DO DPO</strong>
              <br />
              E-mail para contato com o Encarregado de Proteção de Dados:
              naxvinicius@gmail.com
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default Simulator;
