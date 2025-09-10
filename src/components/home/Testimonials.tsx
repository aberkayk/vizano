"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ContractImage from "../../../public/images/contract.png";

export default function Testimonials() {
  const t = useTranslations("Home");

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="relative flex items-center mx-auto justify-center w-full aspect-[5/3] max-w-lg rounded-sm mb-16 min-h-96">
          <Image
            src={ContractImage}
            alt="Hero"
            fill
            className="object-cover rounded-sm"
          />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          {t("testimonials.title")}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h3 className="font-semibold text-lg">
                    {t(`testimonials.items.${index}.name`)}
                  </h3>
                  <p className="text-primary/80">
                    {t(`testimonials.items.${index}.position`)}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                {t(`testimonials.items.${index}.comment`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
