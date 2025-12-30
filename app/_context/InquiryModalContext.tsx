"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";

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
  openModal: (step?: InquiryStep, title?: string, onSuccess?: () => void) => void;
  closeModal: () => void;
  setStep: (step: InquiryStep) => void;
  updateFormData: (data: Partial<InquiryFormData>) => void;
  resetForm: () => void;
  triggerSuccess: () => void;
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
  const onSuccessCallback = useRef<(() => void) | null>(null);

  const openModal = useCallback((step: InquiryStep = "preference", title?: string, onSuccess?: () => void) => {
    setCurrentStep(step);
    setModalTitle(title || defaultModalTitle);
    onSuccessCallback.current = onSuccess || null;
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
    onSuccessCallback.current = null;
  }, []);

  const triggerSuccess = useCallback(() => {
    if (onSuccessCallback.current) {
      onSuccessCallback.current();
    }
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
        triggerSuccess,
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

