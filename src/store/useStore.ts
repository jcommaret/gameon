import { create } from "zustand";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  birthdate: string;
  quantity: number;
  location: string;
  acceptTerms: boolean;
  newsletter: boolean;
}

interface Store {
  isModalOpen: boolean;
  formData: FormData | null;
  isSubmitted: boolean;
  openModal: () => void;
  closeModal: () => void;
  setFormData: (data: FormData) => void;
  setSubmitted: (value: boolean) => void;
}

export const useStore = create<Store>((set) => ({
  isModalOpen: false,
  formData: null,
  isSubmitted: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false, isSubmitted: false }),
  setFormData: (data) => set({ formData: data }),
  setSubmitted: (value) => set({ isSubmitted: value }),
}));
