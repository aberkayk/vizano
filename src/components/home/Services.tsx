"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FileText, Building2, Car, Briefcase } from "lucide-react";

const services = [
  {
    key: "residence",
    icon: FileText,
    delay: 0.2,
  },
  {
    key: "realestate",
    icon: Building2,
    delay: 0.4,
  },
  {
    key: "automobile",
    icon: Car,
    delay: 0.6,
  },
  {
    key: "trade",
    icon: Briefcase,
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
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: service.delay }}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-brand-secondary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-secondary/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-brand-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`services.${service.key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
