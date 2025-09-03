"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React from "react";
import DreamingImage from "../../../public/images/vizano.png";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutUs = () => {
  const t = useTranslations("About");
  return (
    <div className="container mx-auto px-4">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <h1 className="text-5xl font-bold mb-6 bg-clip-text ">
          {t("title")}
        </h1>
        <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
      </motion.div>

      {/* Values Section */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="mb-24"
      >
        <motion.h2 className="text-3xl font-semibold text-center mb-12">
          {t("values.title")}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {["integrity", "transparency", "reliability", "expertise"].map(
            (value, index) => (
              <motion.div
                key={value}
                className="group hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 mb-6 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-2xl text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-center mb-4">
                    {t(`values.${value}`)}
                  </h3>
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      <div className="relative flex items-center mx-auto justify-center w-full aspect-square max-w-lg rounded-sm my-6">
        <Image
          src={DreamingImage}
          alt="Hero"
          fill
          className="object-contain rounded-sm"
        />
      </div>

      {/* Story & Journey Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">
            {t("story.title")}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t("story.content")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6">
            {t("journey.title")}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t("journey.content")}
          </p>
        </motion.div>
      </div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center bg-card p-10 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-6">
          {t("mission.title")}
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {t("mission.content")}
        </p>
      </motion.div>
    </div>
  );
};

export default AboutUs;
