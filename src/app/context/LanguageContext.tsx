"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/app/locales/en";
import es from "@/app/locales/es";

type LanguageContextType = {
  language: string;
  t: any;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  t: es,
  setLanguage: () => {}
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState("es");
  const [t, setT] = useState(es);

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "es";
    setLanguageState(lang);
  }, []);

  useEffect(() => {
    setT(language === "es" ? es : en);
  }, [language]);

  const setLanguage = (lang: string) => {
    localStorage.setItem("lang", lang);
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
