"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type InquiryStep = "preference" | "budget" | "contact";

interface InquiryFormData {
  purpose: string;
  name: string;
  email: string;
  phone: string;
  budget: string;
}

interface InquiryModalContextType {
  isOpen: boolean;
  currentStep: InquiryStep;
  formData: InquiryFormData;
  openModal: (step?: InquiryStep) => void;
  closeModal: () => void;
  setStep: (step: InquiryStep) => void;
  updateFormData: (data: Partial<InquiryFormData>) => void;
  resetForm: () => void;
}

const initialFormData: InquiryFormData = {
  purpose: "",
  name: "",
  email: "",
  phone: "",
  budget: "",
};

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

  const openModal = useCallback((step: InquiryStep = "preference") => {
    setCurrentStep(step);
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
  }, []);

  return (
    <InquiryModalContext.Provider
      value={{
        isOpen,
        currentStep,
        formData,
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

