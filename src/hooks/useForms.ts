import { useState } from "react";

export const useFormHandler = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    termsAccepted: false, // Adicionando a propriedade 'termsAccepted'
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return { formData, handleInputChange };
};
