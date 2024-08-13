"use client";

import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default MotionDiv;

interface Props {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

const MotionDivLeft = ({ children, className, delay = 0.05 }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: delay, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const MotionDivRight = ({ children, className, delay = 0.05 }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: delay, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { MotionDivLeft, MotionDivRight };
