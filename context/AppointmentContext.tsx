"use client";

import React, { createContext, useContext, useState } from "react";

interface AppointmentContextType {
  isOpen: boolean;
  initialReason: string;
  openAppointmentModal: (reason?: string) => void;
  closeAppointmentModal: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export function AppointmentProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialReason, setInitialReason] = useState("");

  const openAppointmentModal = (reason = "") => {
    setInitialReason(reason);
    setIsOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsOpen(false);
  };

  return (
    <AppointmentContext.Provider
      value={{
        isOpen,
        initialReason,
        openAppointmentModal,
        closeAppointmentModal,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppointment must be used within an AppointmentProvider");
  }
  return context;
}
