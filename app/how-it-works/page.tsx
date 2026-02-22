"use client";

import { motion } from "motion/react";

export default function HowItWorks() {
  return (
    <section className="m-auto max-w-5xl mt-40 mb-10">
      <motion.div
        initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
        transition={{ duration: 0.25 }}
      >
        oi
      </motion.div>
    </section>
  );
}
