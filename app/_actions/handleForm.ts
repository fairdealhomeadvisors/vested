"use server";

interface InquiryFormData {
  name: string;
  phone: string;
  contactMode: string;
  budget: string;
  purpose: string;
}

export async function handleForm(formData: InquiryFormData): Promise<void> {
  const APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzJjxCbv04rvkpArTIOzUJ2syq6mUL06LezPIJ36PA6_KkbA4xzg0LuHW6r_xjpbf7X/exec"

  const response = await fetch(APP_SCRIPT_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit inquiry");
  }
}