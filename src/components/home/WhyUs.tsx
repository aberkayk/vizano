"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Award, HeadphonesIcon, Users, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "experience",
    delay: 0.2,
  },
  {
    icon: HeadphonesIcon,
    title: "support",
    delay: 0.4,
  },
  {
    icon: Users,
    title: "success",
    delay: 0.6,
  },
  {
    icon: ShieldCheck,
    title: "trust",
    delay: 0.8,
  },
];

export default function WhyUs() {
  const t = useTranslations("Home");

  return (
    <section className="py-20 bg-white">
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
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: reason.delay }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-brand-primary/10 mx-auto flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {t(`whyUs.${reason.title}`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`whyUs.${reason.title}Desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
