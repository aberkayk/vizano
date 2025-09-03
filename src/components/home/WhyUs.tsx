"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const reasons = [
  {
    icon: "⭐",
    title: "experience",
    delay: 0.2,
  },
  { icon: "🎯", title: "support", delay: 0.4 },
  {
    icon: "🏆",
    title: "success",
    value: "1000 Üzerinde Memnun Müşteri",
    delay: 0.6,
  },
  {
    icon: "✨",
    title: "trust",
    delay: 0.8,
  },
];

export default function WhyUs() {
  const t = useTranslations("Home");

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          {t("whyUs.title")}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reason.delay }}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {t(`whyUs.${reason.title}`)}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
