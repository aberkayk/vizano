"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import HomepageSlider from "../homepage-slider";
import Link from "next/link";

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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-primary via-brand-primary/90 to-brand-secondary">
      <div className="container mx-auto px-4 grid xl:grid-cols-2 gap-12 items-center pt-10 xl:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center xl:text-left flex flex-col justify-center items-center xl:items-start mt-6 xl:mt-0"
        >
          <h1 className="text-5xl font-bold mb-6 leading-normal text-center xl:text-left text-white">
            {t("hero.title")}
          </h1>
          <p className="text-xl mb-8 text-white/80 text-center xl:text-left">
            {t("hero.description")}
          </p>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
              className="bg-brand-secondary hover:bg-brand-secondary/90 text-white px-8 py-3 rounded-lg w-fit transition-colors"
            >
              {t("hero.cta")}
            </motion.button>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg w-fit transition-colors"
              >
                {t("hero.contact")}
              </motion.button>
            </Link>
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
