import * as yup from "yup";

export const formSchema = yup
  .object({
    firstname: yup.string().required("Veuillez entrer votre prénom"),
    lastname: yup.string().required("Veuillez entrer votre nom"),
    email: yup
      .string()
      .email("Email invalide")
      .required("Veuillez entrer votre email"),
    birthdate: yup.string().required("Veuillez entrer votre date de naissance"),
    quantity: yup.number().required("Veuillez entrer un nombre").min(0).max(99),
    location: yup.string().required("Veuillez sélectionner une ville"),
    acceptTerms: yup
      .boolean()
      .required()
      .oneOf([true], "Vous devez accepter les conditions"),
    newsletter: yup.boolean().required().default(false),
  })
  .required();

export type FormData = yup.InferType<typeof formSchema>;
