"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  isFloating?: boolean;
}

export default function WhatsAppButton({
  phoneNumber = "+905066695796",
  message,
  isFloating = true,
}: WhatsAppButtonProps) {
  const t = useTranslations("ContactForm");

  // Use translated message if no custom message is provided
  const whatsappMessage = message || t("whatsapp-message");

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };
  if (isFloating) {
    return (
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label={t("whatsapp")}
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          {t("whatsapp")}
        </span>
      </button>
    );
  } else {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-500 hover:bg-green-500 text-white px-8 py-3 rounded-lg w-fit"
        onClick={handleWhatsAppClick}
      >
        {t("whatsapp")}
      </motion.button>
    );
  }
}
