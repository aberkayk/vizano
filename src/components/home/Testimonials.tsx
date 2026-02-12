"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const t = useTranslations("Home");

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          {t("testimonials.title")}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5].map((index) => {
            const name = t(`testimonials.items.${index}.name`);
            const initial = name.charAt(0).toUpperCase();
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-s-4 border-brand-secondary"
              >
                <Quote className="absolute top-4 right-4 w-10 h-10 text-brand-secondary/20" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-primary font-bold text-lg">
                      {initial}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-primary/80">
                      {t(`testimonials.items.${index}.position`)}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  {t(`testimonials.items.${index}.comment`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
