"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const services = [
  {
    key: "residence",
    icon: "📋",
    delay: 0.2,
  },
  {
    key: "realestate",
    icon: "🏠",
    delay: 0.4,
  },
  {
    key: "automobile",
    icon: "🚗",
    delay: 0.6,
  },
  {
    key: "trade",
    icon: "💼",
    delay: 0.8,
  },
];

export default function Services() {
  const t = useTranslations("Home");

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          {t("services.title")}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`services.${service.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
