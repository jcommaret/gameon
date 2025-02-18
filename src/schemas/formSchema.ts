import * as yup from "yup";

export const formSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("Le prénom est requis")
    .min(2, "Le prénom doit contenir au moins 2 caractères"),

  lastname: yup
    .string()
    .required("Le nom est requis")
    .min(2, "Le nom doit contenir au moins 2 caractères"),

  email: yup
    .string()
    .required("L'email est requis")
    .email("L'email n'est pas valide"),

  birthdate: yup
    .string()
    .required("La date de naissance est requise")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Format de date invalide (YYYY-MM-DD)"),

  quantity: yup
    .number()
    .required("Le nombre de tournois est requis")
    .min(0, "Le nombre doit être positif")
    .max(99, "Le nombre maximum est 99"),

  location: yup
    .string()
    .required("Veuillez sélectionner une ville")
    .oneOf(
      ["New York", "San Francisco", "Seattle", "Chicago", "Boston", "Portland"],
      "Veuillez sélectionner une ville valide"
    ),

  acceptTerms: yup
    .boolean()
    .oneOf([true], "Vous devez accepter les conditions d'utilisation"),

  newsletter: yup.boolean().default(false),
});

export type FormData = yup.InferType<typeof formSchema>;
