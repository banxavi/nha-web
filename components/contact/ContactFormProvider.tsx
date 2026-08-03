"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ContactFormModal } from "@/components/contact/ContactFormModal";
import type { ContactFormVariant } from "@/lib/site-config";

type OpenContactFormOptions = {
  variant?: ContactFormVariant;
  selectedSample?: string;
};

type ContactFormContextValue = {
  openContactForm: (options?: OpenContactFormOptions) => void;
  closeContactForm: () => void;
};

const ContactFormContext = createContext<ContactFormContextValue | null>(null);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [variant, setVariant] = useState<ContactFormVariant>("register");
  const [selectedSample, setSelectedSample] = useState<string | undefined>();

  const openContactForm = useCallback((options?: OpenContactFormOptions) => {
    setVariant(options?.variant ?? "register");
    setSelectedSample(options?.selectedSample);
    setOpen(true);
  }, []);

  const closeContactForm = useCallback(() => {
    setOpen(false);
  }, []);

  const value = useMemo(
    () => ({ openContactForm, closeContactForm }),
    [openContactForm, closeContactForm],
  );

  return (
    <ContactFormContext.Provider value={value}>
      {children}
      <ContactFormModal
        open={open}
        onClose={closeContactForm}
        variant={variant}
        selectedSample={selectedSample}
      />
    </ContactFormContext.Provider>
  );
}

export function useContactForm() {
  const ctx = useContext(ContactFormContext);
  if (!ctx) {
    throw new Error("useContactForm must be used within ContactFormProvider");
  }
  return ctx;
}
