"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ja" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // ブラウザのローカルストレージから言語設定を取得するか、デフォルトで日本語を設定
  const [language, setLanguage] = useState<Language>("ja")

  // マウント時にローカルストレージから言語設定を読み込む
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "ja" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // 言語設定が変更されたらローカルストレージに保存
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>{children}</LanguageContext.Provider>
  )
}

// カスタムフックを作成して言語コンテキストを簡単に使えるようにする
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
