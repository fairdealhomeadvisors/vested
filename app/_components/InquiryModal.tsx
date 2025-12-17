"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/app/_components/ui/dialog";
import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { Label } from "@/app/_components/ui/label";
import {
  useInquiryModal,
  InquiryStep,
} from "@/app/_context/InquiryModalContext";
import {
  HomeIcon,
  CurrencyDollarIcon,
  UserIcon,
  CheckIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@/app/_lib/utils";
import { handleForm } from "../_actions/handleForm";

const steps: { id: InquiryStep; label: string; icon: React.ElementType }[] = [
  { id: "preference", label: "Preference", icon: HomeIcon },
  { id: "budget", label: "Budget", icon: CurrencyDollarIcon },
  { id: "contact", label: "Contact", icon: UserIcon },
];


export default function InquiryModal() {
  const {
    isOpen,
    currentStep,
    formData,
    closeModal,
    setStep,
    updateFormData,
    resetForm,
  } = useInquiryModal();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep);

  const validatePhone = (phone: string): boolean => {
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setPhoneError("Phone number must be at least 10 digits");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handlePhoneChange = (value: string) => {
    // Only allow numbers
    const numbersOnly = value.replace(/\D/g, "");
    updateFormData({ phone: numbersOnly });
    // Clear error when user starts typing
    if (phoneError) setPhoneError("");
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setStep(steps[currentStepIndex + 1].id);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setStep(steps[currentStepIndex - 1].id);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone before submission
    if (!validatePhone(formData.phone)) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await handleForm({
        name: formData.name,
        phone: formData.phone,
        contactMode: formData.contactMode,
        budget: formData.budget,
        purpose: formData.purpose,
      });
      
      setIsSubmitting(false);
      setShowSuccess(true);
      
      // Show success message for 2 seconds then close
      setTimeout(() => {
        setShowSuccess(false);
        resetForm();
        closeModal();
      }, 2000);
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeModal();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        className="gap-0 p-0 overflow-hidden bg-background border-none"
        showCloseButton={true}
      >
        {/* Header with gradient */}
        <div className="bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-4 sm:px-6 pt-5 sm:pt-6 pb-6 sm:pb-8">
          <DialogHeader className="text-white">
            <DialogTitle className="text-xl sm:text-2xl font-semibold tracking-tight">
              Find Your Dream Home
            </DialogTitle>
            <DialogDescription className="text-zinc-400 mt-1 text-sm">
              Tell us what you&apos;re looking for
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="bg-black text-white mt-0">
          {/* Loading State */}
          {isSubmitting && (
            <div className="p-10 sm:p-16 flex flex-col items-center justify-center animate-in fade-in-0 duration-300">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-zinc-700 border-t-emerald-500 rounded-full animate-spin" />
              </div>
              <p className="mt-6 text-lg text-zinc-400">Submitting your details...</p>
            </div>
          )}

          {/* Success State */}
          {showSuccess && (
            <div className="p-10 sm:p-16 flex flex-col items-center justify-center animate-in fade-in-0 zoom-in-95 duration-500">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircleIcon className="w-12 h-12 text-emerald-500" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">Thank You!</h3>
              <p className="mt-2 text-zinc-400 text-center">
                We&apos;ve received your inquiry.<br />Our team will contact you shortly.
              </p>
            </div>
          )}

          {/* Preference Step */}
          {!isSubmitting && !showSuccess && currentStep === "preference" && (
            <div className="p-5 sm:p-8 md:p-10 space-y-4 sm:space-y-6 animate-in fade-in-0 slide-in-from-bottom-20 duration-500">
              <div className="space-y-3">
                <Label className="text-xl sm:text-2xl md:text-3xl font-light">
                  What's your purpose for this property?
                </Label>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 my-6 sm:my-8 md:my-10">
                  <button
                    type="button"
                    onClick={() => updateFormData({ purpose: "end-use" })}
                    className={cn(
                      "text-2xl sm:text-3xl md:text-5xl border-2 border-gray-700 hover:text-black p-3 sm:p-4 cursor-pointer hover:bg-white rounded-lg flex-1 sm:flex-none",
                      formData.purpose === "end-use"
                        ? "bg-white text-black"
                        : ""
                    )}
                  >
                    🏡 End Use
                  </button>

                  <button
                    type="button"
                    onClick={() => updateFormData({ purpose: "investment" })}
                    className={cn(
                      "text-2xl sm:text-3xl md:text-5xl border-2 border-gray-700 hover:bg-white p-3 sm:p-4 cursor-pointer hover:text-black rounded-lg flex-1 sm:flex-none",
                      formData.purpose === "investment"
                        ? "bg-white text-black"
                        : ""
                    )}
                  >
                    🏢 Investment
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Budget Step */}
          {!isSubmitting && !showSuccess && currentStep === "budget" && (
            <div className="p-5 sm:p-8 md:p-10 space-y-4 sm:space-y-6 animate-in fade-in-0 slide-in-from-bottom-20 duration-500">
              <div className="space-y-3">
                <Label className="text-xl sm:text-2xl md:text-3xl font-light">
                  What budget are you considering?
                </Label>

                <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-4 md:gap-10 my-6 sm:my-8 md:my-10">
                  <button
                    type="button"
                    onClick={() => updateFormData({ budget: "0.50" })}
                    className={cn(
                      "text-base sm:text-2xl md:text-4xl border-2 border-gray-700 hover:text-white p-3 sm:p-4 cursor-pointer hover:bg-gray-800 rounded-lg",
                      formData.budget === "0.50" ? "bg-white text-black" : ""
                    )}
                  >
                    &lt; ₹50 Lakhs
                  </button>

                  <button
                    type="button"
                    onClick={() => updateFormData({ budget: "1" })}
                    className={cn(
                      "text-base sm:text-2xl md:text-4xl border-2 border-gray-700 hover:text-white p-3 sm:p-4 cursor-pointer hover:bg-gray-800 rounded-lg",
                      formData.budget === "1" ? "bg-white text-black" : ""
                    )}
                  >
                    &lt; ₹1 Crores
                  </button>
                  <button
                    type="button"
                    onClick={() => updateFormData({ budget: "3" })}
                    className={cn(
                      "text-base sm:text-2xl md:text-4xl border-2 border-gray-700 hover:text-white p-3 sm:p-4 cursor-pointer hover:bg-gray-800 rounded-lg",
                      formData.budget === "3" ? "bg-white text-black" : ""
                    )}
                  >
                    &lt; ₹3 Crores
                  </button>
                  <button
                    type="button"
                    onClick={() => updateFormData({ budget: "richierich" })}
                    className={cn(
                      "text-base sm:text-2xl md:text-4xl border-2 border-gray-700 hover:text-white p-3 sm:p-4 cursor-pointer hover:bg-gray-800 rounded-lg",
                      formData.budget === "richierich" ? "bg-white text-black" : ""
                    )}
                  >
                    No Limit
                  </button>
                </div>
                <div className="p-3 sm:p-4 rounded-lg bg-amber-50 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-800">
                  <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-200">
                    💡 <strong>Tip:</strong> Our team can help you explore
                    various financing options and connect you with preferred
                    banking partners.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Step */}
          {!isSubmitting && !showSuccess && currentStep === "contact" && (
            <div className="p-5 sm:p-8 md:p-10 space-y-4 sm:space-y-6 animate-in fade-in-0 slide-in-from-bottom-20 duration-500">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name <sup>*</sup>
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => updateFormData({ name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone Number  <sup>*</sup>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                  className={phoneError ? "border-red-500 focus-visible:ring-red-500" : ""}
                />
                {phoneError && (
                  <p className="text-sm text-red-500">{phoneError}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Preferred mode of contact:</Label>
                <div className="flex gap-2 flex-wrap">
                <button type="button" onClick={() => updateFormData({ contactMode: "whatsapp" })} className={cn("bg-green-400 w-min text-black px-4 py-2 rounded-lg", formData.contactMode === "whatsapp" ? "outline-2 outline-amber-50 outline-offset-2 outline-dashed" : "")}>Whatsapp</button>
                <button type="button" onClick={() => updateFormData({ contactMode: "phone" })} className={cn("bg-white w-min text-black px-4 py-2 rounded-lg", formData.contactMode === "phone" ? "outline-2 outline-amber-50 outline-offset-2 outline-dashed" : "")}>Phone</button>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          {!isSubmitting && !showSuccess && (
            <div className="flex items-center justify-between p-3 sm:p-4 bg-linear-to-br from-zinc-900 via-zinc-800 to-zinc-900">
              <Button
                type="button"
                variant="ghost"
                onClick={handlePrevious}
                disabled={currentStepIndex === 0}
                className={cn("gap-1 sm:gap-2 text-sm sm:text-base", currentStepIndex === 0 && "invisible")}
              >
                <ArrowLeftIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                Back
              </Button>

              {currentStepIndex < steps.length - 1 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="gap-1 sm:gap-2 text-base sm:text-xl bg-green-800 hover:bg-green-900 text-white"
                >
                  Continue
                  <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="gap-1 sm:gap-2 text-base sm:text-lg bg-emerald-800 hover:bg-emerald-900 text-white"
                >
                  Submit
                  <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              )}
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
