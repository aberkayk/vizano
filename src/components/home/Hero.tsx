"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import HomepageSlider from "../homepage-slider";

export default function Hero() {
  const t = useTranslations("Home");

  const scrollToServices = () => {
    const servicesElement = document.getElementById("services");
    if (servicesElement) {
      servicesElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-transparent">
      <div className="container mx-auto px-4 grid 2xl:grid-cols-2 gap-12 items-center pt-10 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center 2xl:text-left flex flex-col justify-center items-center 2xl:items-start mt-6 2xl:mt-0"
        >
          <h1 className="text-5xl font-bold mb-6 leading-normal text-center 2xl:text-left">
            {t("hero.title")}
          </h1>
          <p className="text-xl mb-8 text-gray-600 text-center 2xl:text-left">
            {t("hero.description")}
          </p>
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
              className="bg-primary text-white px-8 py-3 rounded-lg w-fit"
            >
              {t("hero.cta")}
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center mx-auto justify-center w-full aspect-square max-w-2xl rounded-sm"
        >
          <HomepageSlider />
        </motion.div>
      </div>
    </section>
  );
}
