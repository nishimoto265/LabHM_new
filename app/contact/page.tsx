"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { language } = useLanguage()

  const translations = {
    title: {
      ja: "研究室への見学希望、共同研究のご相談など、お気軽にお問い合わせください",
      en: "Feel free to contact us regarding lab visits, research collaboration inquiries, or any other questions",
    },
    name: {
      ja: "お名前",
      en: "Name",
    },
    organization: {
      ja: "所属組織",
      en: "Organization",
    },
    email: {
      ja: "メールアドレス",
      en: "Email Address",
    },
    phone: {
      ja: "電話番号",
      en: "Phone Number",
    },
    subject: {
      ja: "件名",
      en: "Subject",
    },
    message: {
      ja: "お問い合わせ内容",
      en: "Message",
    },
    required: {
      ja: "必須",
      en: "Required",
    },
    submit: {
      ja: "送信する",
      en: "Submit",
    },
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* メインコンテンツ */}
      <div className="flex-grow">
        <div className="py-16">
          {/* Contact タイトル */}
          <div className="text-center mb-16">
            <div className="relative w-full max-w-xs mx-auto h-20 mb-2">
              <Image
                src="/images/contact.png"
                alt={language === "ja" ? "お問い合わせ" : "Contact"}
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-xl">{translations.title[language]}</p>
          </div>

          <div className="container">
            <div className="max-w-3xl mx-auto">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      {translations.name[language]} <span className="text-red-500">*</span>
                    </Label>
                    <Input id="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">{translations.organization[language]}</Label>
                    <Input id="organization" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {translations.email[language]} <span className="text-red-500">*</span>
                    </Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{translations.phone[language]}</Label>
                    <Input id="phone" type="tel" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">
                    {translations.subject[language]} <span className="text-red-500">*</span>
                  </Label>
                  <Input id="subject" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    {translations.message[language]} <span className="text-red-500">*</span>
                  </Label>
                  <Textarea id="message" rows={6} required />
                </div>

                <div className="text-center">
                  <Button type="submit" className="px-8">
                    {translations.submit[language]}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
