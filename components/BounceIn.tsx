import React from "react";
import { AnimatePresence, motion } from "framer-motion";
type BounceInProps = {
  children: React.ReactNode;
};

export const BounceIn: React.FC<BounceInProps> = ({ children }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.8 },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
