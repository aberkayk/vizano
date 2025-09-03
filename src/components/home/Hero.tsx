"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import DreamingImage from "../../../public/images/plane.png";

export default function Hero() {
  const t = useTranslations("Home");

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-transparent">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center pt-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl font-bold mb-6 leading-normal text-center lg:text-left">
            {t("hero.title")}
          </h1>
          <p className="text-xl mb-8 text-gray-600 text-center lg:text-left">
            {t("hero.description")}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-lg "
          >
            {t("hero.cta")}
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center mx-auto justify-center w-full aspect-square max-w-2xl rounded-sm"
        >
          <Image
            src={DreamingImage}
            alt="Hero"
            fill
            className="object-contain rounded-sm"
          />
        </motion.div>
      </div>
    </section>
  );
}
