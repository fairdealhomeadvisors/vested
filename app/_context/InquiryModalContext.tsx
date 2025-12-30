"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type InquiryStep = "preference" | "budget" | "contact";

interface InquiryFormData {
  purpose: string;
  name: string;
  contactMode: string;
  phone: string;
  budget: string;
}

interface InquiryModalContextType {
  isOpen: boolean;
  currentStep: InquiryStep;
  formData: InquiryFormData;
  modalTitle: string;
  openModal: (step?: InquiryStep, title?: string) => void;
  closeModal: () => void;
  setStep: (step: InquiryStep) => void;
  updateFormData: (data: Partial<InquiryFormData>) => void;
  resetForm: () => void;
}

const initialFormData: InquiryFormData = {
  purpose: "",
  name: "",
  phone: "",
  contactMode: "",
  budget: "",
};

const defaultModalTitle = "Find Your Dream Home";

const InquiryModalContext = createContext<InquiryModalContextType | undefined>(
  undefined
);

export function InquiryModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<InquiryStep>("preference");
  const [formData, setFormData] = useState<InquiryFormData>(initialFormData);
  const [modalTitle, setModalTitle] = useState(defaultModalTitle);

  const openModal = useCallback((step: InquiryStep = "preference", title?: string) => {
    setCurrentStep(step);
    setModalTitle(title || defaultModalTitle);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const setStep = useCallback((step: InquiryStep) => {
    setCurrentStep(step);
  }, []);

  const updateFormData = useCallback((data: Partial<InquiryFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setCurrentStep("preference");
    setModalTitle(defaultModalTitle);
  }, []);

  return (
    <InquiryModalContext.Provider
      value={{
        isOpen,
        currentStep,
        formData,
        modalTitle,
        openModal,
        closeModal,
        setStep,
        updateFormData,
        resetForm,
      }}
    >
      {children}
    </InquiryModalContext.Provider>
  );
}

export function useInquiryModal() {
  const context = useContext(InquiryModalContext);
  if (context === undefined) {
    throw new Error(
      "useInquiryModal must be used within an InquiryModalProvider"
    );
  }
  return context;
}

