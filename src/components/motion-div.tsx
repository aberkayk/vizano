"use client";

import { motion } from "framer-motion";

const MotionDiv = motion.div;

export default MotionDiv;

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const MotionDivLeft = ({ children, className }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.05, duration: 0.5 }}
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

const MotionDivRight = ({ children, className }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.05, duration: 0.5 }}
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
